import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import './hero.scss'

export default function Hero() {

  const [screenSize, setScreenSize] = useState( window ? ( window.innerWidth > 768 ? 'lg' : 'sm' ) : null )

  useEffect(() => {
    
    gsap.to('.shop-hero-img img', {
      y: '-8%',
      scrollTrigger: {
        id: 'shopHeroParrallex',
        start: 'top bottom',
        trigger: '.shop-hero-img',
        scrub: true
      }
    })

    if( screenSize === null ) {
      if( window.innerWidth > 768 ) setScreenSize('lg')
      else setScreenSize('sm')
    }

    window.addEventListener( 'resize', changeShopImg)
  
    return () => {
      ScrollTrigger.getById('shopHeroParrallex')?.kill()
      window.removeEventListener( 'resize', changeShopImg)
    }
  }, [screenSize,setScreenSize])

  const changeShopImg = () => {
    if( window.innerWidth <= 768 && screenSize === 'lg' ) setScreenSize('sm')
    else if( window.innerWidth > 768 && screenSize === 'sm' ) setScreenSize('lg')
  }

	return (
		<section className="shop-hero" >

      <div className="page-title">
        <h1>Furniture for every need</h1>
      </div>

      <div className="shop-hero-img">
        {
          screenSize !== null ? 
            <img src={ screenSize === 'lg' ? 'shop-hero-lg.jpg' : 'shop-hero-sm.jpg' } 
              alt="shop" />
          :
            ''
        }
        
      </div>

    </section>
	)
}
