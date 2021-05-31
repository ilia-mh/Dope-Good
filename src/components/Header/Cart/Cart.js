import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'

export default function Cart({ toggleShowCart }) {
	return (
		<div className="shop-cart-modal slideUp">

			<p>Cart Items</p>

			<div className="subtotal">

				<h6>SUB TOTAL</h6>

				<span>$10.00</span>

			</div>

			<div className="cart-actions">

				<Link className="view-cart-btn" to='/cart' onClick={toggleShowCart} >view cart</Link>

				<Link className="checkout-btn" to='/checkout' onClick={toggleShowCart} >checkout</Link>

			</div>

		</div>
	)
}
