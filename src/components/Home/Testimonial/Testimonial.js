import React from 'react'
import Testimonials from './Testimonials'

// import PureSlider from "../../Slider/NewSlider";
// import SlickSlider from "../../Slider/Slider";

import SwiperSlider from "../../Slider/SwiperSlider";

import './testimonials.scss'

// import { nextArrow, prevArrow } from "./Arrows";

export default function Testimonial() {
	return (
		<section
		id="testimonial1"
		className="testimonial testimonial-1 text-center pt-50 pb-50"
	>
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12">
					<div
						className="testimonial-carousel"
					>	


						<SwiperSlider autoplay={6000}>
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
											<div className="testimonial--body">
												<p>
													{ text }
												</p>
											</div>
											<div className="testimonial--meta">
												<h4>{ name }</h4>
											</div>
										</div>
									)
								})
							}
						</SwiperSlider>


					</div>
				</div>
			</div>
		</div>
	</section>
	)
}
