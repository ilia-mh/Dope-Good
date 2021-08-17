import React, { useEffect } from 'react'
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

	// const [currentPage,setCurrentPage] = useState(0)

	const dispatch = useDispatch();

  useEffect(() => {

    async function fetchProducts() {

			let path = `${apiUrl}/products`

			if( cat ) {

				if( subcat ) path += `/${cat}/${subcat}/0}`
				else path += `/${cat}/0}`

			}

      const allProducts = await get(path);

      dispatch(setAllProducts({ products: allProducts.products, method: 'set' }));
    }

    fetchProducts();

  }, [cat,subcat]);

	// const loadMoreProducts = () => {
	// 	setCurrentPage( currentPage + 1 )
	// }
	
	return (
		<div style={{paddingTop: '100px' }} >
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
