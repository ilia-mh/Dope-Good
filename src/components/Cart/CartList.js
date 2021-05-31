import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../../assets/images/products/thumb/1.jpg";
import Product2 from "../../assets/images/products/thumb/2.jpg";

export default function CartList() {
  return (
    <section id="shopcart" className="shop shop-cart pt-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="cart-table table-responsive">
              <table className="table">
                <thead>
                  <tr className="cart-product">
                    <th className="cart-product-item">PRODUCT NAME</th>
                    <th className="cart-product-price">UNIT PRICE</th>
                    <th className="cart-product-quantity">Quantity</th>
                    <th className="cart-product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {/* cart product #1  */}
                  <tr className="cart-product">
                    <td className="cart-product-item">
                      <div className="cart-product-img">
                        <img src={Product1} alt="product" />
                      </div>
                      <div className="cart-product-content">
                        <div className="cart-product-name">
                          <h6>Hebes Great Chair</h6>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span>Color:</span>
                            <span>Grey</span>
                          </li>
                          <li>
                            <span>Size:</span>
                            <span>XL</span>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="cart-product-price">$24.00</td>
                    <td className="cart-product-quantity">
                      <div className="product-quantity">
                        <input className="minus" type="button" value="-" />
                        <input
                          type="text"
                          id="pro1-qunt"
                          value="2"
                          className="qty"
                          readonly=""
                        />
                        <input className="plus" type="button" value="+" />
                      </div>
                    </td>
                    <td className="cart-product-total">
                      <span>$24.00</span>
                      <div className="cart-product-remove">x</div>
                    </td>
                  </tr>
                  {/* .cart-product end  */}

                  {/* cart product #1  */}
                  <tr className="cart-product">
                    <td className="cart-product-item">
                      <div className="cart-product-img">
                        <img src={Product2} alt="product" />
                      </div>
                      <div className="cart-product-content">
                        <div className="cart-product-name">
                          <h6>Hebes Great Sofa 2019</h6>
                        </div>
                        <ul className="list-unstyled mb-0">
                          <li>
                            <span>Color:</span>
                            <span>Grey</span>
                          </li>
                          <li>
                            <span>Size:</span>
                            <span>XL</span>
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td className="cart-product-price">$24.00</td>
                    <td className="cart-product-quantity">
                      <div className="product-quantity">
                        <input className="minus" type="button" value="-" />
                        <input
                          type="text"
                          id="pro1-qunt"
                          value="2"
                          className="qty"
                          readonly=""
                        />
                        <input className="plus" type="button" value="+" />
                      </div>
                    </td>
                    <td className="cart-product-total">
                      <span>$24.00</span>
                      <div className="cart-product-remove">x</div>
                    </td>
                  </tr>
                  {/* .cart-product end  */}

                  <tr className="cart-product-action">
                    <td colspan="4">
                      <div className="row clearfix">
                        <div className="col-sm-12 col-md-12 col-lg-8">
                          <a
                            className="
                                btn btn--secondary btn--bordered btn--rounded
                                mr-30
                              "
                            href="/#"
                          >
                            CLEAR SHOPPING CART
                          </a>
                          <a
                            className="
                                btn btn--secondary btn--bordered btn--rounded
                              "
                            href="/#"
                          >
                            UPDATE SHOPPING CART
                          </a>
                        </div>
                        {/* .col-lg-6 end  */}
                        <div
                          className="
                              col-sm-12 col-md-12 col-lg-4
                              text-right text-left-xs text-left-sm
                            "
                        >
                          <a
                            className="btn btn--secondary btn--rounded"
                            href="/#"
                          >
                            CONTINUE SHOPPING cart
                          </a>
                        </div>
                        {/* .col-lg-6 end  */}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* .cart-table end  */}

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
                        className="btn btn--secondary btn--rounded"
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
                        <span>$48.00</span>
                      </div>
                      <div className="total">
                        <h6>GRAND TOTAL</h6>
                        <span>$48.00</span>
                      </div>
                      <p>Checkout with Mutilple Adresses</p>
                      <Link
                        className="btn btn--primary btn--rounded btn--block"
                        to="/checkout"
                      >
                        PROCEED TO CHECKOUT
                      </Link>
                    </div>
                    {/* .checkout-panel end  */}
                  </div>
                  {/* .col-lg-6 end  */}
                </div>
              </div>
            </div>
          </div>
          {/* .col-lg-12 end  */}
        </div>
        {/* .row end  */}
      </div>
      {/* .container end  */}
    </section>
  );
}
