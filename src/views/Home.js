import React, { useEffect, lazy, Suspense } from 'react'

import { useDispatch } from "react-redux";
import { setRecentProducts } from "../store/Reducer/reducer";
import { get } from "../utils/fetch";

// import Hero from '../components/Home/Hero/Hero'
// import HeroSupport from '../components/Home/HeroSupport/HeroSupport'
// import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection'
// import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
// import Testimonial from '../components/Home/Testimonial/Testimonial'
// import Features from '../components/Home/Features/Features'
// import Welcome from '../components/Home/Welcome/Welcome'
// import QuickView from '../components/Shop/QuickView'

import Loading from './Loading'

const Hero = lazy( () => import('../components/Home/Hero/Hero'))
const HeroSupport = lazy( () => import('../components/Home/HeroSupport/HeroSupport'))
const FeaturedCollection = lazy( () => import('../components/Home/FeaturedCollection/FeaturedCollection'))
const NewArrivals = lazy( () => import('../components/Home/NewArrivals/NewArrivals'))
const Testimonial = lazy( () => import('../components/Home/Testimonial/Testimonial'))
const Features = lazy( () => import('../components/Home/Features/Features'))
const Welcome = lazy( () => import('../components/Home/Welcome/Welcome'))
const QuickView = lazy( () => import('../components/Shop/QuickView'))

const apiUrl = process.env.REACT_APP_API_URL;

export default function Home() {

  const dispatch = useDispatch();

	useEffect( () => {

		getRecentProducts()

	}, [])

	const getRecentProducts = async () => {

		const allRecentProducts = await get(`${apiUrl}/api/recentproducts`);
			
		if( allRecentProducts.success ) {
			dispatch(setRecentProducts(allRecentProducts.products));
		}

	}

	return (
		<div className="view-wrapper" >

				{/* <Loading /> */}
			<Suspense fallback={<div></div>}>

				<Hero />
				<Welcome />
				<HeroSupport />
				<FeaturedCollection />
				<NewArrivals />
				<Testimonial />
				<Features />
				<QuickView />

			</Suspense>
		</div>
	)
}
