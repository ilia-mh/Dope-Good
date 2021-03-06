import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { gsap } from "gsap";

let TimeOut

export default function Slide({ slideInfo, idx, ActiveSlide }) {

  const movingImgSlide = useRef(null)

  const { img, captionTitle, link, title, coloredTitle } = slideInfo;

  useEffect( () => {
    TimeOut = setTimeout( () => {
      addMouseMoveEvent()
    }, 1000)

    return () => clearTimeout(TimeOut)
  },[])

  const addMouseMoveEvent = () => {

    document.querySelector('.slideshow-main').addEventListener( 'mousemove', (e) => {

      const offSetX = - ( e.pageX / window.innerWidth * 30 )
      const offSetY = - ( e.pageY / window.innerHeight * 30 )

      gsap.to(movingImgSlide.current, { x: `${offSetX}px`, y: `${offSetY}px`, duration: 5, ease: "circ.out" })

    })
    
  }

  const slideTitleAnimate = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      }
    },
    exit: {
      opacity: 0,
      y:0
    },
    
  }

  const slideCaptionAnimate = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: -100
    },
  }

  return (
    <div
      className={`slide-tab slider-${idx}`}
    >
      
      <motion.img 
        ref={movingImgSlide}
        className="moving-img" 
        src={img}
        initial={{ opacity: 0 }}
        animate={{ opacity: ActiveSlide === idx ? 1 : 0 }}
        transition={{ delay: 0.1, duration: 0.5}}
        draggable={false}
        loading={ idx !== 0 ? 'lazy' : 'eager' }
      />

      <motion.div variants={slideTitleAnimate} initial='hidden' 
      animate={ ActiveSlide === idx ? 'visible' : 'hidden' } 
      className="slide-title">
        <h1>{title}</h1>
        <h2>{coloredTitle}</h2>
        <Link className="slide-shop-now" to={link}>shop now</Link>
      </motion.div>

      <motion.div variants={slideCaptionAnimate} initial='hidden' animate={ ActiveSlide === idx ? 'visible' : 'hidden' } exit='exit' className="slide-caption">
        <span className="caption-title">{captionTitle}</span>
      </motion.div>
      
    </div>
  );
}
