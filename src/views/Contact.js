import React from 'react'

import Hero from '../components/Contact/Hero'
import ReachOut from '../components/Contact/ReachOut'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
	return (
		<div className="view-wrapper" >

			<Helmet>
				<title>Get in touch</title>
				<meta name="description" 
				content="Reach out to us and ask us anything." />
      </Helmet>

			<Hero />

			<ReachOut />

		</div>
	)
}
