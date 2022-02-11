import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import "./select.scss";

export default function Select({
  items,
  selectedItem,
  setSelectedItem,
  isString,
  plcHolder
}) {

  const searchInput = useRef(null);

  const [searchVal, setSearchVal] = useState("");
  const [showModal, setShowModal] = useState(false);

  const changeSelectedItem = (e, name) => {

    e.stopPropagation()

    const newName = isString ? name : name;

    if (selectedItem !== newName) {

      console.log('setting the selected item to newName')
      setSelectedItem(newName);

      if( isString ) {
        setShowModal(false)

        setTimeout(() => {
          setSearchVal('')
        }, 300);
      } else {
      }
    } 
    
    setShowModal(false)

  };

  const searchForOption = (newValue) => {
    if( showModal ) {

      if( !newValue ) setSearchVal(' ');
      else setSearchVal(newValue.trim());
    }
    else setSearchVal('')
  };

  const optionModalAnimation = {
    hidden: {
      y: '-100px',
      opacity: 0,
      display: 'none',
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      display: 'block',
      transition: {
        duration: 0.3,
      },
    },
  };

  const returnItems = () => {

    if ( searchVal.trim() ) {
      
      return items.filter((item) => {

        const uselessWords = ['of','the']

        const re = new RegExp( searchVal, "gi" )

        const splittedCountryName = item.split(' ').map( name => !uselessWords.includes(name) ? name[0].toLowerCase() : '' ).join('')

        return ( item.toLowerCase().search(re) !== -1 || splittedCountryName.includes(searchVal.toLowerCase()) )
      });
    } else {
      return items;
    }
  };

  const ToggleModal = (e) => {

    // e.stopPropagation()
    // e.preventDefault()

    if (!isString) {
      setShowModal(!showModal);
    } else {
      if (!showModal) {
        setShowModal(true);
        searchInput.current.focus();
      } else {
        setShowModal(false)
        searchInput.current.blur();
      }
    }
  };

  const selectBlured = () => {

    setTimeout(() => {
      if( showModal ){
        setShowModal(false);
      }
    }, 200);

  }

  return (
    <div
      className={`select-wrapper ${isString ? "is-string" : ""}`}
      onClick={ (e) => ToggleModal(e)}
      onBlur={ selectBlured }
    >
      { !isString ? (

        <div className="active-item">
          {selectedItem}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      ) 
      : 
      (
        <div className="active-item">

          <input
            type="text"
            value={ showModal ? searchVal : '' }
            onChange={(e) => searchForOption(e.target.value)}
            ref={searchInput}
            placeholder={ selectedItem || plcHolder || '' }
            autoComplete="off"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </div>
      )}

      <motion.div
        className={`options-modal ${showModal ? "active" : ""}`}
        variants={optionModalAnimation}
        initial={"hidden"}
        animate={showModal ? "animate" : "hidden"}
      >
        {
        !isString ?
          <>
            { 
              showModal && (
                <div
                  className="bg-full-cover"
                  onClick={() => setShowModal(false)}
                ></div>
              )
            }
            {
            items.map((options, idx) => (
                <div
                  key={options.name}
                  className={`option ${
                    selectedItem === options.name ? "active" : ""
                  }`}
                  onClick={(e) => changeSelectedItem(e,options.name)}
                >
                  {options.name}
                </div>
              ))
            }
            </>
          : 
            returnItems().map((option) => (
              <div
                key={option}
                className={`option ${selectedItem === option ? "active" : ""}`}
                onClick={(e) => changeSelectedItem(e,option)}
              >
                {option}
              </div>
            ))}
      </motion.div>
    </div>
  );
}
