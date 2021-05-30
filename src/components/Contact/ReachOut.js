import React from 'react'
import ContactImg1 from '../../assets/images/contact/gallery/1.jpg'
import ContactImg2 from '../../assets/images/contact/gallery/2.jpg'
import Slider from '../Slider/Slider'

import './ReachOut.scss'

export default function ReachOut() {
	return (
		<section
        id="contact3"
        className="contact contact-3 contact-gallery pt-0 pb-0"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 left-side">
              <div
                className="contact-carousel owl-carousel"
              >	

								<Slider>

									<div className="gallery--item">
										<img src={ContactImg1} alt="img" />
									</div>
									{/* .gallery-item end  */}
									<div className="gallery--item">
										<img src={ContactImg2} alt="img" />
									</div>

								</Slider>
								

              </div>


              <div className="heading heading-2">
                <p className="heading--subtitle">CONECT WITH US</p>
                <h2 className="heading--title">Contact Us</h2>
              </div>
               {/* .heading end  */}

            </div>

             {/* .col-lg-6 end  */}
            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="contact-panel mt-100">
                    <div className="contact--content">
                      <h3>
                        No. 342 - London Oxford Street, 012 United Kingdom.
                      </h3>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="mailto:Support@comfeey.net"
                            >Support@comfeey.net</a
                          >
                        </li>
                        <li>
                          <a href="tel:03433455634">Phone: +(034) 334 55634</a>
                        </li>
                      </ul>
                    </div>
                     {/* .contact-content end  */}
                  </div>
                   {/* .contact-panel end  */}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <h3>Get In Touch With Us</h3>
                  <form
                    className="contactForm mb-0"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="subject"
                        placeholder="subject"
                      />
                    </div>
                    <div className="form-group mb-30">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="2"
                        placeholder="Your message here"
                      ></textarea>
                    </div>
                    <button type="button" className="btn btn--primary btn--rounded">
                      SEND TO US
                    </button>
                    <div id="contactResult" className="contact-result"></div>
                  </form>
                </div>
              </div>
               {/* .row end  */}

            </div>
             {/* .col-lg-6 end  */}
          </div>
           {/* .row end  */}
        </div>
         {/* .container end  */}
      </section>
	)
}
