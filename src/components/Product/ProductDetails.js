import React, { useState } from "react";
import './productDetails.scss'
import { useSelector } from "react-redux";

import reviewImg1 from '../../assets/images/testimonials/authors/1.jpg'

export default function ProductDetails() {

	const [showTab, setShowTab] = useState(0)

	const product = useSelector((state) => state.shop.singleProduct);

	const { description } = product

  // const dispatch = useDispatch();

	const changeTab = (idx) => {
		if( showTab !== idx ) setShowTab(idx)
	}

  return (
		product._id ?
    <section
      id="product-detalis2"
      className="product-detalis product-detalis-2 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">

            <div className="product--tabs tabs">

              {/* Nav tabs  */}
              <ul className="nav nav-tabs" role="tablist">
                <li>
                  <button
                    className={ showTab === 0 ? 'active' : ''}
										onClick={ () => changeTab(0) }
                  >
                    description
                  </button>
                </li>
                <li>
                  <button
										className={ showTab === 1 ? 'active' : ''}
										onClick={ () => changeTab(1) }
                  >
                    Addtional info
                  </button>
                </li>
                <li>
                  <button
										className={ showTab === 2 ? 'active' : ''}
										onClick={ () => changeTab(2) }
                  >
                    reviews(2)
                  </button>
                </li>
              </ul>

              {/* Tab panes  */}
              <div className="tab-content">

                <div
                  className={`tab-pane fade ${ showTab === 0 ? 'show active' : '' }`}
                  id="description"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                          <div className="product--desc">
                            <p>
															{ description }
                            </p>
                          </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4">
                          <div className="product--desc-list">
                            <h6>SIZE & FIT</h6>
                            <ul className="list-unstyled mb-0">
                              <li>Our Model wears a UK 8/ EU 36/ Us 4</li>
                              <li>Model is 170/ 5’7” Tall</li>
                              <li>
                                Shoulder seam to hem measures appox 58”/ 147 cm
                                in lenght
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* .col-lg-8 end  */}
                      </div>
                    </div>
                  </div>
                  {/* .row end  */}
                </div>
                {/* #description end  */}

                <div
                  className={`tab-pane fade ${ showTab === 1 ? 'show active' : '' }`}
                  id="addtional-info"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                      <div className="product--desc">
                        <p>
                          Our agency can only be as strong as our people and
                          because of this, our team have own businesses,
                          designed game changing products, consulted for
                          companies and competed collegiately and professionally
                        </p>
                        <p>
                          Find out about the ways to deal with debts if you are
                          falling behind with day-to-day bills, loan and credit
                          card repayments or other commitments & get some free
                          advice by speaking to one of our financial advisers
                          over the phone? Just submit your details and we’ll be
                          in touch shortly. Our staff can help work out what's
                          right for you !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* #details end  */}

                <div  className={`tab-pane fade ${ showTab === 2 ? 'show active' : '' }`} id="reviews">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">

                      <ul className="product--review-comments list-unstyled">

                        <li className="review--comment">
                          <div className="author--img">
                            <img
                              src={reviewImg1}
                              alt="author"
                            />
                          </div>
                          <div className="review--comment-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h6>Hellen Marry</h6>
                                <span className="review--date">
                                  July 06th, 2019
                                </span>
                              </div>
                              <div className="pull-right product--rating">
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                                <i className="fa fa-star active"></i>
                              </div>
                            </div>
                            <div className="product--comment">
                              <p>
                                At its core, every brand has something special
                                to reveal something that inspires people. We are
                                a branding agency, this plan if you plan to
                                create a small portfolio
                              </p>
                            </div>
                            <a href="/#" className="reply">
                              reply<i className="fa fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </li>
                        {/* .review-comment end  */}

                      </ul>
											
                      <div className="form--review-rating text-center">
                        <h5>Add Your Review</h5>
                        <div className="form--review-rating-content">
                          <span>Your Ratting</span>
                          <div className="product--rating">
                            <a href="/#">
                              <i className="fa fa-star"></i>
                            </a>
                          </div>
                          <div className="product--rating">
                            <a href="/#">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a>
                          </div>
                          <div className="product--rating">
                            <a href="/#">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a>
                          </div>
                          <div className="product--rating">
                            <a href="/#">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                            </a>
                          </div>
                          <div className="product--rating">
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                            <i className="fa fa-star active"></i>
                          </div>
                        </div>
                      </div>
                      
											<div className="form--review">
                        <form>
                          <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <textarea
                                className="form-control"
                                id="review"
                                rows="2"
                                placeholder="Comment review"
                              ></textarea>
                            </div>
                            <div
                              className="
                                  col-sm-12 col-md-12 col-lg-12
                                  text--center
                                "
                            >
                              <button
                                type="submit"
                                className="btn btn--primary btn--rounded"
                              >
                                Submit<i className="lnr lnr-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    
										</div>
                    {/* .col-lg-8 end  */}
                  </div>
                  {/* .row end  */}
                </div>
                {/* #reviews end  */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		:
		null
	);
}
