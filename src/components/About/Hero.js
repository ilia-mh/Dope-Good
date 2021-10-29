import React from "react";
import heroImg from "../../assets/images/page-title/2.jpg";
import { Link } from 'react-router-dom';

import './Hero.scss'

export default function Hero() {
  
  return (
    <section
      id="page-title"
      className="about page-title fullscreen bg-overlay bg-overlay-dark bg-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="pos-vertical-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title title-5 text-center">
                <div className="title--content">
                  <div className="title--heading">
                    <h1>About Us</h1>
                  </div>
                </div>
                <div className="clearfix"></div>
                <ol className="breadcrumb">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width='20px' style={{ color: '#fff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </li>
                  <li className="active">About Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
