import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.scss'

import { get } from '../../../utils/fetch'

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function Search({ toggle, showSearch }) {

	const [ search, setSearch ] = useState('')
	const [ products, setProducts ] = useState([])

	const bgToggle = () => {
		toggle()
	}

	const searchChanged = (e) => {

		const value = e.target.value

		setSearch(value)

		setTimeout( async () => {

			if( !value ) {
				if( products.length ) setProducts([])
				return
			}
			
			const searchResult = await getSearchResult(value)
			console.log('searchResults')
			console.log(searchResult)

			setProducts(searchResult.products)

		}, 500)
	}

	const getSearchResult = async (value) => {
		return await get(`${apiUrl}/api/product/search/${value.toLowerCase()}`)
	}

	return (
		<div>

			{ showSearch && <div className="bg-full-cover" onClick={bgToggle}></div> }

			<div className="serach-modal slideUp">
				
				<input type="text" placeholder="Search" onChange={ searchChanged } value={search}/>

				<button className="search-btn">

					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>

				</button>

				{ products && 
					<div className="search-products-modal">
						{ products.map( product => {

							const { photos, name, price, _id } = product

							return (
								<Link className="product-single" key={_id} to={`/product/${_id}`}>

									<div className="product-img">
										<img src={`${apiUrl}/${photos[0]}`} alt={name} />
									</div>

									<div className="product-info">
										<p className="name">{name}</p>
										<span className="price">${price.toFixed(2)}</span>
									</div>

								</Link>
							)
						})}
					</div>
				}
			</div>

		</div>
	)
}
