import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeProductsFilterOptions } from "../../store/Reducer/reducer";

import { Range } from "react-range";

export default function PriceRange() {

	const dispatch = useDispatch()

	const [price,setPrice] = useState([100,3000])

	const max = 3000
	const min = 100

	const changePrice = (newVal) => {
		setPrice(newVal)
		dispatch( changeProductsFilterOptions({
			target: 'price',
			value: {
				min: newVal[0],
				max: newVal[1]
			}
		}) )
	}

  return (
		<div className="category--filter">
      <h4 className="subtitle mt-0">price</h4>
			<Range
          values={price}
          step={10}
          min={min}
          max={max}
          onChange={changePrice}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "8px",
                width: "100%",
								margin: '0 auto'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "4px",
                  width: "100%",
                  borderRadius: "10px",
                  background: '#ccc',
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#f26c4f",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#f26c4f"
                }}
              />
            </div>
          )}
        />

			<div className='range-counter'>

				<span style={{ color: "#fff" }} >$ { price[0] }</span>
				<span style={{ color: "#fff" }} >$ { price[1] }</span>

			</div>
		</div>
  );
}
