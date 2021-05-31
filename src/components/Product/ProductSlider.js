import React from "react";
import Slider from "../Slider/Slider";
import ProductSlide1 from "../../assets/images/products/single/1.png";
import ProductSlide2 from "../../assets/images/products/single/2.png";
import ProductSlide3 from "../../assets/images/products/single/3.png";

import { nextArrow, prevArrow } from './Arrows'

import "./slider.scss";

export default function ProductSlider() {
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 product-carousel">
      <div
        className="carousel"
      >
        <Slider NextArrow={nextArrow} PrevArrow={prevArrow} showDots={true} >

          <div className="product--img-item">
            <img src={ProductSlide1} alt="product" />
          </div>

          <div className="product--img-item">
            <img src={ProductSlide2} alt="product" />
          </div>

          <div className="product--img-item">
            <img src={ProductSlide3} alt="product" />
          </div>

        </Slider>
      </div>
      {/* .carousel end  */}
    </div>
  );
}
