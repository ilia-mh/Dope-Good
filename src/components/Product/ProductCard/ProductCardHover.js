import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HoverCart from './HoverCart'

export default function ProductCardHover(props) {

  const {
    productHover,
    addToCard,
    showProductQuickView,
    addProductToFavorites,
    favoritted,
    goingToSingleProduct,
    product
  } = props;

  const [smallDevice,setSmallDevice] = useState(false)

  const productHoverAnimate = {
    hidden: {
      y: 400,
      opacity: 0
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1
    },
    transition: {
      duration: 0.3,
    },
  };

  const addCartAnimate = {
    hidden: {
      y: -400,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    setDeviceSize()
    window.addEventListener( 'resize', setDeviceSize )
  });

  const setDeviceSize = () => {
    if (window.innerWidth < 768) setSmallDevice(true);
    else setSmallDevice(false);
  }

  return smallDevice ? (
    <div className="category--hover">

      <button
        className="btn btn--primary btn--rounded add-to-cart"
        onClick={() => addToCard()}
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
      </button>

      <div className="category--action-content">

        <HoverCart 
          showProductQuickView={showProductQuickView} 
          addProductToFavorites={addProductToFavorites}
          favoritted={favoritted}
          goingToSingleProduct={goingToSingleProduct}
          product={product}
        />
        
      </div>
    </div>
  ) : (
    <div className="category--hover">
      {/* ADD TO CART */}
      <motion.button
        className="btn btn--primary btn--rounded add-to-cart"
        onClick={() => addToCard()}
        variants={addCartAnimate}
        initial="hidden"
        animate={ productHover ? 'animate':'hidden' }
        transition="transition"
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
        initial="hidden"
        animate={ productHover ? 'animate':'hidden' }
        transition="transition"
      >

        <HoverCart 
          showProductQuickView={showProductQuickView} 
          addProductToFavorites={addProductToFavorites}
          favoritted={favoritted}
          goingToSingleProduct={goingToSingleProduct}
          product={product}
        />
        
      </motion.div>
    </div>
  );
}
