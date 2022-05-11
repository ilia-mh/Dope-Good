import React from "react";
import Select from "../Select/Select";

import './ProductOptions.scss'

export default function ProductOptions({ options, fullSize, changeOption, selectedOption, caption }) {

	const convertOptions = (obj) => {

    if( Array.isArray(obj) ) return obj

    let arr = [];

    for (let key in obj) {
      arr.push(obj[key]);
    }

    return arr;
  };

	const wrapperClass = fullSize ? 'options-selector col-12 col-sm-12 col-md-6 col-lg-6' : 'options-selector col-6 col-sm-6 col-md-6 col-lg-6'

  return (
    <div className={wrapperClass} style={{ paddingLeft: 0 }} >

      {
        caption && <p>{caption}:</p>
      }
      
      <Select items={convertOptions(options)} setSelectedItem={changeOption} selectedItem={selectedOption} />

    </div>
  );
}
