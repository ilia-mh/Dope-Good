import React from "react";
import { Link } from "react-router-dom";
import "./cart.scss";

import { useSelector, useDispatch } from "react-redux";

import { removeFromCart } from "../../../store/Reducer/reducer";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function Cart({ toggleShowCart, showCart }) {

  const allProducts = useSelector((state) => state.shop.allProducts);
  const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (idx) => {
    dispatch(removeFromCart(idx));
  };

  const subTotal = cart.reduce(
    (counter, { price, q }) => (counter += price * q),
    0
  );

	const bgToggle = () => {
		console.log('toggling cart module')
		if ( showCart ) toggleShowCart()
	}
  
  const doesNeedSize = (id) => {

    const productIdx = allProducts.findIndex( ({ _id }) => _id === id )

    if( productIdx !== -1 ) return allProducts[productIdx].options.size.length > 1
    else return false
  }

  return (
    <div>

			{ showCart && <div className="bg-full-cover" onClick={bgToggle}></div> }

      <div
        className={`module-content module-hamburger cart-box ${
          showCart ? "slideCartLeft" : ""
        }`}
      >

        <button className="module-cancel" onClick={toggleShowCart}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <div className="cart-title">
          <h5>Shopping Cart</h5>
        </div>

        <div className="cart-overview">
          {cart.length ?
            cart.map((product, idx) => {
              const { name, q, price, img, options, _id } = product;

              return (
                <div key={idx}>
                  <div className="img-wrapper">
                    <img
                      className="img-fluid"
                      src={`${apiUrl}/${_id}/${img}`}
                      alt="product"
                    />
                  </div>

                  <div className="product-meta">
                    <h5 className="product-title">{name}</h5>
                    <p className="product-qunt">Quantity: {q}</p>
                    <p className="product-color">Color: {options.color}</p>
                    {
                      doesNeedSize(_id) &&
                        <p className="product-size">Size: {options.size}</p>
                    }
                    <p className="product-price">${price.toFixed(2)}</p>
                  </div>
                  <button
                    className="cart-cancel"
                    onClick={() => removeProductFromCart(idx)}
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
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              );
            })
						:
						<h4 className="no-product">No Product added to Cart</h4>
					}
        </div>

        <div className="cart-total">
          <div className="total-desc">Sub total</div>
          <div className="total-price">${subTotal.toFixed(2)}</div>
        </div>
        <div className="cart--control">
          <Link
            className="btn btn--white btn--bordered btn--rounded view-cart-btn"
            to="/cart"
            onClick={toggleShowCart}
          >
            View Cart
          </Link>

          <Link
            className="btn btn--primary btn--rounded checkout-btn"
            to="/checkout"
            onClick={toggleShowCart}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
