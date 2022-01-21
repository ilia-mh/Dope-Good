import React from "react";
import { Link } from "react-router-dom";

export default function HoverCart(props) {

  const {
    showProductQuickView,
    addProductToFavorites,
    favoritted,
  } = props;

  const { _id, price, options, name } = props.product;


  return (
    <>
      <div className="category--action-icons">
        <button
          className="product-quick-view"
          onClick={() => showProductQuickView()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        <button
          className="product-favorite"
          onClick={() => addProductToFavorites()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${favoritted ? "active" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="category--hover-info">
        <div className="category--title">
          <h3>
            <Link
              to={`/product/${_id}`}
              target="_blank"
            >
              {name}
            </Link>
          </h3>
        </div>

        <div className="category--price">
          <span>$ {price}.00</span>
        </div>
      </div>

      {options.color && (
        <div className="category--colors">
          {options.color.map((color, idx) => (
            <div
              key={idx}
              className="product-color-options"
              style={{ backgroundColor: color.code }}
            ></div>
          ))}
        </div>
      )}
    </>
  );
}
