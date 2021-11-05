import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import './checkoutInfo.scss'

export default function CheckoutInfo() {

	const cart = useSelector((state) => state.shop.cart);

  const subTotal = cart.reduce(
    (counter, { price, q }) => (counter += price * q),
    0
  );

  const checkOut = () => {
    toast.info('The Webiste payment is down for the moment. We Apologize for the inconvenience. Subscribe to our website and well notify you as soon as payment is available again.')
  }

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

                  const { name, price, q } = product

                  return (
                    <li key={idx}>
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
                <input type="radio" name="methodSelect" defaultChecked />
                <span className="radio-indicator"></span>
              </label>
            </div>
            {/* .input-radio end  */}

          </fieldset>
          <button className="btn btn--primary btn--rounded btn--block" onClick={checkOut}>
            PLACE ORDER
          </button>
        </div>
      </div>
      
    </div>
  );
}
