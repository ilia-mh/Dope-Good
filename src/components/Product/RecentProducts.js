import React from "react";
import { useSelector } from "react-redux";

import SlickSlider from "../Slider/Slider";
import ProductCard from "./ProductCard";

import "./recentProducts.scss";

export default function RecentProducts() {
  const products = useSelector((state) => state.shop.recentProducts);

  const responsiveSlider = [
    {
      breakpoint: 1600,
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
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return products.length ? (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 recent-products-carousel">
        {/* <div className="carousel"> */}

        <SlickSlider slidesToShow={4} responsive={responsiveSlider}>
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
  ) : (
    <div></div>
  );
}
