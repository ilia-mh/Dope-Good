import React from "react";

export default function ProductQuantityCounter( props ) {

	const { productQt, decreaseQuantity, increaseQuantity } = props

  return (
    <div className="product-quantity">

      <button className="dec-q" onClick={decreaseQuantity}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20.471" height="3.412" viewBox="0 0 20.471 3.412">
          <rect id="Minus" width="20.471" height="3.412" rx="1.706" fill="#727273"/>
        </svg>
      </button>

      <span className="cur-q">{productQt}</span>

      <button className="inc-q" onClick={increaseQuantity}>
        <svg id="Group_8" data-name="Group 8" xmlns="http://www.w3.org/2000/svg" width="20.471" height="20.471" viewBox="0 0 20.471 20.471">
          <rect id="Minus" width="20.471" height="3.412" rx="1.706" transform="translate(0 8.53)" fill="#727273"/>
          <rect id="Minus-2" data-name="Minus" width="20.471" height="3.412" rx="1.706" transform="translate(11.941 0) rotate(90)" fill="#727273"/>
        </svg>
      </button>

    </div>
  );
}
