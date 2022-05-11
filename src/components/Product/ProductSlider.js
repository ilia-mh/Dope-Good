import React, { useEffect, useState } from "react";
import SwiperSlider from "../Slider/SwiperSlider";
import { useSelector } from "react-redux";

import "./slider.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function ProductSlider() {

  const [isMobile,setIsMobile] = useState(true)

  const { photos, _id } = useSelector((state) => state.shop.singleProduct);

  const selectedPhotos = () => photos.filter( (photo,idx) => idx !== 0 )

  useEffect( () => {

    if( window ) {
      window.addEventListener('resize', changeIsMobile)
      setIsMobile( window.innerWidth > 768 ? false : true )
    }

    return () => window.removeEventListener('resize', changeIsMobile)
  }, [isMobile])

  const changeIsMobile = () => {

    if( window.innerWidth <= 768 && !isMobile ) {
      setIsMobile(true)
    } else if ( window.innerWidth > 768 && isMobile ) setIsMobile(false)
  }

  const styleForLeftThumb = {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  }

  return (
		photos ?
    <div className="col-sm-12 col-md-12 col-lg-6 product-carousel">
      <div className="carousel" style={ isMobile ? {} : styleForLeftThumb }>
        <SwiperSlider 
          thumbs={ selectedPhotos().map((photo) => `${apiUrl}/${_id}/${photo}`) }
          thumbLoc={ isMobile ? 'bottom' : 'left' }
          spaceBetween={20}
        >

          {selectedPhotos().map((photo) => (
            <div className="product-img" key={photo} >
              <img src={`${apiUrl}/${_id}/${photo}`} alt="product" />
            </div>
          ))}

        </SwiperSlider>
      </div>
      {/* .carousel end  */}
    </div>
		:
		<div className="empty-Product-Slider"></div>
  );
}
