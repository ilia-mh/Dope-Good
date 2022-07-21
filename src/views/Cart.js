import React, { lazy, Suspense } from 'react'
import Title from '../components/Cart/Title'
// import CartList from '../components/Cart/CartList'

import { Helmet } from "react-helmet";

const CartList = lazy( () => import('../components/Home/Hero/Hero'))

export default function Cart() {
	return (
		<div className="view-wrapper" >

			<Helmet>
				<title>Cart</title>
				<meta name="description" 
				content="Products stored in your card" />
      </Helmet>

			<Title />

			<Suspense fallback={<div></div>}>
				<CartList />
			</Suspense>

		</div>
	)
}
