import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";

import PriceRange from './PriceRange'
// import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'

import './filters.scss'

export default function Filters() {

	let { cat: catParam, subcat: subcatParam } = useParams();
	const history = useHistory()

  const categories = useSelector((state) => state.shop.categories);


	const [activeCat,setActiveCat] = useState(0)

	const changeActiveCat = (idx,e) => {

		if( activeCat !== idx ) {
			setActiveCat(idx)
		}
		else {
			e.preventDefault()
			setActiveCat(-1)
			console.log('pushing to history')
			history.push('/shop')
		}
		
	}

	useEffect( () => {

		if( catParam ) {
			const activeIdx = categories.findIndex( cat => cat.name.toLowerCase() === catParam )
			console.log('activeIdx')
			console.log(activeIdx)
			setActiveCat(activeIdx)
		}

	},[catParam,subcatParam,categories])

  return (
    <div className="col-sm-12 col-md-12 col-lg-3 filters-wrapper">
      <div className="sidebar cat-sidebar">

        <div className="widget widget-categories2">
          <div className="widget--title">
            <h3>categories</h3>
          </div>
          <div className="widget--content">
            <ul className="main--list list-unstyled mb-0">

							{
								categories.map( (cat,idx) => {

									const { name, count, _id, subCategories } = cat

									return	<li key={_id} className={ activeCat === idx ? `active` : ''}>

										<Link to={`/shop/${name}`} onClick={ (e) => changeActiveCat(idx,e) } className={ catParam === name ? 'active-cat' : ''} >
											{ name } <span>({ count })</span>
										</Link>

										{ subCategories.length ?
											<ul className="inner--list list-unstyled mb-0">
												{ subCategories.map( subCat => {

													const { name: subName, _id: sub_id, count: subCount } = subCat

													return <li key={sub_id} >
														<Link to={`/shop/${name}/${subName}`} className={ subcatParam === subName ? 'active-cat' : ''} >
															{ subName }<span>{ subCount }</span>
														</Link>
													</li>
												})}
											</ul>
											:
											''
										}
									</li>
	
								})
							}
                          
						</ul>
          </div>
        </div>
        {/* .widget-categories end  */}

        <div className="widget widget-filter">

          <div className="widget--title">
            <h3>Filter By</h3>
          </div>
          
					<div className="widget--content">

						{/* Price Filter */}
            <PriceRange />

						{/* Color Filter */}
						<ColorFilter />


          </div>
        
				</div>
      </div>
    </div>
  );
}
