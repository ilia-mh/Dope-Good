import React from "react";
import { useSelector } from "react-redux";

import SwiperSlider from "../Slider/SwiperSlider";

import ProductCard from "./ProductCard/ProductCard";

import "./recentProducts.scss";

export default function RecentProducts({ noTitle, slideNum = 4 }) {
  const products = useSelector((state) => state.shop.recentProducts);

  const responsiveSlider = {
    100000: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 4,
    },
    1150: {
      slidesPerView: 3,
    },
    875: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 1,
    },
  };

  return products.length > 0 ? (
    <section
      id="products-carousel"
      className="products-carousel related-products pt-0 pb-80"
    >
      <div className="container-fluid pr-40 pl-40">
        {!noTitle && <hr className="mb-80" />}

        {!noTitle && (
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="heading text-center mb-50">
                <h2 className="heading--title">Recent Products</h2>
              </div>
            </div>
            {/* .col-lg-12 end  */}
          </div>
        )}

        {/* .row end  */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 recent-products-carousel">
            {/* <div className="carousel"> */}

            <SwiperSlider
              slidesPerView={1}
              responsiveBreaks={responsiveSlider}
              autoplay={6000}
              grabMode={true}
            >
              {products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                    isInSlider={true}
                  />
                );
              })}
            </SwiperSlider>
            {/* <SlickSlider slidesToShow={slideNum} responsive={responsiveSlider} swipeToSlide={true}>
              {products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                    isInSlider={true}
                  />
                );
              })}
            </SlickSlider> */}

            {/* </div> */}
          </div>
          {/* .row end  */}
        </div>
      </div>
    </section>
  ) : (
    <div></div>
  );
}
