import React from "react";
import SlickSlider from "../../Slider/Slider";
import "./features.scss";
import { Link } from 'react-router-dom'

import img1 from '../../../assets/images/collection/col7/1.jpg'
import img2 from '../../../assets/images/collection/col7/2.jpg'
import img3 from '../../../assets/images/collection/col7/3.jpg'
import img4 from '../../../assets/images/collection/col7/4.jpg'

export default function FeaturedCollection() {
  return (
    <section id="featured-collection" className="featured-collection pt-0 pb-0">
      <div className="featured-collection-container">
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
              <SlickSlider>

                <div className="slide--item">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="collection-item collection-item-1 big-pic">
                        <div className="collection--img">
                          <img
                            src={img1}
                            alt="collection"
                          />
                        </div>
                        <div className="collection--content">
                          <div className="collection--title">
                            <h3>
                              <Link to="">
                                Lamps Living Collection
                              </Link>
                            </h3>
                          </div>
                          <div className="collection--desc">
                            <p>Nam ac elit a ante commodo</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="collection-item collection-item-2 product-side">
                        <div className="collection--img">
                          <img
                            src={img2}
                            alt="collection"
                          />
                        </div>
                        <div className="collection--content">
                          <div className="collection--title">
                            <h3>
                              <Link to="">Hebes diamon Lamp</Link>
                            </h3>
                          </div>
                          <div className="collection--price">$ 42.00</div>
                        </div>
                      </div>
                    </div>
                  
									</div>
                </div>
								
                <div className="slide--item">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="collection-item collection-item-2 collection-item-3 product-side">
                        <div className="collection--img">
                          <img
                            src={img3}
                            alt="collection"
                          />
                        </div>
                        <div className="collection--content">
                          <div className="collection--title">
                            <h3>
                              <Link to="">Bedroom Lamp 2019</Link>
                            </h3>
                          </div>
                          <div className="collection--price">$ 42.00</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">

                      <div className="collection-item collection-item-1 collection-item-4 big-pic">
                        <div className="collection--img">
                          <img
                            src={img4}
                            alt="collection"
                          />
                          <div className="vertical--text">SALE OFF 40%</div>
                        </div>
                        <div className="collection--content">
                          <div className="collection--title">
                            <h3>
                              <Link to="">Bedroom Black Lamp</Link>
                            </h3>
                          </div>
                          <div className="collection--desc">
                            <p>vitae viverra urna</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
									</div>
                </div>
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
