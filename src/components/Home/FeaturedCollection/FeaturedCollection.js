import React from "react";
import SlickSlider from "../Slider/Slider";
import "./features.scss";

import Features from "./Features";

import { nextArrow, prevArrow } from "./Arrows";

export default function FeaturedCollection() {
  return (
    <section id="featured-collection" className="featured-collection pt-0 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="heading heading-3 mb-100 mb-50-xs text-center">
              <h2 className="heading--title">FEATURED COLLECTION</h2>
            </div>
          </div>
          {/* .col-lg-12 end  */}
        </div>
        {/* .row end  */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="features-carousel">
              <SlickSlider NextArrow={nextArrow} PrevArrow={prevArrow} showSlideNumber={true} >

                {Features.map((feature) => {
                  const { sale, title, img, link, text } = feature;

                  return (
                    <div className="feature-item" key={title}>
                      <div className="featured--item-text">
                        <span className="vertical--text">{sale}</span>
                        <h4>
                          <a href={link}>{title}</a>
                        </h4>
                      </div>

                      <div className="featured--item-img">
                        <img src={img} alt={title} className="img-fluid" />
                      </div>

                      <div className="featured--item-desc">
                        <p>{text}</p>
                      </div>
                    </div>
                  );
                })}

              </SlickSlider>
            </div>
          </div>
          {/* .col-lg-12 end  */}
        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
