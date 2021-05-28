import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Slider from "react-slick";

export default function SlickSlider(props) {

  const [slideIdx, setSlideIdx] = useState(1);

  let carousel = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		arrows: false
  };

  const { NextArrow, PrevArrow, showSlideNumber } = props;

  const goNextSlide = () => {

    if ( slideIdx < props.children.length) setSlideIdx(slideIdx + 1);
    else setSlideIdx(1);
    carousel.slickNext();
  };

  const goPrevSlide = () => {
    if (slideIdx > 1) setSlideIdx(slideIdx - 1);
    else setSlideIdx(props.children.length);
    carousel.slickPrev();
  };

	const swipped = (e) => {

		if( e === 'left' ){
			if ( slideIdx < props.children.length) setSlideIdx(slideIdx + 1);
    	else setSlideIdx(1);
		} else {
			if (slideIdx > 1) setSlideIdx(slideIdx - 1);
    	else setSlideIdx(props.children.length);
		}

	}

  return (
    <div className="slider-wrapper">
      {<NextArrow next={() => goNextSlide()} />}

      {
				showSlideNumber && (
					<div className="slide-number">
						<span>{slideIdx}</span> / {props.children.length}
					</div>
      )}

      <Slider {...settings} ref={(c) => (carousel = c)} onSwipe={swipped} >
        {props.children}
				
      </Slider>

      {<PrevArrow prev={() => goPrevSlide()} />}
    </div>
  );
}
