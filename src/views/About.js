import React from 'react'

import Hero from '../components/About/Hero'
import Gallery from '../components/About/Gallery'
import Info from '../components/About/Info'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger)

export default function About() {
	return (
		<div className="view-wrapper" >

			<Helmet>
				<title>About DopeGood</title>
				<meta name="description" 
				content="Since our online store was launched, we have thrilled interior designers and home decor enthusiasts all across the country and around the world." />
      </Helmet>

			<Hero />

			<Gallery />

			<Info />

		</div>
	)
}
