import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductQuickView, setSingleProduct, changeGettingProduct, toggleProductFavorite, addToCart } from "../../../store/Reducer/reducer";
import { get, post } from "../../../utils/fetch";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

import ProductCardHover from './ProductCardHover'

import './ProductCard.scss'

const apiUrl = process.env.REACT_APP_API_URL;

export default function ProductCard({ product, isInSlider, removeFavorite }) {

	const user = useSelector((state) => state.shop.user);
	const dispatch = useDispatch();

  const { _id, name, price, favoritted, photos, options } = product;

	const [productHover,setProductHover] = useState(false)

  const addProductToFavorites = async () => {

    if( !user ) {
      toast.error('You must Login to be able to do that!')
    } else {

      const sendToggleFavorite = await post(`${apiUrl}/api/product/fav`, { product_id: _id })

      if( !sendToggleFavorite.success ) {
        toast.error('Some Error Occured with your action')
      } else {
        
        toast.success('Product Added to your favorites')
        dispatch(toggleProductFavorite(_id))

        removeFavorite(_id)

      }
    }
  }

  const addToCard = () => {

		if( !_id ) return

		const newProduct = {
			_id,
			name,
			img: photos[0],
			price,
			q: 1,
			options: {
				color: options.color[0].name,
				size: options.size[0].name
			}
		}

		dispatch(addToCart(newProduct))
	}

	const productHovered = () => {
		setProductHover(true)
	}

	const productHoverOut = () => {
		setProductHover(false)
	}

	const showProductQuickView = () => {
		dispatch( setProductQuickView(product) )
	}

	const wrapperClass = isInSlider ? 'col-sm-12 product-card-slider-wrapper' : 'col-sm-12 col-md-6 product-card-wrapper'

  return (
    <div className={wrapperClass} >

      <div
        className="category-item"
        onMouseOver={() => productHovered()}
        onMouseLeave={() => productHoverOut()}
      >
        <Link to={`/product/${_id}`} className="category--img" >
          <img
            src={`${apiUrl}/${_id}/${photos[0]}`}
            alt="category"
            loading="lazy"
          />
        </Link>

        {/* .category-img end  */}

        <div className="category--content">
          <div className="category--title">
            <h3>
              <Link
                to={`/product/${_id}`}
              >
                {name}
              </Link>
            </h3>
          </div>
          {/* .category-title end  */}

          <div className="category--price">
            <span> $ {price.toFixed(2)}</span>
          </div>
        </div>
        {/* .category-price end  */}

        <ProductCardHover
          productHover={productHover}
          product={product} 
          addToCard={addToCard} 
          showProductQuickView={showProductQuickView}
          addProductToFavorites={addProductToFavorites}
          favoritted={favoritted}
        />

      </div>
      
    </div>
  );
}
