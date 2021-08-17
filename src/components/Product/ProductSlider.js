import React from "react";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";

import "./slider.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function ProductSlider() {

  const { photos } = useSelector((state) => state.shop.singleProduct);

  return (
		photos ?
    <div className="col-sm-12 col-md-12 col-lg-6 product-carousel">
      <div className="carousel">
        <Slider gallery={photos.map((photo) => apiUrl + photo)}>

          {photos.map((photo) => (
            <div className="product-img" key={photo} >
              <img src={apiUrl + photo} alt="product" />
            </div>
          ))}

        </Slider>
      </div>
      {/* .carousel end  */}
    </div>
		:
		<div className="empty-Product-Slider"></div>
  );
}
