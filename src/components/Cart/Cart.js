import React from 'react'
import './cart.css'

export default function Cart() {
	return (
		<div className="shop-cart-modal slideUp">

			<p>Cart Items</p>

			<div className="subtotal">

				<h6>SUB TOTAL</h6>

				<span>$10.00</span>

			</div>

			<div className="cart-actions">

				<button className="view-cart-btn">view cart</button>

				<button className="checkout-btn">checkout</button>

			</div>

		</div>
	)
}
