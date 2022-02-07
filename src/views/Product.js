import React, { useEffect, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../utils/fetch";
import {
  setSingleProduct,
  changeGettingProduct,
  setRecentProducts,
} from "../store/Reducer/reducer";

// import Hero from "../components/Product/Hero";
// import ProductDetails from "../components/Product/ProductDetails";
// import ProductIntro from "../components/Product/ProductIntro";
// import RecentProducts from "../components/Product/RecentProducts";
// import QuickView from "../components/Shop/QuickView";

import Loading from './Loading'

const Hero = lazy( () => import('../components/Product/Hero') )
const ProductDetails = lazy( () => import('../components/Product/ProductDetails') )
const ProductIntro = lazy( () => import('../components/Product/ProductIntro') )
const RecentProducts = lazy( () => import('../components/Product/RecentProducts') )
const QuickView = lazy( () => import('../components/Shop/QuickView') )

const apiUrl = process.env.REACT_APP_API_URL;

export default function Product() {
  let { id } = useParams();

  const { singleProduct, gettingSingleProduct } = useSelector(
    (state) => state.shop
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!gettingSingleProduct && singleProduct._id !== id) {
      getSingleProduct(id);
    }
  }, [id]);

  const getSingleProduct = async (id) => {
    dispatch(changeGettingProduct());

    const singleProduct = await get(`${apiUrl}/api/product/${id}`);
    const allRecentProducts = await get(`${apiUrl}/api/recentproducts/${id}`);

    if (singleProduct.success) {
      dispatch(setSingleProduct(singleProduct.product));
      dispatch(setRecentProducts(allRecentProducts.products));
    }

    dispatch(changeGettingProduct());
  };

  return (
    <div className="view-wrapper">

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
