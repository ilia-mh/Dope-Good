import React from 'react'
import './hero.scss'
import { Link } from 'react-router-dom'

export default function Hero() {
	return (
		<section id="page-title" className="page-title shop-hero" >
        <div className="container shop-title">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title title-1 text-center">
                <div className="title--content">
                  <div className="title--heading">
                    <h1>Profile</h1>
                  </div>
                </div>
                <div className="clearfix"></div>
                <ol className="breadcrumb">

                  <li><Link to="/">Home</Link></li>

                  <li className="breadcrumb-arrow">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</li>

                  <li className="active">Profile</li>
									
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
	)
}
