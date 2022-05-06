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

  useEffect(() => {
    const started = Date.now()

    if (!gettingSingleProduct && singleProduct._id !== id) {
      setGettingProduct(true)
      getSingleProduct(id);
    }

    const diff = Date.now() - started

    if( !gettingProduct && diff >= 1200 ) {
      setFullyLoaded(true);
    } else if( !gettingProduct ) {
      setTimeout(() => {
        setFullyLoaded(true);
      }, 1225 - diff);
    }
  }, [id,gettingProduct,fullyLoaded]);

  const getSingleProduct = async (id) => {
    dispatch(changeGettingProduct());

    const singleProduct = await get(`${apiUrl}/api/product/${id}`);
    const allRecentProducts = await get(`${apiUrl}/api/recentproducts/${id}`);

    if (singleProduct.success) {
      dispatch(setSingleProduct(singleProduct.product));
      dispatch(setRecentProducts(allRecentProducts.products));
    }

    setGettingProduct(false)
    dispatch(changeGettingProduct());
  };

  return (
    <div className="view-wrapper">

      { isLoading && !fullyLoaded && <Loading />}

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
