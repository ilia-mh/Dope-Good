import React,{ useState, useEffect, useCallback } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function NewSlider({ children, showSlides, resposniveSlides, autoPlay }) {

  const [visibleSlides,setVisibleSlides] = useState(1)
  const [activeSetting,setActiveSetting] = useState(0)

  useEffect(() => {
    
    if ( resposniveSlides ) {
      determinVisibleSlides()

      window.addEventListener('resize', determinVisibleSlides)
    } else {
      setVisibleSlides(showSlides)
    }
  
    return () => {
      window.removeEventListener('resize', determinVisibleSlides);
    };
  }, []);

  const determinVisibleSlides = () => {

    let activeIdx = 0
    const width = window.innerWidth

    resposniveSlides.forEach( (val,idx) => {
      if( width < val.breakpoint) activeIdx = idx
    })

    setActiveSetting(activeIdx)
  }

  const getSliderVisibleSlides = useCallback(() => {

    return resposniveSlides ?
      resposniveSlides[activeSetting].settings['slidesToShow']
    :
      visibleSlides

  }, [activeSetting])
  
  return (

     <CarouselProvider
      naturalSlideWidth={100}
      totalSlides={children.length}
      visibleSlides={getSliderVisibleSlides()}
      isPlaying={autoPlay || false}
      lockOnWindowScroll={true}
      infinite={true}
      isIntrinsicHeight={true}
    >
       <Slider
        moveThreshold={0.1}
       >
         {
           children.map( (child,idx) => <Slide index={idx} key={idx}>{child}</Slide>)
         }
       </Slider>
    </CarouselProvider>
  );
}
