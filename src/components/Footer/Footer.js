import React from "react";
// import logoLight from '../../assets/images/logo/logo-light.png'
import { Link } from 'react-router-dom'
import './footer.scss'

import Logo from "../../assets/svg/LogoLg.png";

import Subscribe from './Subscribe'

export default function Footer() {
  return (
    <footer className="footer footer-2 footer-4">
      <div className="container">
        <div className="footer-widget">
          <div className="row">

            <div
              className="col-sm-12 col-md-12 col-lg-3 widget--logo text-center-xs"
            >
              <div className="widget--content">
                <div className="widget--logo-img">

                  <img src={Logo} alt="comfeey" />
                  
                </div>
              </div>

              <div className="footer--copyright">
                <span>&copy; 2019 Dope Good - All Rights Reserved, by <b>DopeGood</b> </span> 
              </div>
              {/* .footer-copyright end  */}
            </div>

            {/* .col-lg-5ths end  */}
            <div className="col-sm-12 col-md-6 col-lg-3 text-center-xs widget--contact-info">
              <div className="widget--content">
                <ul className="list-unstyled">
                  <li>9580 Rock Maple Street Bronx,</li>
                  <li> NY 10461 - NEW YORK.</li>
                  <li>
                    <a href="mailto:comfeey@gmail.com">support@dopegood.com</a>
                  </li>
                  <li>
                    <a href="tel:+7167049295">+716 704 9295</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-lg-5ths end  */}

            <div
              className="col-sm-12 col-md-6 col-lg-3 text-center-xs widget--links"
            >
              <div className="widget--content">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">About Us </Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Term & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-lg-5ths end  */}

            <Subscribe />
            {/* .col-lg-5ths end  */}

            {/* <div
              className="
                  col-sm-12 col-md-6 col-lg-5ths
                  text-center-xs
                  widget--social
                "
            >
              <div className="widget--content">
                <div className="social--icons">
                  <span>Follow Us On Social</span>
                  <a className="facebook" href="/#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="twitter" href="/#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="google-plus" href="/#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                  <a className="instagram" href="/#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div> */}
            {/* .col-lg-5ths end  */}

          </div>
          {/* .row end  */}
        </div>
        {/* .container end  */}
      </div>
      {/* .footer-widget end  */}
    </footer>
  );
}
