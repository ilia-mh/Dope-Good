import React, { useState } from 'react'
import { useDispatch } from "react-redux";

import { changeProductsFilterOptions } from "../../store/Reducer/reducer";

export default function ColorFilter() {

	const dispatch = useDispatch()

	const [colors,setColors] = useState([])

	const allColors = ['white','brown','red','blue','grey','black','pink','yellow']

	const changeColorFilters = (color) => {

		if( colors.includes(color) ) setColors( colors.filter( oldColor => oldColor !== color ))
		else setColors([ ...colors, color ])

		dispatch( changeProductsFilterOptions({
			target: 'color',
			value: color
		}))
	}

	return (
		<div className="color--filter">
		<h4 className="subtitle">color</h4>

		<div className="widget-color-form d-flex flex-wrap mb-0">

			{ 
				allColors.map( (color,idx) => 
					<div className="input-radio color-option" onClick={ () => changeColorFilters(color) } key={idx} >
						<label className={`label-radio color-${idx+1}`}>
							<span className={`radio-indicator ${colors.includes(color) ? 'active' : ''}`}>

								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
								
							</span>
						</label>
					</div>
				)
			}
			
		</div>
	
	</div>

	)
}
