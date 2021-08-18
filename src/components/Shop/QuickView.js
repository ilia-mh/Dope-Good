import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductQuickView, addToCart } from "../../store/Reducer/reducer";
import Slider from "../Slider/Slider";
import ProductQuantityCounter from "../Product/ProductQuantityCounter";
import ProductDescTabs from "../Product/ProductDescTabs";
import ProductRating from '../Product/ProductRating'
import ProductOptions from '../Product/ProductOptions'

import "./quickView.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function QuickView() {

  const product = useSelector((state) => state.shop.quickViewProduct);
  const dispatch = useDispatch();

  const [productQt, setProductQt] = useState(1);
  const [selectedColor, setselectedColor] = useState('');
  const [selectedSize, setselectedSize] = useState('');

  const {
    name,
    price,
    photos,
    rate,
    reviews,
    infoGuide,
    shipping: shippingGuide,
    options,
    return: returnGuide,
    sku,
    stock,
    _id,
  } = product;

  const hideProductQuickView = () => {
    setProductQt(1);
    dispatch(emptyProductQuickView());
  };

  const increaseQuantity = () => {
    if (stock > productQt) setProductQt(productQt + 1);
  };

  const decreaseQuantity = () => {
    if (productQt > 1) setProductQt(productQt - 1);
  };

	useEffect( () => {

		if( product && product.options ) {

			const { color, size } = product.options

			if( color ) {
				setselectedColor( color[1] )
			}
	
			if( size ) {
				setselectedSize( size[1] )
			}
		}


	},[product])

	const addToCard = () => {

		if( !_id ) return

		const newProduct = {
			_id,
			name,
			img: photos[0],
			price,
			q: productQt,
			options: {
				color: selectedColor,
				size: selectedSize
			}
		}

		dispatch(addToCart(newProduct))
	}

  return _id ? (
    <div
      className={`modal model-bg-light fade product-popup modal-fullscreen ${
        _id ? "show" : ""
      }`}
      id="product-popup"
      style={{ display: _id ? "flex" : "none", paddingRight: "17px" }}
    >

			{ <div className="bg-full-cover" onClick={hideProductQuickView}></div> }

      <div className="modal-dialog" role="document">

        <div className="modal-content">
					
          <div className="modal-body">
            <button
              type="button"
              className="close"
              onClick={hideProductQuickView}
            >
              <span>&times;</span>
            </button>

            <div className="product-detalis product-detalis-3 product-detalis-10 pt-0 pb-0">
              <div className="row">

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="products-gallery-carousel">
                    <div className="owl-carousel products-slider">
                      <Slider gallery={photos.map((photo) => apiUrl + photo)}>
                        {photos.map((photo) => (
                          <div className="product-img" key="photo">
                            <img src={apiUrl + photo} alt="product" />
                          </div>
                        ))}
                      </Slider>
                    </div>

                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="product--title">
                    <h3>{name}</h3>
                  </div>
                  
									<ProductRating rate={rate} />

                  <div className="product--review">
                    {reviews || 0} Customer Review
                  </div>
                  {/* - .product-review end  */}

                  <div className="product--price">$ {price.toFixed(2)}</div>
                  {/* .product-price end  */}

									<ProductDescTabs returnGuide={returnGuide} infoGuide={infoGuide} shippingGuide={shippingGuide} />

                  <div className="product--meta">

                    <ul className="product--meta-info list-unstyled">
                      <li>
                        Availability:
                        <span>{stock > 3 ? "In stock" : stock}</span>
                      </li>
                      <li>
                        SKU:<span>{sku}</span>
                      </li>
                    </ul>

                    {/* .product-meta-info end  */}
                    <div className="product--meta-select3">
                      <form className="mb-30">
                        <div className="row">
                          
                          <ProductOptions options={options.color} changeOption={ setselectedColor } />
													
													{
														options.size &&
															<ProductOptions options={options.size} changeOption={ setselectedSize } />
													}
                          {/* .col-md-6  */}
                        </div>
                        {/* .row  */}
                      </form>
                    </div>
                    {/* .product-meta-select end  */}

                    <div className="product--meta-action clearfix mb-0">
                      <div className="mb-40">
                        <div className="select-order">
                          <ProductQuantityCounter
                            productQt={productQt}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                          />
                        </div>
                        <button className="btn btn--primary btn--rounded add-to-card-btn" onClick={addToCard} >
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

                        {/* <div className="product--share pull-right">
                          <a className="share-facebook" href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                          <a className="share-twitter" href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                          <a className="share-google-plus" href="#">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                          <a className="share-linkedin" href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </div> */}
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
  ) : (
    <div className="empty-quick-view"></div>
  );
}