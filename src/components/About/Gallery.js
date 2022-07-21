import React, { lazy } from "react";

import SwiperSlider from "../Slider/SwiperSlider";
import "./gallery.scss";

import Features from '../Home/Features/Features'

import AboutGalleryImg3 from "../../assets/images/about/gallery/3.jpg";
import AboutGalleryImg4 from "../../assets/images/about/gallery/4.jpg";


export default function Gallery() {
  return (
    <section
      id="about-gallery"
      className="about about-2 about-gallery-2 pt-0 pb-0"
    >
      <div className="container-fluid">
        <div className="row about-intro-row">
          <div className="col-sm-12 col-md-12 col-lg-5 left-side">
            
              
            <h2 className="heading--title">
              History Since 1998
            </h2>

          </div>
          {/* .col-lg-6 end  */}

          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1 right-side">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="about--text">
                  <p>
                    Since our online store was launched, we have thrilled interior designers and 
                    home decor enthusiasts all across the country and around the world. The savvy 
                    nature of our clients inspires us to constantly evolve and to offer an always-exciting 
                    collection of products and the highest level of service.
                  </p>
                </div>
                <div className="ceo mb-100">
                  Mark Henrry <span>- CEO</span>
                </div>
              </div>
              {/* .col-lg-12 end  */}
            </div>
            {/* .row end  */}
            
            {/* <div className="row feature-1">

              <Features isAbout={true} />
              
            </div> */}
            {/* .row end  */}
          </div>
          {/* .col-lg-6 end  */}
        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
