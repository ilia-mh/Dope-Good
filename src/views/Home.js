import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import HeroSupport from '../components/Home/HeroSupport/HeroSupport'
import FeaturedCollection from '../components/Home/FeaturedCollection/FeaturedCollection'
import NewArrivals from '../components/Home/NewArrivals/NewArrivals'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import Features from '../components/Home/Features/Features'
import Welcome from '../components/Home/Welcome/Welcome'

export default function Home() {
	return (
		<div>
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
