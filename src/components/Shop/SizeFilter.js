import React,{ useState } from 'react'
import { useDispatch } from "react-redux";

import { changeProductsFilterOptions } from "../../store/Reducer/reducer";

export default function SizeFilter() {

	const dispatch = useDispatch()

	const [sizes,setSizes] = useState([])

	const allSizes = ['s','m','l','xl','xxl']

	const changeSizeFilters = (size) => {

		if( sizes.includes(size) ) setSizes( sizes.filter( oldSize => oldSize !== size ))
		else setSizes([ ...sizes, size ])

		dispatch( changeProductsFilterOptions({
			target: 'size',
			value: size
		}))
	}

	return (
		<div className="size--filter">
			<h4 className="subtitle">size</h4>

			<div className="widget-size-form d-flex mb-0">

				{ allSizes.map( size => 
					<div 
						className={`input-radio size-option`} 
						key={size}
					>
						<div className={`label-radio ${ sizes.includes(size) ? 'active' : '' }`} onClick={ (e) => changeSizeFilters(size) }>
							<span className="radio-indicator"></span>
							<span className="radio-content">{size}</span>
						</div>
					</div>
				)}

			</div>
		</div>
	)
}
