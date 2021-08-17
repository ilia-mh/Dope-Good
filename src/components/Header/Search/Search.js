import React, { useState } from 'react'
import './search.scss'

export default function Search({ toggle, showSearch }) {

	const [ search, setSearch ] = useState('')

	const bgToggle = () => {
		toggle()
	}

	return (
		<div>

			{ showSearch && <div className="bg-full-cover" onClick={bgToggle}></div> }

			<div className="serach-modal slideUp">
				
				<input type="text" placeholder="Search" onChange={ (e) => setSearch(e.target.value) } value={search}/>

				<button className="search-btn">

					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>

				</button>
			</div>

		</div>
	)
}
