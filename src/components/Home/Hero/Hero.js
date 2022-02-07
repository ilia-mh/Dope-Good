import React, { useState, useEffect } from 'react'
import './hero.scss'

import { gsap } from "gsap";

import { motion, useAnimation } from 'framer-motion'
import Slide from './Slide'

let interval;

let tl = gsap.timeline({
	duration: 0,
	delay: 0
});

const apiUrl = process.env.REACT_APP_API_URL

export default function Hero() {

	const controls = useAnimation()

	const [ shownSlide, setShownSlide ] = useState(0);
	const [ currentMousPos, setCurrentMousPos ] = useState(0);

	const slides = [
		{
			title: 'DopeGood Sofa',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616b1eec93d32743b004665f/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/sofa'
		},
		{
			title: 'DopeGood Chair',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616c5439e14d614f48c54004/7.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/chair'
		},
		{
			title: 'DopeGood Desk',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616d80fe5c825d3d24e0f304/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/desk'
		},
		{
			title: 'DopeGood Lamps',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616d72155c825d3d24e0f301/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/lighting'
		}
	]

	const goToNextSlide = () => {
		
		const slideBefore = shownSlide
		const nextSlide = findNextSlide()
		
		controls.start('hidden')
		setShownSlide(nextSlide)
		
		tl.fromTo(`.slider-${slideBefore}`,{ x:0 }, { x: '-100vw' })
		tl.fromTo(`.slider-${nextSlide}`,{ x: '100vw' }, { x: '0vw' })

	}

	const goToSlide = (slideIdx) => {

		let dir = 1

		if( shownSlide > slideIdx &&
			 ( shownSlide === slides.length - 1 && slideIdx === 0 ? false : true ) &&
			 ( shownSlide === 0 && slides.length - 1 ? false : true )
			 ) dir = -1

		const currentSlide = shownSlide
		setShownSlide(slideIdx)

		if( dir === 1 ) {
			tl.fromTo(`.slider-${currentSlide}`,{ x:0 }, { x: '-100vw' })
			tl.fromTo(`.slider-${slideIdx}`,{ x: '100vw' }, { x: '0vw' })
		} else {
			tl.fromTo(`.slider-${currentSlide}`,{ x:0 }, { x: '100vw' })
			tl.fromTo(`.slider-${slideIdx}`,{ x: '-100vw' }, { x: '0vw' })
		}

	}

	useEffect( () => {

		clearInterval(interval);
		interval = setInterval( () => {
			goToNextSlide()
		}, 7000)

		return () => clearInterval(interval);
		
	}, [shownSlide])
	

	const findNextSlide = () => {
		if( shownSlide >= slides.length - 1 ) return 0
		return shownSlide + 1
	}

	const setTouchStart = (e) => {

		console.log(e._reactName)

		if( e._reactName === 'onDragStart' ) {
			setCurrentMousPos(e.pageX)
		} else if( e._reactName === 'onTouchStart' ) {
			setCurrentMousPos(e.changedTouches[0].pageX)
		}
	}
	
	const setTouchEnd = (e) => {

		let endPoint

		if( e._reactName === 'onDragEnd' ) {
			endPoint = e.pageX
		} else if( e._reactName === 'onTouchEnd' ) {
			endPoint = e.changedTouches[0].pageX
		}

		if( Math.abs( currentMousPos - endPoint ) > 20 ) {

			// setChangingSlide(true)
			if( (endPoint - currentMousPos) < 0 ) {

				if( shownSlide === (slides.length - 1) ) goToSlide(0)
				else goToSlide(shownSlide + 1)
			} else {

				if( shownSlide === 0 ) goToSlide(slides.length - 1)
				else goToSlide(shownSlide - 1)

			}

			// setTimeout(() => {
			// 	setChangingSlide(false)
			// }, 500);
		}

		setCurrentMousPos(0)

	}

	const nextSlidePrevAnimation = {
		hidden: {
			opacity: 0,
			x: 40
		},
		visible: {
			opacity: 1,
			x: 0	
		}
	}

	return (
		<div className="slideshow-main" 
			onTouchStart={setTouchStart} 
			onDragStart={setTouchStart}
			onTouchEnd={setTouchEnd} 
			onDragEnd={setTouchEnd}
			draggable={true}
		>
			<div className="slider-wrapper"  >

				<div className="all-slides">
				{
					slides.map(( slideInfo, idx) => <Slide slideInfo={slideInfo} idx={idx} key={idx} ActiveSlide={shownSlide} />)
				}
				</div>

				<div className="slide-dots">
					{
						slides.map( (slide,idx) => {	
							return (
								<div className={`tab-${idx}-dot ${ shownSlide === idx ? 'active': ''}`} key={idx} onClick={ () => goToSlide(idx) }>

								</div>
							)
						})
					}
				</div>

				<motion.div
					className="nextSlideBtn"
					onHoverStart={ () => controls.start('visible')}
					onHoverEnd={ () => controls.start('hidden')}
					onClick={ () => goToSlide(findNextSlide()) }
				>

					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>

					<motion.div 
						className="nextSlidePrev" 
						variants={nextSlidePrevAnimation} 
						initial='hidden' 
						animate={controls}
						transition={{ duration: 0.5, type: 'spring' }}
					>
						<img src={slides[findNextSlide()].img} alt='Next Slide' loading="lazy"/>

						<div className="slide-title">
							<h1 >{slides[findNextSlide()].title}</h1>
						</div>

						<div className="slide-caption">
							<span className="caption-title">{slides[findNextSlide()].captionTitle}</span>
							<span className="caption-text">{slides[findNextSlide()].caption}</span>
						</div>

					</motion.div>

				</motion.div>

			</div>
		</div>
	)
}
