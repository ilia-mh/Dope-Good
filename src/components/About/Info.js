import React from "react";

import './info.scss'

export default function Info() {
  return (
    <section id="interactive1" className="interactive interactive-1 contact-info">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="banner-panel">
              <div className="num">01</div>
              <div className="panel--content">
                <h5>STORE LONDON</h5>
                <p>166 Alexander Road EAST E44 0GA- LONDON</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="mailto:info@dopegood.com">
                      Email: info@dopegood.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+442079460833">Phone: +44 20 7946 0833</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .banner-panel end  */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="banner-panel">
              <div className="num">02</div>
              <div className="panel--content">
                <h5>STORE PARIS</h5>
                <p>100 Faubourg Saint Honoré - PARIS</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="mailto:info@dopegood.com">
                      Email: info@dopegood.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1646328508">Phone: 164 632 8508</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .banner-panel end  */}
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="banner-panel">
              <div className="num">03</div>
              <div className="panel--content">
                <h5>STORE New York</h5>
                <p>9580 Rock Maple Street Bronx, NY 10461 - NEW YORK</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="mailto:info@dopegood.com">
                      Email: info@dopegood.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+7167049295">Phone: 716 704 9295</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* .banner-panel end  */}
        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
