import React from 'react'

export default function Welcome() {
	return (
		<section
        id="about1"
        className="about about-1 pt-140 pt-60-xs pb-120 pb-60-xs"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading heading-2">
                <p className="heading--subtitle">HISTORY SINCE 1998</p>
                <h2 className="heading--title">
                  Welcome to Comfeey Store - Amazing furniture
                </h2>
              </div>
            </div>
             {/* .col-lg-6 end  */}
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about--text">
                <p>
                Investing in and creating extraordinary products has been our passion for over 23 years. Every item we offer is backed by our 
                <span style={{ fontWeight: 700 }}> commitment to quality</span> and we aren't happy unless you are. 
                If for any reason you are unhappy with your purchase, let us know and we'll make it right.
                </p>
                <p>
                  Hebes's mission has always been to provide you with unexpected, distinctive finds for your closet and home.
                  Our products are sourced and <span style={{ fontWeight: 700 }}>crafted with care</span>, 
                  ensuring every treasure at Hebes is unique, just like you are.
                </p>
              </div>
              <div className="about--signature">MARK HENRRY<span>CEO</span></div>
            </div>
             {/* .col-lg-6 end  */}
          </div>
           {/* .row end  */}
        </div>
         {/* .container end  */}
      </section>
	)
}
