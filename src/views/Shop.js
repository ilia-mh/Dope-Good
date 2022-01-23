import React, { useEffect, useState, lazy, Suspense } from 'react'
import Hero from '../components/Shop/Hero'
import Loading from './Loading'

// import Filters from '../components/Shop/Filters'
// import Products from '../components/Shop/Products'
// import QuickView from '../components/Shop/QuickView'

import { useSelector, useDispatch } from "react-redux";
import { setAllProducts } from "../store/Reducer/reducer";
import { get } from "../utils/fetch";

import { useParams } from "react-router-dom";

const Filters = lazy( () => import('../components/Shop/Filters'))
const Products = lazy( () => import('../components/Shop/Products'))
const QuickView = lazy( () => import('../components/Shop/QuickView'))

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export default function Shop() {
	
	let { cat, subcat } = useParams();

	const allProducts = useSelector((state) => state.shop.allProducts);
  const categories = useSelector((state) => state.shop.categories);

	const [lastCat,setLastCat] = useState('')
	const [lastSubCat,setLastSubCat] = useState('')

	const [currentPage,setCurrentPage] = useState(0)
	const [pageEnd,setPageEnd] = useState(false)

	const dispatch = useDispatch();

  useEffect(() => {

		
		if( cat && lastCat !== cat ) {
			
			if( !lastCat.length ) setLastCat(cat)
			else {
				setCurrentPage(0)
				setLastCat(cat)
			}
			
		} 
		if( subcat && lastSubCat !== subcat ) {
			if( !lastSubCat.length ) setLastSubCat(subcat)
			else {
				setCurrentPage(0)
				setLastSubCat(subcat)
			}
		} 

		setPageEnd(false)

    async function fetchProducts() {

			let path = `${apiUrl}/products/`

			if( cat ) {

				if( subcat ) path += `${cat}/${subcat}/${currentPage}`
				else path += `${cat}/${currentPage}`

			} else path += currentPage

      const allProductsFetch = await get(path);

			if( allProductsFetch.products && allProductsFetch.products.length < 12 ) setPageEnd(true)

      dispatch(setAllProducts({ products: allProductsFetch.products }));
    }

		console.log('shouldFetchMore')
		console.log(shouldFetchMore())
		if( shouldFetchMore() ) fetchProducts();

  }, [cat,subcat,currentPage]);

	const shouldFetchMore = () => {

		if( !allProducts.length ) return true

    if( cat || subcat ) {

      if( subcat ) {
        return findSubCatCount()
      } else {

        const activeCat = categories.filter( ({ name }) => name === cat )[0]

        const existingProducts = allProducts.reduce( (total, { category }) => category.includes(cat) ? total + 1 : total, 0 )

        if( activeCat ) {
          
          return existingProducts < activeCat.count
        }

        return false
        
      }

    } else {
			const totalProducts = categories.length && categories.reduce((total, { count }) => total + count, 0)

      if( allProducts.length < totalProducts ) return true
      else return false
    }
  }

  const findSubCatCount = () => {

    const subCatIdx = categories[0].subCategories.findIndex( ({ name }) => name === subcat )
    const { count } = categories[0].subCategories[subCatIdx]

    const existingProducts = allProducts.reduce( (total, { subCategory }) => subCategory.includes(subcat) ? total++ : total, 0 )

    console.log( existingProducts )

    return existingProducts < count
  }
	
	return (
		<div className="view-wrapper" style={{ width: '100%'}} >
			<Hero />

			<section id="category" className="category category-1">
        <div className="container-fluid">
          <div className="row">

						<Suspense fallback={<Loading/>}>

							<Filters />

							<Products setCurrentPage={setCurrentPage} currentPage={currentPage} pageEnd={pageEnd} />

							<QuickView />

						</Suspense>

					</div>
				</div>
			</section>

		</div>
	)
}
