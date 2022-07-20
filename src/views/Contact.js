import React from 'react'

import Hero from '../components/Contact/Hero'
import ReachOut from '../components/Contact/ReachOut'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
export default function Contact() {
	return (
		<div className="view-wrapper" >

			<Hero />

			<ReachOut />

		</div>
	)
}
