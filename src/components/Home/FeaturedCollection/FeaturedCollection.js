import React from "react";

import SwiperSlider from "../../Slider/SwiperSlider";

import "./features.scss";
import { Link } from 'react-router-dom'

import { featureCollections } from './Features.js'

export default function FeaturedCollection() {

  return (
    <section id="featured-collection" className="featured-collection pt-0 pb-0">
      <div className="featured-collection-container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="heading heading-3 text-center">
              <h2 className="heading--title">Featured Collection</h2>
              <p className="heading--desc">
                  Rounding up a bunch of specific designs and talking about the
                  merits of each is the perfect way to find common ground.
              </p>
            </div>
          </div>
          {/* .col-lg-12 end  */}
        </div>
        {/* .row end  */}
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="features-carousel">
              <SwiperSlider >

                {
                  featureCollections.map( (feature,idx) => {
                    
                    const { slideImg, title, desc, productName, productImg, price, link, collectionLink } = feature

                    return (
                      <div className="slide--item" key={idx}>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">

                            <div className="collection-item collection-item-1 big-pic">

                              <div className="collection--img">

                                <img
                                  src={slideImg}
                                  alt={title}
                                />
                                <div className="img-overlay"></div>

                              </div>

                              <div className="collection--content">
                                <Link to={collectionLink} className="collection--title">
                                  <h3>
                                      { title }
                                  </h3>
                                </Link>
                                <div className="collection--desc">
                                  <p>{desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="collection-item collection-item-2 product-side">

                              <Link to={link} className="collection--img">
                                <img
                                  src={productImg}
                                  alt="collection"
                                />
                              </Link>

                              <div className="collection--content">
                                <Link to={link} className="collection--title">
                                  <h3>
                                    {productName}
                                  </h3>
                                </Link>
                                <div className="collection--price">$ { price.toFixed(2) }</div>
                              </div>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    )
                  })
                }

              </SwiperSlider>

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
