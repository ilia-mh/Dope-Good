import React from "react";
import Slider from "../Slider/Slider";
import { useSelector } from "react-redux";

import "./slider.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function ProductSlider() {

  const { photos, _id } = useSelector((state) => state.shop.singleProduct);

  const selectedPhotos = () => photos.filter( (photo,idx) => idx !== 0 )

  return (
		photos ?
    <div className="col-sm-12 col-md-12 col-lg-7 product-carousel">
      <div className="carousel">
        <Slider gallery={selectedPhotos().map((photo,idx) => `${apiUrl}/${_id}/${photo}`)}>

          {selectedPhotos().map((photo) => (
            <div className="product-img" key={photo} >
              <img src={`${apiUrl}/${_id}/${photo}`} alt="product" />
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
