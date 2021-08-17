import React, { useEffect } from 'react'

import { useDispatch } from "react-redux";
import { setRecentProducts } from "../store/Reducer/reducer";
import { get } from "../utils/fetch";

import Hero from '../components/Home/Hero/Hero'
import HeroSupport from '../components/Home/HeroSupport/HeroSupport'
import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import Features from '../components/Home/Features/Features'
import Welcome from '../components/Home/Welcome/Welcome'

const apiUrl = process.env.REACT_APP_API_URL;

export default function Home() {

  const dispatch = useDispatch();

	useEffect( () => {

		getRecentProducts()

	}, [])

	const getRecentProducts = async () => {

		const allRecentProducts = await get(`${apiUrl}/api/recentproducts`);

		console.log('allRecentProducts')
		console.log(allRecentProducts)
			
		if( allRecentProducts.success ) {
			dispatch(setRecentProducts(allRecentProducts.products));
		}

	}

	return (
		<div style={{paddingTop: '100px' }}>
			<Hero />
			<Welcome />
			<HeroSupport />
			<FeaturedCollection />
			<NewArrivals />
			<Testimonial />
			<Features />
		</div>
	)
}
