import React from "react";
import logoLight from '../../assets/images/logo/logo-light.png'
import { Link } from 'react-router-dom'
import './footer.scss'

export default function Footer() {
  return (
    <footer className="footer footer-2 footer-4">
      <div className="container">
        <div className="footer-widget">
          <div className="row">
            <div
              className="
                  col-sm-12 col-md-12 col-lg-5ths
                  widget--logo
                  text-center-xs
                "
            >
              <div className="widget--content">
                <div className="widget--logo-img">
                  <img src={logoLight} alt="comfeey" />
                </div>
              </div>
              <div className="footer--copyright">
                <span>&copy; 2019 Comfeey - All Rights Reserved,<br/>by </span>
                <a href="https://amirmohseni.dev">Amir Mohseni</a>
              </div>
              {/* .footer-copyright end  */}
            </div>
            {/* .col-lg-5ths end  */}
            <div className="col-sm-12 col-md-6 col-lg-5ths text-center-xs widget--contact-info">
              <div className="widget--content">
                <ul className="list-unstyled">
                  <li>No. 342 - London Oxford Street,</li>
                  <li>012 United Kingdom.</li>
                  <li>
                    <a href="mailto:comfeey@gmail.com">support@comfeey.com</a>
                  </li>
                  <li>
                    <a href="tel:+03234567890">+032 3456 7890</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-lg-5ths end  */}
            <div
              className="
                  col-sm-12 col-md-6 col-lg-5ths
                  text-center-xs
                  widget--links
                "
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
            <div
              className="
                  col-sm-12 col-md-6 col-lg-5ths
                  text-center-xs
                  widget--newsletter
                "
            >
              <div className="widget--content">
                <h3>GET 20% OFF</h3>
                <p>By subscribing to our newsletter</p>
                <form className="mailchimp form--newsletter">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                  <button type="submit">
                    <i className="fa fa-chevron-right"></i>
                  </button>
                  <div className="subscribe-alert"></div>
                </form>
              </div>
            </div>
            {/* .col-lg-5ths end  */}
            <div
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
            </div>
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
