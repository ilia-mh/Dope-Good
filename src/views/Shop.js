import React from 'react'
import Hero from '../components/Shop/Hero'
import Filters from '../components/Shop/Filters'
import Products from '../components/Shop/Products'
import QuickView from '../components/Shop/QuickView'
// import { useParams } from "react-router-dom";

export default function Shop() {
	
	// let { cat, subcat } = useParams();
	
	return (
		<div>
			<Hero />

			<section id="category" className="category category-1">
        <div className="container-fluid">
          <div className="row">

						<Filters />

						<Products />

						<QuickView />

					</div>
				</div>
			</section>

		</div>
	)
}
