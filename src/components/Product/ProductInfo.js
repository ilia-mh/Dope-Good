import React, { useState, useEffect } from "react";
import { addToCart, toggleProductFavorite } from "../../store/Reducer/reducer";
import { post } from "../../utils/fetch";
import { toast } from "react-toastify";

import "./productInfo.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductQuantityCounter from "../Product/ProductQuantityCounter";
import ProductDescTabs from "./ProductDescTabs";
import ProductRating from "./ProductRating";
import ProductOptions from "./ProductOptions";

const apiUrl = process.env.REACT_APP_API_URL;

export default function ProductInfo() {
  const [productQt, setProductQt] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const user = useSelector((state) => state.shop.user);
  const product = useSelector((state) => state.shop.singleProduct);

  const dispatch = useDispatch();

  const {
    _id,
    name,
    price,
    rate,
    options,
    reviews,
    infoGuide,
    photos,
    shipping: shippingGuide,
    return: returnGuide,
    sku,
    stock,
    favoritted,
  } = product;

  // const dispatch = useDispatch();

  useEffect(() => {
    if (options) {
      if (!selectedColor) {
        setSelectedColor(options.color[0].name);
      }

      if (!selectedSize) {
        setSelectedSize(options.size[0].name);
      }
    }
  }, [options]);

  const increaseQuantity = () => {
    if (stock > productQt) setProductQt(productQt + 1);
  };

  const decreaseQuantity = () => {
    if (productQt > 1) setProductQt(productQt - 1);
  };

  const addToCard = () => {
    if (!_id) return;

    const newProduct = {
      _id,
      name,
      img: photos[0],
      price,
      q: productQt,
      options: {
        color: selectedColor,
        size: selectedSize,
      },
    };

    dispatch(addToCart(newProduct));
  };

  const addProductToFavorites = async () => {
    if (!user) {
      toast.error("You must Login to be able to do that!");
    } else {
      const sendToggleFavorite = await post(`${apiUrl}/api/product/fav`, {
        product_id: _id,
      });

      if (!sendToggleFavorite.success) {
        toast.error("Some Error Occured with your action");
      } else {
        toast.success("Product Added to your favorites");
        dispatch(toggleProductFavorite(_id));
      }
    }
  };

  return _id ? (
    <div className="col-sm-12 col-md-12 col-lg-5 col-content product-info-side">
      {/* <div className="mb-30">
        <ol className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="breadcrumb-arrow">
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </li>

          <li>
            <Link to="/collections/furniture">Furniture</Link>
          </li>

          <li className="breadcrumb-arrow">
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </li>

          <li className="active">Sofas</li>
        </ol>
      </div> */}

      <div className="product--title">
        <h3>{name}</h3>
      </div>

      <ProductRating rate={rate} />

      <div className="product--review">
        {reviews.length || 0} Customer Review
      </div>
      {/* - .product-review end  */}

      <div className="product--price">$ {price.toFixed(2)}</div>
      {/* .product-price end  */}

      <ProductDescTabs
        returnGuide={returnGuide}
        infoGuide={infoGuide}
        shippingGuide={shippingGuide}
      />

      {/* .product-desc-tabs end  */}
      <div className="product--meta">

        <ul className="product--meta-info list-unstyled">
          <li>
            Availability:
            <span>{stock > 3 ? "In stock" : stock}</span>
          </li>
          <li>
            SKU:<span>{sku}</span>
          </li>
        </ul>

        <div
          className="product--meta-select product--meta-select2 select--color2"
          style={{ borderBottom: "none" }}
        >
          <div className="row" style={{ marginLeft: 0 }}>

            {
              options && options.color && (
                <ProductOptions
                  options={options.color}
                  fullSize={true}
                  changeOption={setSelectedColor}
                  selectedOption={selectedColor}
                />
              )
            }

            {
              options && options.size.length > 1 && (
                <ProductOptions
                  options={options.size}
                  fullSize={true}
                  changeOption={setSelectedSize}
                  selectedOption={selectedSize}
                />
              )
            }

          </div>
        </div>
        {/* .product-meta-select end  */}

        <div className="product--meta-action">
          
          <div className="select-order">
            <ProductQuantityCounter
              productQt={productQt}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          </div>

          <button
            className="btn btn--primary btn--rounded add-to-card-btn"
            onClick={addToCard}
          >
            ADD TO CART
          </button>

          <button className="fav" onClick={addProductToFavorites}>
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
      </div>
    </div>
  ) : (
    <div></div>
  );
}
