import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./swiper.scss";

import SwiperCore, { Autoplay, Thumbs } from "swiper";

SwiperCore.use([Autoplay, Thumbs]);

export default function SwiperSlider({
  children,
  autoplay = 4500,
  responsiveBreaks,
  spaceBetween,
  slidesPerView,
  infinite = true,
  grabMode = false,
  thumbs = [],
  thumbLoc = "bottom"
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const requiredModules = () => {
  //   const modules = [];

  //   if (autoplay !== 0) modules.push(Autoplay);
  //   if (thumbs.lenght) modules.push(Thumbs);

  //   return modules;
  // };

  return (
    <>

      <Swiper
        className="swiper-container"
        spaceBetween={spaceBetween ? spaceBetween : 0}
        slidesPerView={slidesPerView ? slidesPerView : 1}
        loop={infinite}
        autoplay={
          autoplay ? { delay: autoplay, disableOnInteraction: false } : {}
        }
        breakpoints={
          responsiveBreaks
            ? {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }
            : {}
        }
        grabCursor={grabMode}
        thumbs={thumbs.length ? { swiper: thumbsSwiper } : {}}
        // modules={requiredModules()}
      >
        {children.map((child, idx) => (
          <SwiperSlide key={idx}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {/* direction="vertical" */}

      {thumbs.length ? (
        <Swiper
          direction={ thumbLoc === "left" ? 'vertical' : 'horizontal' }
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="swiper-thumbs"
        >
          {thumbs.map((thumb, idx) => (
            <SwiperSlide key={idx}>
              <img src={thumb} alt="product gallery thumbnail" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </>
  );
}
