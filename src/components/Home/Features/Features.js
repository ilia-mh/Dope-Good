import React from "react";
import './features.scss'

export default function Features() {
  return (
    <section id="feature1" className="feature feature-1 features-section">
      <div className="container">
        <div className="row">
					
          {/* feature panel #1  */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-panel">
              <div className="feature--icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
              </div>
              {/* .feature-icon end  */}
              <div className="feature--content">
                <h3>Creative &amp; Unique</h3>
                <p>GREAT FROM HEBES</p>
              </div>
              {/* .feature-content end  */}
            </div>
          </div>
          {/* .feature-panel end  */}

          {/* feature panel #2  */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-panel">
              <div className="feature--icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
								</svg>
              </div>
              {/* .feature-icon end  */}
              <div className="feature--content">
                <h3>Free Shipping</h3>
                <p>ALL ORDER OVER $30</p>
              </div>
              {/* .feature-content end  */}
            </div>
          </div>
          {/* .feature-panel end  */}

          {/* feature panel #3  */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-panel">
              <div className="feature--icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
              </div>
              {/* .feature-icon end  */}
              <div className="feature--content">
                <h3>Support Customer</h3>
                <p>SUPPORT 24/7</p>
              </div>
              {/* .feature-content end  */}
            </div>
          </div>
          {/* .feature-panel end  */}

          {/* feature panel #4  */}
          <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-panel">
              <div className="feature--icon">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
              </div>
              {/* .feature-icon end  */}
              <div className="feature--content">
                <h3>Secure Payment</h3>
                <p>100% SECURE PAYMENT</p>
              </div>
              {/* .feature-content end  */}
            </div>
          </div>
          {/* .feature-panel end  */}

        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
