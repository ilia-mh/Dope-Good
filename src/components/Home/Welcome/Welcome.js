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
                  Welcome to Hebes Store - Amazing furniture
                </h2>
              </div>
            </div>
             {/* .col-lg-6 end  */}
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about--text">
                <p>
                  The third Monday of January is supposed to be the most
                  depressing day of the year. Whether you
                  <span> believe that </span>or not, the long nights, cold
                  weather and trying to keep it
                </p>
                <p>
                  Actually, Woodstock was not the first outdoor festival to
                  feature multiple bands over several days performing on a stage
                  set up out in the middle of a farmer’s field
                </p>
              </div>
              <div className="about--signature">JONT HENRRY<span>CEO</span></div>
            </div>
             {/* .col-lg-6 end  */}
          </div>
           {/* .row end  */}
        </div>
         {/* .container end  */}
      </section>
	)
}
