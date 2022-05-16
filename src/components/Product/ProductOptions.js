import React from "react";
import Select from "../Select/Select";

import './ProductOptions.scss'

export default function ProductOptions({ options, fullSize, changeOption, selectedOption, caption, twoInRow = false }) {

	const convertOptions = (obj) => {

    if( Array.isArray(obj) ) return obj

    let arr = [];

    for (let key in obj) {
      arr.push(obj[key]);
    }

    return arr;
  };

  const col = twoInRow ? '5' : '12'

	const wrapperClass = fullSize ? `options-selector col-12 col-sm-12 col-md-${col} col-lg-${col}` : `options-selector col-6 col-sm-6 col-md-${col} col-lg-${col}`

  return (
    <div className={wrapperClass} style={{ paddingLeft: 0 }} >

      {
        caption && <p>{caption}:</p>
      }
      
      <Select items={convertOptions(options)} setSelectedItem={changeOption} selectedItem={selectedOption} />

    </div>
  );
}
