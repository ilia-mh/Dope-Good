import React, { useState } from 'react'
import { motion } from "framer-motion";

import './select.scss'

export default function Select({ items, selectedItem, setSelectedItem }) {

  const [showModal,setShowModal] = useState(false)

  const changeSelectedItem = (name) => {

    if( selectedItem !== name ) {
      setSelectedItem(name.toLowerCase())
      setShowModal(false)
    }

  }

  const optionModalAnimation = {
    hidden: {
      y: -40,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
  }

  return (
    <div className="select-wrapper" onClick={ () => setShowModal(!showModal) }>

      <div className="active-item">
        { selectedItem }

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>

      </div>
      
      <motion.div 
        className={`options-modal ${showModal ? 'active' : ''}`}
        variants={optionModalAnimation}
        initial={'hidden'}
        animate={ showModal ? 'animate' : 'hidden' }
      >

        {
          items.map( options => 
            <div key={options.name} className={`option ${ selectedItem === options.name ? 'active' : '' }`} onClick={ () => changeSelectedItem(options.name) }>
              {options.name}
            </div> 
          )
        }

      </motion.div>

    </div>
  )
}
