import React, { lazy, Suspense } from 'react'
import Title from '../components/Cart/Title'
// import CartList from '../components/Cart/CartList'

const CartList = lazy( () => import('../components/Home/Hero/Hero'))

export default function Cart() {
	return (
		<div className="view-wrapper" >

			<Title />

			<Suspense fallback={<div></div>}>
				<CartList />
			</Suspense>

		</div>
	)
}