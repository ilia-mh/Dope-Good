import React from 'react'
import { useParams } from "react-router-dom";

import Hero from '../components/Product/Hero'
import ProductDetails from '../components/Product/ProductDetails'
import RecentProducts from '../components/Product/RecentProducts'

export default function Product() {

	let { id } = useParams();

	console.log(id)

	return (
		<div style={{ paddingTop: '100px' }}>

			<Hero />

			<ProductDetails />

			<RecentProducts />

		</div>
	)
}
