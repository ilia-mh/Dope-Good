import React from 'react'
import Slider from '../Slider/Slider'

import RecentProductsImg1 from '../../assets/images/products/related/1.jpg'
import RecentProductsImg2 from '../../assets/images/products/related/2.jpg'
import RecentProductsImg3 from '../../assets/images/products/related/3.jpg'
import RecentProductsImg4 from '../../assets/images/products/related/4.jpg'
import RecentProductsImg5 from '../../assets/images/products/related/5.jpg'
import RecentProductsImg6 from '../../assets/images/products/related/6.jpg'
import RecentProductsImg7 from '../../assets/images/products/related/7.jpg'
import RecentProductsImg8 from '../../assets/images/products/related/8.jpg'

export default function RecentProducts() {

	const responsiveSlider = [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
	]
	return (
		<section
        id="products-carousel"
        className="products-carousel related-products pt-0 pb-80"
      >
        <div className="container-fluid pr-40 pl-40">
          <hr className="mb-80" />

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="heading text-center mb-50">
                <h2 className="heading--title">Recent Products</h2>
              </div>
            </div>
             {/* .col-lg-12 end  */}
          </div>
           {/* .row end  */}

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 recent-products-carousel">

              <div
                className="carousel owl-carousel carousel-dots"
              >

								<Slider slidesToShow={4} responsive={responsiveSlider} >

									{/* Product item #1  */}
									<div className="product-item">
										<div className="product--img">

											<img
												src={RecentProductsImg1}
												alt="product"
											/>

										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Great Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#" 
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* product item #2  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg2}
												alt="product"
											/>
										</div>
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Great Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>

													<a href="/#"><i className="ti-control-shuffle"></i></a>

												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #3  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg3}
												alt="product"
											/>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Amazing Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #4  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg4}
												alt="product"
											/>
											<span className="featured-item">hot</span>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Black wood Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #5  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg5}
												alt="product"
											/>
											<span className="featured-item featured-item2">hot</span>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Great Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#" 
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #6  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg6}
												alt="product"
											/>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Amazing Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #7  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg7}
												alt="product"
											/>
											<span className="featured-item">hot</span>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Black wood Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

									{/* Product item #8  */}
									<div className="product-item">
										<div className="product--img">
											<img
												src={RecentProductsImg8}
												alt="product"
											/>
											<span className="featured-item featured-item2">hot</span>
										</div>
										{/* .product-img end  */}
										<div className="product--content">
											<div className="product--title">
												<h3><a href="/#">Hebes Great Chair</a></h3>
											</div>
											{/* .product-title end  */}
											<div className="product--price">
												<span>$ 42.00</span>
											</div>
											{/* .product-price end  */}
											<div className="product--hover">
												<div className="product--action">
													<a
														href="/#"
														className="btn btn--primary btn--rounded"
														><i className="icon-bag"></i>ADD TO CART</a
													>
													<a href="/#"
														><i className="ti-search"></i
													></a>
													<a href="/#"><i className="ti-heart"></i></a>
													<a href="/#"
														><i className="ti-control-shuffle"></i
													></a>
												</div>
											</div>
											{/* .product-hover end  */}
										</div>
										{/* .product-content end  */}
									</div>
									{/* .product-item end  */}

								</Slider>


              </div>
               {/* .carousel end  */}
            </div>
             {/* .row end  */}
          </div>
        </div>

         {/* .container end  */}
      </section>
	)
}
