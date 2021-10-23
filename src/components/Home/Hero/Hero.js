import React, { useState, useEffect } from 'react'
import './hero.scss'

import { gsap } from "gsap";

import { motion, useAnimation } from 'framer-motion'
import Slide from './Slide'

let timeOut;

let tl = gsap.timeline({
	duration: 1.8
});

const apiUrl = process.env.REACT_APP_API_URL

export default function Hero() {

	const controls = useAnimation()

	const [ shownSlide, setShownSlide ] = useState(0);

	const slides = [
		{
			title: 'Comfeey Sofa',
			coloredTitle: 'Collection',
			img: `${apiUrl}/61681c65267f751e7c53ac98/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/sofa'
		},
		{
			title: 'Comfeey Chair',
			coloredTitle: 'Collection',
			img: `${apiUrl}/6169bf4595ca4052c4d90af6/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/chair'
		},
		{
			title: 'Comfeey Desk',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616d80fe5c825d3d24e0f304/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/furniture/desk'
		},
		{
			title: 'Comfeey Lamps',
			coloredTitle: 'Collection',
			img: `${apiUrl}/616d72155c825d3d24e0f301/1.png`,
			captionTitle: 'Trending',
			caption: 'Set of 2020',
			link: '/shop/lighting'
		}
	]

	const startNextSlideTimer = () => {
		timeOut = setTimeout( () => goToNextSlide() , 6500)
	}

	const restartNextSlideTimer = () => {
		clearTimeout()
		clearTimeout(timeOut)
		timeOut = null
		startNextSlideTimer()
	}

	const goToNextSlide = () => {

		const slideBefore = shownSlide
		const nextSlide = shownSlide >= slides.length - 1 ? 0 : (shownSlide + 1)

		controls.start('hidden')
		setShownSlide(nextSlide)

		tl.fromTo(`.slider-${slideBefore}`,{ x:0 }, { x: '-100vw' })
		tl.fromTo(`.slider-${nextSlide}`,{ x: '100vw' }, { x: '0vw' })

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

	// useEffect( () => {
	// 	restartNextSlideTimer()
	// }, [shownSlide])

	const findNextSlide = () => {
		if( shownSlide >= slides.length - 1 ) return 0
		else return shownSlide + 1
	}

	return (
		<div className="slideshow-main">
			<div className="slider-wrapper">

				<div className="all-slides">
				{
					slides.map(( slideInfo, idx) => <Slide slideInfo={slideInfo} idx={idx} key={idx} ActiveSlide={shownSlide} />)
				}
				</div>

				<div className="slide-dots">
					{
						slides.map( (slide,idx) => {
							return (
								<div className={`tab-${idx} ${ shownSlide === idx ? 'active': ''}`} key={idx}></div>
							)
						})
					}
				</div>

				<motion.div
					className="nextSlideBtn"
					onHoverStart={ () => controls.start('visible')}
					onHoverEnd={ () => controls.start('hidden')}
					onClick={goToNextSlide}
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
						<img src={slides[findNextSlide()].img} />

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
