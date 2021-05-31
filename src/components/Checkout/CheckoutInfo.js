import React from 'react'

export default function CheckoutInfo() {
	return (
		<div className="col-sm-12 col-md-6 col-lg-5 offset-lg-1">
              <div className="cart-total-amount">
                <h4>Your oder</h4>
                <div className="cart--products">
                  <h6>Products</h6>
                  <div className="clearfix"></div>
                  <ul className="list-unstyled">
                    <li>Cum sociis natoque<span className="price">$14.00</span></li>
                    <li>
                      Habitant morbi tristique<span className="price">$28.00</span>
                    </li>
                    <li>Aenean ultricies<span className="price">$24.00</span></li>
                  </ul>
                </div>
                <div className="cart--subtotal">
                  <h6>Subtotal</h6>
                  <span className="price">$68.00</span>
                </div>
                <div className="cart--shipping">
                  <h6>Shipping</h6>
                  <span className="price">$0</span>
                </div>
                <div className="cart--total">
                  <div className="clearfix">
                    <h6>Total</h6>
                    <span className="price">$68.00</span>
                  </div>
                  <fieldset className="mb-30">
                    <div className="input-radio">
                      <label className="label-radio"
                        >Direc bank transfer
                        <input type="radio" name="methodSelect" />
                        <span className="radio-indicator"></span>
                      </label>
                      <p>
                        Aenean id ullamcorper libero. Vestibulum imperdiet nibh.
                        Lorem ullamcorper volutpat. Vestibulum lacinia risus.
                        Etiam sagittis ullamcorper volutpat.
                      </p>
                    </div>
                     {/* .input-radio end  */}
                    <div className="input-radio">
                      <label className="label-radio"
                        >Cheque Payment
                        <input type="radio" name="methodSelect" />
                        <span className="radio-indicator"></span>
                      </label>
                    </div>
                     {/* .input-radio end  */}
                    <div className="input-radio">
                      <label className="label-radio"
                        >Paypal
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
                  <a href="/#" className="btn btn--primary btn--rounded btn--block"
                    >PLACE ORDER</a
                  >
                </div>
              </div>
               {/* .cart-total-amount end  */}
            </div>

	)
}
