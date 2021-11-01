import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../utils/fetch";
import {
  setSingleProduct,
  changeGettingProduct,
  setRecentProducts,
} from "../store/Reducer/reducer";

import Hero from "../components/Product/Hero";
import ProductDetails from "../components/Product/ProductDetails";
import ProductIntro from "../components/Product/ProductIntro";
import RecentProducts from "../components/Product/RecentProducts";
import QuickView from "../components/Shop/QuickView";

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
  }, []);

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
    <div style={{ paddingTop: "150px" }}>
      <Hero />

      <ProductIntro />
      
      <ProductDetails />

      <RecentProducts />

      <QuickView />
    </div>
  );
}
