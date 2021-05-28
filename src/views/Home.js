import React from 'react'
import Hero from '../components/Hero/Hero'
import HeroSupport from '../components/HeroSupport/HeroSupport'
import FeaturedCollection from '../components/FeaturedCollection/FeaturedCollection'
import NewArrivals from '../components/NewArrivals/NewArrivals'

export default function Home() {
	return (
		<div>
			<Hero />
			<HeroSupport />
			<FeaturedCollection />
			<NewArrivals />
		</div>
	)
}
