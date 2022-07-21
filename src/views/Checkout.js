import React from 'react'
import Title from '../components/Checkout/Title'
import CheckoutWrap from '../components/Checkout/CheckoutWrap'

import { Helmet } from "react-helmet";

export default function Checkout() {
	return (
		<div className="view-wrapper" >

			<Helmet>
				<title>Checkout</title>
				<meta name="description" 
				content="Review your card and address details and then proceed with payment" />
      </Helmet>
			
			<Title />

			<CheckoutWrap />

		</div>
	)
}
