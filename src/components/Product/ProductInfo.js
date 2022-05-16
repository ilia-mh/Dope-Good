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
      toast.error("You're not logged in to add the product to favorites.");
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

      <div className="product--title">
        <h3>{name}</h3>
      </div>

      <div className="rate-and-fav">

        <div>

          <ProductRating rate={rate || 5} />

          <div className="product--review">
            { rate || 5 } of { reviews.length || 12 } reviews
          </div>

        </div>

        <div className="product-favorite">

          <button className="fav" onClick={addProductToFavorites}>

            <svg xmlns="http://www.w3.org/2000/svg" width="32.33" height="26.362" viewBox="0 0 32.33 26.362">
              <path id="Path_1" data-name="Path 1" d="M22.875,33.251c-4.18,0-6.831,4.66-7.459,4.66-.549,0-3.092-4.66-7.459-4.66A8.116,8.116,0,0,0,.013,41a9.31,9.31,0,0,0,1.733,5.872c2.175,3.3,11.684,11.245,13.684,11.245,2.043,0,11.466-7.916,13.655-11.245A9.308,9.308,0,0,0,30.819,41a8.116,8.116,0,0,0-7.943-7.746" transform="translate(0.749 -32.501)" fill="none" strokeWidth="2"/>
            </svg>

          </button>
          
        </div>

      </div>
      {/* - .product rate and favotire end  */}

      <div className="price-quantity">

        <div className="product--price">$ {price.toFixed(2)}</div>

        <ProductQuantityCounter
          productQt={productQt}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />

      </div>
      {/* .product-price end  */}

      {/* .product-desc-tabs end  */}
      <div className="product--meta">

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
                  caption="Color"
                  twoInRow={options.size.length > 1 ? true : false}
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
                  caption="Size"
                  twoInRow={options.color.length}
                />
              )
            }

          </div>
        </div>
        {/* .product-meta-select end  */}

        <div className="product--meta-action">

          <button
            className="btn btn--primary btn--rounded add-to-card-btn"
            onClick={addToCard}
          >
            ADD TO CART
          </button>

          {/* <button className="fav" onClick={addProductToFavorites}>
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
          </button> */}
        </div>
      </div>

      <ProductDescTabs
        returnGuide={returnGuide}
        infoGuide={infoGuide}
        shippingGuide={shippingGuide}
      />
    </div>
  ) : (
    <div></div>
  );
}
