import React, { useState } from 'react'
import './search.css'

export default function Search() {

	const [ search, setSearch ] = useState('')
	return (
		<div className="serach-modal slideUp">
			
			<input type="text" placeholder="Search" onChange={ (e) => setSearch(e.target.value) } value={search}/>

			<button className="search-btn">

				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
				</svg>

			</button>
		</div>
	)
}
