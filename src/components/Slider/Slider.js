import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import Slider from "react-slick";

export default function SlickSlider( props ) {

	let carousel = useRef(null)

	const settings = {
		dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
	}

	const { NextArrow, PrevArrow } = props

	return (
		<div className="slider-wrapper">

			
			{ <NextArrow next={ () => carousel.slickNext() } /> }

			<Slider 
				{...settings}
				ref={ c => carousel = c }
			>
				{ props.children }
			</Slider>

			{ <PrevArrow prev={ () => carousel.slickPrev() } /> }


		</div>
	)
}
