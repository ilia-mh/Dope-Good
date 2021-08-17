import React from "react";
import { useSelector } from "react-redux";

import ProductCard from '../Product/ProductCard'
import "./products.scss";

export default function Products() {

  const products = useSelector((state) => state.shop.shownProducts);

  return (
    <div className="col-sm-12 col-md-12 col-lg-9 products-wrap">
      <div className="row">
        {products &&
          products.map((product) => <ProductCard product={product} key={product._id} /> )}
      </div>
    </div>
  );
}
