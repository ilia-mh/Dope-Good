import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../utils/fetch";
import {
  setSingleProduct,
  changeGettingProduct,
  setRecentProducts,
} from "../store/Reducer/reducer";

import Loading from "./Loading";

import { Helmet } from "react-helmet";

const Hero = lazy( () => import('../components/Product/Hero') )
const ProductDetails = lazy( () => import('../components/Product/ProductDetails') )
const ProductIntro = lazy( () => import('../components/Product/ProductIntro') )
const RecentProducts = lazy( () => import('../components/Product/RecentProducts') )
const QuickView = lazy( () => import('../components/Shop/QuickView') )

const apiUrl = process.env.REACT_APP_API_URL;

export default function Product({ isLoading }) {

  let { id } = useParams();

  const { singleProduct, gettingSingleProduct } = useSelector(
    (state) => state.shop
  );

  const dispatch = useDispatch();

  const [gettingProduct, setGettingProduct] = useState(false);
  const [fullyLoaded, setFullyLoaded] = useState(false);

  const [productTitle, setProductTitle] = useState('');
  const [productDes, setProductDes] = useState('');

  useEffect(() => {
    const started = Date.now()

    if ( !gettingSingleProduct && singleProduct._id !== id ) {

      setGettingProduct(true)
      getSingleProduct(id);

    } else if ( !productTitle.length && !gettingSingleProduct ) {

      setProductTitle(singleProduct.name)
      setProductDes(shortenText(singleProduct.description))

    }

    const diff = Date.now() - started

    if( !gettingProduct && diff >= 1200 ) {
      setFullyLoaded(true);
    } else if( !gettingProduct ) {
      setTimeout(() => {
        setFullyLoaded(true);
      }, 1225 - diff);
    }
  }, [id,gettingProduct,gettingSingleProduct,fullyLoaded]);

  const getSingleProduct = async (id) => {
    dispatch(changeGettingProduct());

    const singleProductFetched = await get(`${apiUrl}/api/product/${id}`);
    const allRecentProducts = await get(`${apiUrl}/api/recentproducts/${id}`);

    if (singleProductFetched.success) {

      setProductTitle(singleProductFetched.product.name)
      setProductDes(shortenText(singleProductFetched.product.description))

      dispatch(setSingleProduct(singleProductFetched.product));
      dispatch(setRecentProducts(allRecentProducts.products));
    }

    setGettingProduct(false)
    dispatch(changeGettingProduct());
  };

  function shortenText(text,maxLength = 120,withDots = true) {
    const splitted = text.split(' ')
    let shortedStr = ''
  
    while( shortedStr.length < maxLength ) {
      shortedStr += splitted.shift() + ' '
    }
  
    return withDots ? shortedStr + ' ...' : shortedStr
  }

  return (
    <div className="view-wrapper">

      { isLoading && !fullyLoaded && <Loading />}

      <Helmet>
        {
          productTitle &&
            <title>{ productTitle }</title>
        }

        {
          productDes &&
            <meta name="description" 
            content={productDes} />
        }

      </Helmet>

      <Suspense fallback={<div></div>}>

        <Hero />

        <ProductIntro />
        
        <ProductDetails />

        <RecentProducts />

        <QuickView />

      </Suspense>
      
    </div>
  );
}
