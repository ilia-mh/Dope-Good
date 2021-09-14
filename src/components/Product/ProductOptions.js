import React from "react";

export default function ProductOptions({ options, fullSize, changeOption }) {

	console.log(options)

	const convertOptions = (obj) => {

    let arr = [];

    for (let key in obj) {
      arr.push(obj[key]);
    }

    return arr;
  };

	const changeSelectedOption = (e) => {
		changeOption(e.target.value.toLowerCase())
	}

	const wrapperClass = fullSize ? 'col-12 col-sm-12 col-md-12 col-lg-12' : 'col-6 col-sm-6 col-md-6 col-lg-6'

  return (
    <div className={wrapperClass} style={{ paddingLeft: 0 }} >
      <div className="select--box">
        <i className="fa fa-caret-down"></i>
        <select className="form-control" onChange={changeSelectedOption} >
          {convertOptions(options).map((option) => {
            const { name } = option;

            return (
              <option value={name} key={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
