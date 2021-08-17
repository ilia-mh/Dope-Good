import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeProductsFilterOptions } from "../../store/Reducer/reducer";

import { Range } from "react-range";

export default function PriceRange() {

	const dispatch = useDispatch()

	const [price,setPrice] = useState([100,7000])

	const max = 7000
	const min = 0

	const changePrice = (newVal) => {
		setPrice(newVal)
		dispatch( changeProductsFilterOptions({
			target: 'price',
			value: {
				min: price[0],
				max: price[1]
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
                width: "92%",
								margin: '0 auto'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "8px",
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
                height: "32px",
                width: "32px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />

			<div className='range-counter'>

				<span>$ { price[0] }</span>
				<span>$ { price[1] }</span>

			</div>
		</div>
  );
}
