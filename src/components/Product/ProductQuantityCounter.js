import React from "react";

export default function ProductQuantityCounter( props ) {

	const { productQt, decreaseQuantity, increaseQuantity } = props

  return (
    <div className="product-quantity">
      <input
        className="minus"
        type="button"
        value="-"
        onClick={decreaseQuantity}
      />
      <input
        type="text"
        id="pro1-qunt"
        value={productQt}
        className="qty"
        readOnly={true}
      />
      <input
        className="plus"
        type="button"
        value="+"
        onClick={increaseQuantity}
      />
    </div>
  );
}
