import React from "react";
import { useSelector } from "react-redux";

import './checkoutInfo.scss'

export default function CheckoutInfo() {

	const cart = useSelector((state) => state.shop.cart);

  const subTotal = cart.reduce(
    (counter, { price, q }) => (counter += price * q),
    0
  );

  return (
    <div className="col-sm-12 col-md-6 col-lg-5 offset-lg-1 checkout-info">

      <div className="cart-total-amount">

        <h4>Your oder</h4>

        <div className="cart--products">
          <h6>Products</h6>
          <div className="clearfix"></div>
          <ul className="list-unstyled">

            {
              cart.length ?
                cart.map( ( product, idx ) => {

                  const { name, price, options, img, q, _id } = product

                  return (
                    <li>
                      { name } x{q}<span className="price">${ (price * q).toFixed(2) }</span>
                    </li>
                  )
                })
              : 
                ''
            }

          </ul>
        </div>
        <div className="cart--subtotal">
          <h6>Subtotal</h6>
          <span className="price">${ subTotal.toFixed(2) }</span>
        </div>
        <div className="cart--shipping">
          <h6>Shipping</h6>
          <span className="price">${ subTotal > 150 ? '0' : '40' }</span>
        </div>
        <div className="cart--total">
          <div className="clearfix">
            <h6>Total</h6>
            <span className="price">${ subTotal > 150 ? subTotal.toFixed(2) : (subTotal+40).toFixed(2) }</span>
          </div>
          <fieldset className="mb-30">
            <div className="input-radio">
              <label className="label-radio">
                Direct bank transfer
                <input type="radio" name="methodSelect" />
                <span className="radio-indicator"></span>
              </label>
            </div>
            {/* .input-radio end  */}

            <div className="input-radio">
              <label className="label-radio">
                Cheque Payment
                <input type="radio" name="methodSelect" />
                <span className="radio-indicator"></span>
              </label>
            </div>
            {/* .input-radio end  */}

            <div className="input-radio">
              <label className="label-radio">
                Paypal
                <span className="currency--icons">
                  <i className="fa fa-cc-mastercard"></i>
                  <i className="fa fa-cc-visa"></i>
                  <i className="fa fa-paypal"></i>
                  <i className="fa fa-cc-discover"></i>
                </span>
                <input type="radio" name="methodSelect" checked />
                <span className="radio-indicator"></span>
              </label>
            </div>
            {/* .input-radio end  */}
          </fieldset>
          <a href="/#" className="btn btn--primary btn--rounded btn--block">
            PLACE ORDER
          </a>
        </div>
      </div>
      
    </div>
  );
}
