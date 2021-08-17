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

    console.log("allRecentProducts");
    console.log(allRecentProducts);

    if (singleProduct.success) {
      dispatch(setSingleProduct(singleProduct.product));
      dispatch(setRecentProducts(allRecentProducts.products));
    }

    dispatch(changeGettingProduct());
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      <Hero />

      <ProductDetails />

      <section
        id="products-carousel"
        className="products-carousel related-products pt-0 pb-80"
      >
        <div className="container-fluid pr-40 pl-40">
          <hr className="mb-80" />

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="heading text-center mb-50">
                <h2 className="heading--title">Recent Products</h2>
              </div>
            </div>
            {/* .col-lg-12 end  */}
          </div>
          {/* .row end  */}

      		<RecentProducts />
					
        </div>
      </section>

      <QuickView />
    </div>
  );
}
