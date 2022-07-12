import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";

import './hero.scss'

export default function Hero() {

  const [screenSize, setScreenSize] = useState(window.innerWidth > 768 ? 'lg' : 'sm' || 'sm')

  useEffect(() => {
    
    gsap.to('.contact-hero-img img', {
      y: '-8%',
      scrollTrigger: {
        id: 'contactHeroParrallex',
        start: 'top bottom',
        trigger: '.contact-hero-img',
        scrub: true
      }
    })

    window.addEventListener( 'resize', changeContactImg)
  
    return () => {
      ScrollTrigger.getById('contactHeroParrallex')?.kill()
      window.removeEventListener( 'resize', changeContactImg)
    }
  }, [screenSize,setScreenSize])

  const changeContactImg = () => {
    if( window.innerWidth <= 768 && screenSize === 'lg' ) setScreenSize('sm')
    else if( window.innerWidth > 768 && screenSize === 'sm' ) setScreenSize('lg')
  }
  
  return (
    <section
      className="contact-page-hero"
    >
      <div className="page-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-hero-img">
        <img src={ screenSize === 'lg' ? 'contact-hero.jpg' : 'contact-hero-mob.jpg' } 
        alt="contact-us" />
      </div>
      
    </section>
  );
}
