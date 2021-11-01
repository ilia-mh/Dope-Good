import React from "react";

export default function ProductQ({ q, changeCartItemQuantity, idx }) {
  return (
    <div className="product-quantity">
      <input
        className="minus"
        type="button"
        value="-"
        onClick={() => changeCartItemQuantity(idx, -1)}
      />

      <input
        type="text"
        id="pro1-qunt"
        value={q}
        className="qty"
        readOnly={true}
      />

      <input
        className="plus"
        type="button"
        value="+"
        onClick={() => changeCartItemQuantity(idx, 1)}
      />
    </div>
  );
}
