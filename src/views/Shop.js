import React from 'react'
import Hero from '../components/Shop/Hero'
import Filters from '../components/Shop/Filters'
import Products from '../components/Shop/Products'
// import { useParams } from "react-router-dom";

export default function Shop() {

	// let { collection, tag } = useParams();

	return (
		<div>
			<Hero />

			<section id="category" className="category category-1">
        <div className="container-fluid">
          <div className="row">

						<Filters />

						<Products />

					</div>
				</div>
			</section>

		</div>
	)
}
