import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './Hero.scss'

export default function Hero() {
  
  const [screenSize, setScreenSize] = useState( window ? ( window.innerWidth > 768 ? 'lg' : 'sm' ) : null )

  useEffect(() => {
    
    gsap.to('.about-hero-img img', {
      y: '-8%',
      scrollTrigger: {
        id: 'aboutHeroParrallex',
        start: 'top bottom',
        trigger: '.about-hero-img',
        scrub: true
      }
    })

    if( screenSize === null ) {
      if( window.innerWidth > 768 ) setScreenSize('lg')
      else setScreenSize('sm')
    }

    window.addEventListener( 'resize', changeAboutImg)
  
    return () => {
      ScrollTrigger.getById('aboutHeroParrallex')?.kill()
      window.removeEventListener( 'resize', changeAboutImg)
    }
  }, [screenSize,setScreenSize])

  const changeAboutImg = () => {
    if( window.innerWidth <= 768 && screenSize === 'lg' ) setScreenSize('sm')
    else if( window.innerWidth > 768 && screenSize === 'sm' ) setScreenSize('lg')
  }

  return (
    <section className="about-hero page-title">

      <div className="page-title">
        <h1>About Us</h1>
      </div>

      <div className="about-hero-img">
        {
          screenSize !== null ? 
            <img src={ screenSize === 'lg' ? 'about-hero-lg.jpg' : 'about-hero-sm.jpg' } 
              alt="about" />
          :
            ''
        }
        
      </div>
      
    </section>
  );
}
