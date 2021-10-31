import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductQuickView, setSingleProduct, changeGettingProduct, toggleProductFavorite, addToCart } from "../../../store/Reducer/reducer";
import { get, post } from "../../../utils/fetch";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';

import ProductCardHover from './ProductCardHover'

import './ProductCard.scss'

const apiUrl = process.env.REACT_APP_API_URL;

export default function ProductCard({ product, isInSlider }) {

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
				color: options.color[0],
				size: options.size[0]
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

	const goingToSingleProduct = async (id) => {

		dispatch(changeGettingProduct());

		const singleProduct = await get(`${apiUrl}/api/product/${_id}`);
		
		dispatch(setSingleProduct(singleProduct.products));
		dispatch(changeGettingProduct());

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
        <Link to={`/product/${_id}`} className="category--img" target="_blank">
          <img
            src={`${apiUrl}/${_id}/${photos[0]}`}
            alt="category"
          />
        </Link>

        {/* .category-img end  */}

        <div className="category--content">
          <div className="category--title">
            <h3>
              <Link
                to={`/product/${_id}`}
                onClick={() => goingToSingleProduct(_id)}
                target="_blank"
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
          goingToSingleProduct={goingToSingleProduct}
        />

      </div>
      
    </div>
  );
}