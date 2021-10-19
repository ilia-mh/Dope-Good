import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import Slider from "react-slick";

export default function SlickSlider(props) {
  const [slideIdx, setSlideIdx] = useState(0);

  let carousel = useRef(null);

  const {
    NextArrow,
    PrevArrow,
    showSlideNumber,
    showDots,
    slidesToShow,
    responsive,
    gallery,
  } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: responsive || [],
  };

  const range = (from, to) => {
    const arr = [];

    for (let i = from; i <= to; i++) {
      arr.push(i);
    }

    return arr;
  };

  const goNextSlide = () => {
    if (slideIdx < props.children.length - 1) setSlideIdx(slideIdx + 1);
    else setSlideIdx(0);
    carousel.slickNext();
  };

  const goPrevSlide = () => {
    if (slideIdx > 0) setSlideIdx(slideIdx - 1);
    else setSlideIdx(props.children.length - 1);
    carousel.slickPrev();
  };

  const swipped = (e) => {
    if (e === "left") {
      if (slideIdx < props.children.length - 1) setSlideIdx(slideIdx + 1);
      else setSlideIdx(0);
    } else {
      if (slideIdx > 0) setSlideIdx(slideIdx - 1);
      else setSlideIdx(props.children.length - 1);
    }
  };

  const goToSlide = (idx) => {
    if (slideIdx !== idx) {
      carousel.slickGoTo(idx);
      setSlideIdx(idx);
      // console.log(`going to slide ${idx}`);
    }
  };

  const carouselChanged = (e) => {
    // console.log(e);
    if (slideIdx !== e) setSlideIdx(e);
  };

  return (
    <div className="slider-wrapper">
      {NextArrow && <NextArrow next={() => goNextSlide()} />}

      {showSlideNumber && (
        <div className="slide-number">
          <span>{slideIdx + 1}</span> / {props.children.length}
        </div>
      )}

      <Slider
        {...settings}
        ref={(c) => (carousel = c)}
        onSwipe={swipped}
        afterChange={carouselChanged}
      >
        {props.children}
      </Slider>

      {gallery && (
        <div className="slide-gallery">
          {gallery.map((slideImg, idx) => (
            <div className="gallery-slide" key={idx}>
              <img
                src={slideImg}
                alt="product gallery thumbnail"
                onClick={() => goToSlide(idx)}
              />
            </div>
          ))}
        </div>
      )}

      {showDots && (
        <div className="dots-wrapper">
          {range(0, props.children.length - 1).map((dot) => (
            <button
              className={`carousel-dot ${slideIdx === dot ? "active" : ""} `}
              onClick={() => goToSlide(dot)}
              key={`carousel-dot-${dot}`}
            >
              <span></span>
            </button>
          ))}
        </div>
      )}

      {PrevArrow && <PrevArrow prev={() => goPrevSlide()} />}
    </div>
  );
}
