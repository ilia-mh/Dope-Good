import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { changeProductsFilterOptions } from "../../store/Reducer/reducer";

import ProductCard from '../Product/ProductCard/ProductCard'
import "./products.scss";

export default function Products({ setCurrentPage, currentPage, pageEnd }) {

	let { cat, subcat } = useParams();

  const dispatch = useDispatch();

  const [showLoadMore,setShowLoadMore] = useState(false)
  const [firstLoaded,setFirstLoaded] = useState(false)

  const allProducts = useSelector((state) => state.shop.allProducts);
  const shownProducts = useSelector((state) => state.shop.shownProducts);
  const categories = useSelector((state) => state.shop.categories);

  const isThereMoreProduct = () => {

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

  const fetchMoreProducts = () => {
    setCurrentPage( currentPage + 1 )
  }

  useEffect( () => {

    setTimeout(() => {
      setShowLoadMore(true)
    }, 700);

    if( firstLoaded ) {

      if( subcat ){
        dispatch(changeProductsFilterOptions({
          target: 'cat',
          value: [cat,subcat]
        }))
      } else {
        dispatch(changeProductsFilterOptions({
          target: 'cat',
          value: [cat]
        }))
      }

    } else {
      setFirstLoaded(true)
    }

  },[cat,subcat])

  return (
    <div className="col-sm-12 col-md-12 col-lg-9 products-wrap">
      <div className="row">

        {
          shownProducts &&
            shownProducts.map((product) => <Suspense>
              <ProductCard product={product} key={product._id} />
            </Suspense> )
        }

        {
          showLoadMore && !pageEnd && isThereMoreProduct() &&
          <div className="load-more-holder">

            <button className="load-more-products-btn" onClick={fetchMoreProducts} >Load More</button>

          </div>
        }
      </div>
    </div>
  );
}
