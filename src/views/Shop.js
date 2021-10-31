import React, { useEffect, useState } from 'react'
import Hero from '../components/Shop/Hero'
import Filters from '../components/Shop/Filters'
import Products from '../components/Shop/Products'
import QuickView from '../components/Shop/QuickView'

import { useDispatch } from "react-redux";
import { setAllProducts } from "../store/Reducer/reducer";
import { get } from "../utils/fetch";

import { useParams } from "react-router-dom";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function Shop() {
	
	let { cat, subcat } = useParams();

	const [currentPage,setCurrentPage] = useState(0)
	const [pageEnd,setPageEnd] = useState(false)

	const dispatch = useDispatch();

  useEffect(() => {

		setPageEnd(false)

    async function fetchProducts() {

			let path = `${apiUrl}/products/`

			if( cat ) {

				if( subcat ) path += `${cat}/${subcat}/${currentPage}`
				else path += `${cat}/${currentPage}`

			} else path += currentPage

      const allProducts = await get(path);

			if( allProducts.products && allProducts.products.length < 12 ) setPageEnd(true)

      dispatch(setAllProducts({ products: allProducts.products }));
    }

    fetchProducts();

  }, [cat,subcat,currentPage]);
	
	return (
		<div style={{paddingTop: '100px', width: '100%'}} >
			<Hero />

			<section id="category" className="category category-1">
        <div className="container-fluid">
          <div className="row">

						<Filters />

						<Products setCurrentPage={setCurrentPage} currentPage={currentPage} pageEnd={pageEnd} />

						<QuickView />

					</div>
				</div>
			</section>

		</div>
	)
}
