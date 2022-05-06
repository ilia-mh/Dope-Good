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

            <div className="carousel owl-carousel about-carousel">

              <SwiperSlider>

                <div className="gallery--item">
                  <img src={AboutGalleryImg3} alt="img" loading="lazy" />
                </div>

                <div className="gallery--item">
                  <img src={AboutGalleryImg4} alt="img" loading="lazy" />
                </div>

              </SwiperSlider>


            </div>
            
            <div className="heading heading-2">
              <p className="heading--subtitle">HISTORY SINCE 1998</p>
              <h2 className="heading--title">
                Welcome to Dope Good Store
              </h2>
            </div>
          </div>
          {/* .col-lg-6 end  */}

          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="about--text">
                  <p>
                    At Dope Good, beautiful things aren’t just our passion — they’re our obsession. For over two decades, we’ve been scouring 
                    the globe in search of <span style={{ fontWeight: 600 }}>modern and vintage</span> furnishings and accessories designed to inspire. Edgy yet elegant. Sophisticated 
                    but never stuffy. Timeless but always of the moment. These are our guideposts for collecting an ever-evolving mix of modern 
                    day and one-of-a-kind vintage furniture, tableware, lighting, candles, books, pillows, textiles and more.
                  </p>
                  <p>
                    Since our online store was launched, we have thrilled interior designers and home decor enthusiasts all across the country 
                    and around the world. The savvy nature of our clients inspires us to constantly evolve and to offer an always-exciting 
                    collection of products and the highest level of service. 
                  </p>
                </div>
                <div className="about--signature mb-100">
                  MARK HENRRY<span>CEO</span>
                </div>
              </div>
              {/* .col-lg-12 end  */}
            </div>
            {/* .row end  */}
            
            <div className="row feature-1">

              <Features isAbout={true} />
              
            </div>
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
