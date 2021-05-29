import React from 'react'
import Hero from '../components/Shop/Hero'
import Filters from '../components/Shop/Filters'
import Products from '../components/Shop/Products'

export default function Shop() {
	return (
		<div>
			<Hero />

			<section id="category" class="category category-1">
        <div class="container-fluid">
          <div class="row">

						<Filters />

						<Products />

					</div>
				</div>
			</section>

		</div>
	)
}
