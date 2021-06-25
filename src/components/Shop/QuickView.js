import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { emptyProductQuickView } from "../../store/Reducer/reducer";
import Slider from '../Slider/Slider'

import ProductImg1 from '../../assets/images/products/gallery/23.jpg'
import ProductImg2 from '../../assets/images/products/gallery/24.jpg'
import ProductImg3 from '../../assets/images/products/gallery/25.jpg'
import { range } from '../../utils/range'

import './quickView.scss'

export default function QuickView() {

  const product = useSelector((state) => state.shop.quickViewProduct );
  const dispatch = useDispatch();

	const [activeTab,setActiveTab] = useState('infoGuide')

	const { name, price, rate, reviews, infoGuide, shipping: shippingGuide, return: returnGuide, sku, stock, _id } = product

	const activeStar = Math.ceil(rate)
	const emptyStar = 5 - activeStar

	const changeActiveTab = (tab) => {
		if( activeTab !== tab ) setActiveTab(tab)
	}

	const hideProductQuickView = () => dispatch( emptyProductQuickView() )

	const gallery = [
		ProductImg1,
		ProductImg2,
		ProductImg3,
	]

	return (
		<div
        className={`modal model-bg-light fade product-popup modal-fullscreen ${ _id ? 'show' : '' }`}
        id="product-popup"
				style={{ display: _id ? 'flex' : 'none', paddingRight: '17px' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">

              <button
                type="button"
                className="close"
								onClick={ hideProductQuickView }
              >
                <span >&times;</span>
              </button>

              <div
                className="product-detalis product-detalis-3 product-detalis-10 pt-0 pb-0"
              >
                <div className="row">

                  <div className="col-sm-12 col-md-12 col-lg-6">

                    <div
                      className="products-gallery-carousel"
                    >
                      <div
                        className="owl-carousel products-slider"
                      >

												<Slider 
													gallery={gallery}
												>

													<div className="product-img">
														<img
															src={ProductImg1}
															alt="product"
														/>
													</div>

													<div className="product-img">
														<img
															src={ProductImg2}
															alt="product"
														/>
													</div>

													<div className="product-img">
														<img
															src={ProductImg3}
															alt="product"
														/>
													</div>

												</Slider>
                      </div>

                       {/* .owl-thumbs end  */}
                    </div>
                     {/* .products-gallery-carousel end  */}

                  </div>
                   {/* .col-lg-7 end  */}

                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="product--title">
                      <h3>{ name }</h3>
                    </div>
                     {/* .product-title end  */}
                    <div className="product--rating">

											{
												range(1,activeStar).map( () => <i className="fa fa-star active"></i> )
											}
											{
												range(activeStar,emptyStar).map( () => <i className="fa fa-star"></i> )
											}

                    </div>
                    
										<div className="product--review">{ reviews } Customer Review</div>
                    {/* - .product-review end  */}

                    <div className="product--price">$ { price }.00</div>
                     {/* .product-price end  */}

                    <div className="product--desc-tabs tabs">

                       {/* Nav tabs  */}
                      <ul className="nav nav-tabs" role="tablist">
                        <li>
                          <button
                            className={ activeTab === 'infoGuide' ? 'active' : '' }
														onClick={ () => changeActiveTab('infoGuide')}
                          >
														INFO GUIDE
													</button>
                        </li>
                        <li>
                          <button
                            className={ activeTab === 'shippingGuide' ? 'active' : '' }
														onClick={ () => changeActiveTab('shippingGuide')}
													>
															SHIPPING
													</button>
                        </li>
                        <li>
                          <button
														className={ activeTab === 'returnGuide' ? 'active' : '' }
														onClick={ () => changeActiveTab('returnGuide')}
													>
														RETURN
													</button>
                        </li>
                      </ul>

                       {/* Tab panes  */}
                      <div className="tab-content">

												{/* INFO GUIDE */}
                        <div
                          role="tabpanel"
                          className={`tab-pane fade ${  activeTab === 'infoGuide' ? 'show active' : ''}`}
                        >
                          <div className="product--desc">
                            <p>
                              {
																infoGuide
															}
                            </p>
                          </div>
                        </div>

                         {/* .tab-pane end  */}

												 {/* SHIPPING */}
                        <div
                          role="tabpanel"
                          className={`tab-pane fade ${  activeTab === 'shippingGuide' ? 'show active' : ''}`}
                        >
                          <div className="product--desc">
                            <p>
                             {
															 shippingGuide
														 }
                            </p>
                          </div>
                        </div>
                         {/* .tab-pane end  */}

                        <div
                          role="tabpanel"
                          className={`tab-pane fade ${  activeTab === 'returnGuide' ? 'show active' : ''}`}
                          id="popup--desc-tabs-3"
                        >
                          <div className="product--desc">
                            <p>
                              {
																returnGuide
															}
                            </p>
                          </div>
                        </div>

                         {/* .tab-pane end  */}
                      </div>
                       {/* #tab-content end  */}
                    </div>
                     {/* .product-desc-tabs end  */}
                    <div className="product--meta">
                      <ul className="product--meta-info list-unstyled">
                        <li>Availability:<span>{ stock > 3 ? 'In stock' : stock }</span></li>
                        <li>SKU:<span>{ sku }</span></li>
                      </ul>
                       {/* .product-meta-info end  */}
                      <div className="product--meta-select3">
                        <form className="mb-30">
                          <div className="row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                              <div className="select--box">
                                <i className="fa fa-caret-down"></i>
                                <select className="form-control">
                                  <option value="white">WHITE</option>
                                  <option value="black">black</option>
                                  <option value="red">red</option>
                                </select>
                              </div>
                            </div>
                             {/* .col-md-6  */}
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                              <div className="select--box">
                                <i className="fa fa-caret-down"></i>
                                <select className="form-control">
                                  <option value="small">SMALL</option>
                                  <option value="large">large</option>
                                  <option value="X large">X large</option>
                                </select>
                              </div>
                            </div>
                             {/* .col-md-6  */}
                          </div>
                           {/* .row  */}
                        </form>
                      </div>
                       {/* .product-meta-select end  */}
                      <div className="product--meta-action clearfix mb-0">
                        <div className="mb-40">
                          <div className="select-order">
                            <div className="product-quantity">
                              <input className="minus" type="button" value="-" />
                              <input
                                type="text"
                                id="pro1-qunt"
                                value="2"
                                className="qty"
                                readOnly={true}
                              />
                              <input className="plus" type="button" value="+" />
                            </div>
                          </div>
                          <button
                            className="btn btn--primary btn--rounded add-to-card-btn"
                          >
														ADD TO CART
													</button>
                        </div>

                        <div className="clearfix">
                          <div className="pull-left">

                            <button className="fav">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
																/>
															</svg>
														</button>

                          </div>
													
                          <div className="product--share pull-right">
                            <a className="share-facebook" href="#"
                              ><i className="fa fa-facebook"></i
                            ></a>
                            <a className="share-twitter" href="#"
                              ><i className="fa fa-twitter"></i
                            ></a>
                            <a className="share-google-plus" href="#"
                              ><i className="fa fa-pinterest-p"></i
                            ></a>
                            <a className="share-linkedin" href="#"
                              ><i className="fa fa-linkedin"></i
                            ></a>
                          </div>

                        </div>
                         {/* .product-share end  */}
                      </div>
                    </div>
                  </div>
                   {/* .col-lg-6 end  */}
                </div>
                 {/* .row end  */}
              </div>
               {/* .modal-body end  */}
            </div>
          </div>
           {/* .modal-content end  */}
        </div>
         {/* .modal-dialog end  */}
      </div>
	)
}
