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
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

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

		if( options ) {

			const { color, size } = options

			if( color ) {
				setSelectedColor( color[0].name )
			}
	
			if( size ) {
				setSelectedSize( size[0].name )
			}
		}

    const bodyClass = document.documentElement.classList

    if( _id ) {
      bodyClass.add('no-scroll');
    } else {
      bodyClass.remove('no-scroll');
    }

	},[product])

	const addToCard = (e) => {
    
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

    if( e && e.currentTarget ) {
      e.currentTarget.blur()
    }
	}

  const slidePhotos = () => photos.slice(1)

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
                      <Slider gallery={slidePhotos().map((photo) => `${apiUrl}/${_id}/${photo}` )}>
                        {slidePhotos().map((photo) => (
                          <div className="product-img" key="photo">
                            <img src={`${apiUrl}/${_id}/${photo}`} alt="product" loading="lazy" />
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
                          
                          {
                            options && options.color && (
                              <ProductOptions
                                options={options.color}
                                changeOption={setSelectedColor}
                                selectedOption={selectedColor}
                              />
                            )
                          }
													
													{
                            options && options.size && options.size.length > 1 && (
                              <ProductOptions
                                options={options.size}
                                changeOption={setSelectedSize}
                                selectedOption={selectedSize}
                              />
                            )
                          }
                          
                        </div>

                      </form>
                    </div>

                    <div className="product--meta-action clearfix mb-0">
                      <div className="sm-mb-0 mb-40">
                        <div className="select-order">
                          <ProductQuantityCounter
                            productQt={productQt}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                          />
                        </div>
                        <button className="btn btn--primary btn--rounded add-to-card-btn" 
                          onClick={ (e) => addToCard(e)} 
                          onBlur={ (e) => e.currentTarget.style.backgroundColor = '#F26C4F'}
                          onMouseEnter={ (e) => e.currentTarget.style.backgroundColor = '#252525' }
                          onMouseLeave={ (e) => e.currentTarget.style.backgroundColor = '#F26C4F' }
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
