import React from 'react'

import './input.scss'

export default function Input({ val, setter, name, type, plcHolder, err, cols, rows }) {

  const inputTypes = ['text','number','tel','password']

  const isAmongINputs = () => inputTypes.includes(type)

  return (
    <>
      <div className="input-form">
        
        <label htmlFor="name">{name}:</label>

        {
          isAmongINputs() &&
            <input
              type={type}
              name={name}
              id={name}
              value={val}
              placeholder={ plcHolder ? plcHolder : name }
              onChange={ (e) => setter(e.target.value) }
            />
        }

        {
          type === 'textarea' &&
            <textarea 
              name={name} 
              id={name} 
              cols={ cols ? cols : 30 } 
              rows={ rows ? rows : 5 }
              value={val}
              placeholder={ plcHolder ? plcHolder : name }
              onChange={ (e) => setter(e.target.value) }
            >
            </textarea>
        }

      </div>

      {
        err && err.length &&
          <p className="err">
            {err}
          </p>
      }
    </>
  )
}
