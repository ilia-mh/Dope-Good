import React from "react";
import { useSelector } from "react-redux";

import SlickSlider from "../Slider/Slider";
import ProductCard from "./ProductCard/ProductCard";

import "./recentProducts.scss";

export default function RecentProducts({ noTitle, slideNum = 4 }) {
  
  const products = useSelector((state) => state.shop.recentProducts);

  const responsiveSlider = [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return products.length > 0 ? (
    <section
      id="products-carousel"
      className="products-carousel related-products pt-0 pb-80"
    >
      <div className="container-fluid pr-40 pl-40">

        {
          !noTitle &&
            <hr className="mb-80" />
        }

        {
          !noTitle &&
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="heading text-center mb-50">
                  <h2 className="heading--title">Recent Products</h2>
                </div>
              </div>
              {/* .col-lg-12 end  */}
            </div>
        }

        {/* .row end  */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 recent-products-carousel">
            {/* <div className="carousel"> */}

            <SlickSlider slidesToShow={slideNum} responsive={responsiveSlider} swipeToSlide={true}>
              {products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                    isInSlider={true}
                  />
                );
              })}
            </SlickSlider>

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
