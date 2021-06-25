import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../utils/fetch";
import { setSingleProduct, changeGettingProduct } from "../store/Reducer/reducer";

import Hero from '../components/Product/Hero'
import ProductDetails from '../components/Product/ProductDetails'
import RecentProducts from '../components/Product/RecentProducts'

const apiUrl = process.env.REACT_APP_API_URL;

export default function Product() {

	let { id } = useParams();

	console.log(id)

	const { singleProduct, gettingSingleProduct } = useSelector((state) => state.shop );

  const dispatch = useDispatch();

	useEffect( () => {

		if( !gettingSingleProduct && !singleProduct._id ) {
			getSingleProduct(id)
		}

	}, [])

	const getSingleProduct = async (id) => {
		console.log(`Sending Fetch request for product with id:${id}`)

		dispatch(changeGettingProduct());

		const singleProduct = await get(`${apiUrl}/product/${id}`);

		if( singleProduct.success ) {

			console.log(singleProduct.product)
			
			dispatch(setSingleProduct(singleProduct.product));
		}
		
		dispatch(changeGettingProduct());
	}

	return (
		<div style={{ paddingTop: '100px' }}>

			<Hero />

			<ProductDetails />

			<RecentProducts />

		</div>
	)
}
