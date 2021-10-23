import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductQuickView, setSingleProduct, changeGettingProduct, toggleProductFavorite, addToCart } from "../../store/Reducer/reducer";
import { get, post } from "../../utils/fetch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import { toast } from 'react-toastify';

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

  const productHoverAnimate = {
    hidden: {
      y: 200,
    },
    animate: {
      y: 0,
      x: 0,
    },
    transition: {
      duration: 0.3
    }
  }

  const addCartAnimate = {
    hidden: {
      y: -200
    },
    animate: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      }
    },
  }

	const wrapperClass = isInSlider ? 'col-sm-10' : 'col-sm-6 col-md-6 col-lg-3'

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

        <div className="category--hover">
          {/* ADD TO CART */}
          <motion.button 
            className="btn btn--primary btn--rounded add-to-cart" 
            onClick={() => addToCard()}
            variants={addCartAnimate}
            initial="hidden"
            animate={ productHover ? 'animate':'hidden'}
            transition='transition'
          >
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            ADD TO CART
          </motion.button>

          <motion.div 
            className="category--action-content"
            variants={productHoverAnimate}
            initial='hidden'
            animate={ productHover ? 'animate' : 'hidden'}
            transition='transition'
          >
            <div className="category--action-icons">
              <button
                className="product-quick-view"
                onClick={() => showProductQuickView()}
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button className="product-favorite" onClick={ () => addProductToFavorites()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${ favoritted ? 'active' : '' }`}
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

            <div className="category--hover-info">
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

              <div className="category--price">
                <span>$ {price}.00</span>
              </div>
            </div>


            {
              options.color &&
              <div className="category--colors">
                {
                  options.color.map( (color,idx) => 
                    <div key={idx} className="product-color-options" style={{ backgroundColor: color.code }}></div>
                  )
                }
              </div>
            }

          </motion.div>
        </div>

      </div>
    </div>
  );
}
