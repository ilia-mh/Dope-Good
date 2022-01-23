import React from 'react'
import Testimonials from './Testimonials'
import SlickSlider from "../../Slider/Slider";
import './testimonials.scss'

import { nextArrow, prevArrow } from "./Arrows";

export default function Testimonial() {
	return (
		<section
		id="testimonial1"
		className="testimonial testimonial-1 text-center pt-80 pb-50"
	>
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
					<div
						className="testimonial-carousel"
					>	


						<SlickSlider NextArrow={nextArrow} PrevArrow={prevArrow} >
							{ Testimonials.map( test => {

									const { img, name, text } = test

									return (
										<div className="testimonial-panel" key={img}>
											<div className="testimonial--meta-img">
												<img
													src={ img }
													alt={ name }
													loading="lazy"
												/>
											</div>
											{/* .testimonial-meta-img end  */}
											<div className="testimonial--body">
												<p>
													{ text }
												</p>
											</div>
											{/* .testimonial-body end  */}
											<div className="testimonial--meta">
												<h4>{ name }</h4>
												{/* <span>{ position }</span> */}
											</div>
											{/* .testimonial-meta end  */}
										</div>
									)
								})
							}
						</SlickSlider>


					</div>
				</div>
				 {/* .col-lg-8 end  */}
			</div>
			 {/* .row end  */}
		</div>
		 {/* .container end  */}
	</section>
	)
}
