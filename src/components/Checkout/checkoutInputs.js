import React from 'react'

export default function checkoutInputs({ val, setter, err, label, type, name, col = '12' }) {

  const changeInput = (e) => {
    setter(e.target.value)
  }

  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} form-field`} >
      <div className="form-group">
        <label htmlFor={name}>{ label }</label>
        <input value={val} onChange={changeInput} type={type} className="form-control" id={name} />
        <span className="error">{ err }</span>
      </div>
    </div>
  )
}
