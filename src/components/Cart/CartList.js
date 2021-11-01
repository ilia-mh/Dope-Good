import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, changeCartItemQ } from "../../store/Reducer/reducer";

import './cartlist.scss'

import ProductQ from './ProductQ'

const apiUrl = process.env.REACT_APP_API_URL

export default function CartList() {

	const cart = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();

	const removeProductFromCart = (idx) => {
    dispatch(removeFromCart(idx));
  };

  const subTotal = cart.reduce(
    (counter, { price, q }) => (counter += price * q),
    0
  );

	const changeCartItemQuantity = (idx,q) => {
		dispatch( changeCartItemQ({ idx, q }) )
	}

  return (
    <section id="shopcart" className="shop shop-cart pt-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="cart-table table-responsive">
              <table className="table" >
                <thead>
                  <tr className="cart-product">
                    <th className="cart-product-item">PRODUCT NAME</th>
										
                    <th className="cart-product-price">UNIT PRICE</th>

                    <th className="cart-product-price-quantity-mobile">PRICE & Q</th>
                    <th className="cart-product-quantity">Quantity</th>
										
                    <th className="cart-product-total">Total</th>
                  </tr>
                </thead>
                <tbody>

									{
										cart.length ?

											cart.map( ( product, idx ) => {

												const { name, price, options, img, q, _id } = product

												return (
													<tr className="cart-product" key={idx}>

														<td className="cart-product-item">

															<div className="cart-product-img">
																<img src={`${apiUrl}/${_id}/${img}`} alt="product" />
															</div>

															<div className="cart-product-content">

																<div className="cart-product-name">
																	<h6>{name}</h6>
																</div>
																
																<ul className="list-unstyled mb-0 options">
																	<li>
																		<span>Color:</span>
																		<span>{options.color}</span>
																	</li>
																	<li>
																		<span>Size:</span>
																		<span>{options.size}</span>
																	</li>
																</ul>

															</div>

														</td>

														<td className="cart-product-price">

															<span>${ price.toFixed(2)}</span>

														</td>

														<td className="cart-product-quantity">

															<ProductQ 
																changeCartItemQuantity={changeCartItemQuantity}
																q={q}
																idx={idx}
															/>

															<span>${ price.toFixed(2)}</span>


															{/* <div className="product-quantity">

																<input className="minus" type="button" value="-" onClick={ () => changeCartItemQuantity(idx,-1) } />

																<input
																	type="text"
																	id="pro1-qunt"
																	value={q}
																	className="qty"
																	readOnly={true}
																/>

																<input className="plus" type="button" value="+" onClick={ () => changeCartItemQuantity(idx,1) } />

															</div> */}

														</td>
														<td className="cart-product-total">
															<span>${ (price * q).toFixed(2) }</span>
															<div className="cart-product-remove" onClick={ () => removeProductFromCart(idx) }>x</div>
														</td>
													</tr>
												)

											})

										:
											null
									}

									{ cart.length ?
											<tr className="cart-product-action">
												<td colSpan="4">
													<div className="row clearfix">
														<div className="col-sm-12 col-md-12 col-lg-8">

															<button 
																className="btn btn--secondary btn--bordered btn--rounded mr-30 clear-shopping-list-btn"
																onClick={ () => dispatch( clearCart() )}
															>
																CLEAR SHOPPING CART
															</button>

														</div>
			
													</div>
												</td>
											</tr>
										:
										null
									}

									{ !cart.length ?
											<tr>
												<h5>NO Item in Cart</h5>
											</tr>
										:
											null
									}
                
								</tbody>
              </table>
            </div>

						{ cart.length ?

							<div className="cart-product-action">
								<div className="cart-copoun">
									<div className="row clearfix">
										<div className="col-sm-12 col-md-12 col-lg-6">
											<h3>Coupon discount</h3>
											<p>
												Enter your code if you have one. Pellentesque habitant
												morbi tristique senectus et netus et malesuada fames ac
												turpis egestas.
											</p>
											<form className="form-inline">

												<input
													type="text"
													className="form-control"
													id="coupon"
													placeholder="Enter your code here"
												/>

												<button
													type="submit"
													className="btn btn--secondary btn--rounded apply-copun-btn"
												>
													Apply Coupon
												</button>

											</form>
										</div>
										{/* .col-lg-6 end  */}
										<div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
											<div className="checkout--panel">

												<h4>Cart total</h4>

												<hr />

												<div className="sub--total">
													<h5>SUB TOTAL</h5>
													<span>${ subTotal.toFixed(2) }</span>
												</div>

												<div className="total">
													<h6>GRAND TOTAL</h6>
													<span>${ subTotal.toFixed(2) }</span>
												</div>

												<p>Checkout with Mutilple Adresses</p>

												
												<Link
													className="btn btn--primary btn--rounded btn--block checkout-btn"
													to="/checkout"
												>
													PROCEED TO CHECKOUT
												</Link>

											</div>
										</div>
									</div>
								</div>
							</div>
						:
							null
						}

          </div>
        </div>
      </div>
    </section>
  );
}
