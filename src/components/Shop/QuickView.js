import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyProductQuickView, addToCart, toggleProductFavorite } from "../../store/Reducer/reducer";

import { post } from "../../utils/fetch";
import { toast } from "react-toastify";

import SwiperSlider from "../Slider/SwiperSlider";

import ProductQuantityCounter from "../Product/ProductQuantityCounter";
import ProductDescTabs from "../Product/ProductDescTabs";
import ProductRating from "../Product/ProductRating";
import ProductOptions from "../Product/ProductOptions";

import "./quickView.scss";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export default function QuickView() {
  
  const user = useSelector((state) => state.shop.user);
  const product = useSelector((state) => state.shop.quickViewProduct);
  const dispatch = useDispatch();

  const [productQt, setProductQt] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const {
    name,
    price,
    photos,
    rate,
    reviews,
    infoGuide,
    shipping: shippingGuide,
    options,
    return: returnGuide,
    sku,
    stock,
    _id,
  } = product;

  const hideProductQuickView = () => {
    setProductQt(1);
    dispatch(emptyProductQuickView());
  };

  const increaseQuantity = () => {
    if (stock > productQt) setProductQt(productQt + 1);
  };

  const decreaseQuantity = () => {
    if (productQt > 1) setProductQt(productQt - 1);
  };

  useEffect(() => {
    if (options) {
      const { color, size } = options;

      if (color) {
        setSelectedColor(color[0].name);
      }

      if (size) {
        setSelectedSize(size[0].name);
      }
    }

    const bodyClass = document.documentElement.classList;

    if (_id) {
      bodyClass.add("no-scroll");
    } else {
      bodyClass.remove("no-scroll");
    }
  }, [product]);

  const addToCard = (e) => {
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

    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
  };

  const slidePhotos = () => photos.slice(1);

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
    <div
      className={`modal model-bg-light fade product-popup modal-fullscreen ${
        _id ? "show" : ""
      }`}
      id="product-popup"
      style={{ display: _id ? "flex" : "none", paddingRight: "17px" }}
    >
      {<div className="bg-full-cover" onClick={hideProductQuickView}></div>}

      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              onClick={hideProductQuickView}
            >
              <span>&times;</span>
            </button>

            <div className="product-detalis product-detalis-3 product-detalis-10 pt-0 pb-0">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="products-gallery-carousel">
                    <div className="owl-carousel products-slider">
                      <SwiperSlider
                        thumbs={slidePhotos().map(
                          (photo) => `${apiUrl}/${_id}/${photo}`
                        )}
                        spaceBetween={60}
                        thumbLoc={'bottom'}
                      >
                        {slidePhotos().map((photo) => (
                          <div className="product-img" key="photo">
                            <img
                              src={`${apiUrl}/${_id}/${photo}`}
                              alt="product"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </SwiperSlider>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="product--title">
                    <h3>{name}</h3>
                  </div>

                  <div className="rate-and-fav">
                    <div>
                      <ProductRating rate={rate || 5} />

                      <div className="product--review">
                        {rate || 5} of {reviews.length || 12} reviews
                      </div>
                    </div>

                    <div className="product-favorite">
                      <button className="fav" onClick={addProductToFavorites}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32.33"
                          height="26.362"
                          viewBox="0 0 32.33 26.362"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M22.875,33.251c-4.18,0-6.831,4.66-7.459,4.66-.549,0-3.092-4.66-7.459-4.66A8.116,8.116,0,0,0,.013,41a9.31,9.31,0,0,0,1.733,5.872c2.175,3.3,11.684,11.245,13.684,11.245,2.043,0,11.466-7.916,13.655-11.245A9.308,9.308,0,0,0,30.819,41a8.116,8.116,0,0,0-7.943-7.746"
                            transform="translate(0.749 -32.501)"
                            fill="none"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* - .product-review end  */}

                  <div className="price-quantity">
                    <div className="product--price">$ {price.toFixed(2)}</div>

                    <ProductQuantityCounter
                      productQt={productQt}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                    />
                  </div>
                  {/* .product-price end  */}

                  <div className="product--meta">
                    {/* .product-meta-info end  */}
                    <div className="product--meta-select3">
                      <form className="mb-30">
                        <div
                          className="row"
                          style={{
                            justifyContent: "space-between",
                            display: "flex",
                          }}
                        >
                          {options && options.color && (
                            <ProductOptions
                              options={options.color}
                              changeOption={setSelectedColor}
                              selectedOption={selectedColor}
                            />
                          )}

                          {options &&
                            options.size &&
                            options.size.length > 1 && (
                              <ProductOptions
                                options={options.size}
                                changeOption={setSelectedSize}
                                selectedOption={selectedSize}
                              />
                            )}
                        </div>
                      </form>
                    </div>

                    <div className="product--meta-action clearfix mb-0">
                      <div className="sm-mb-0 mb-40">
                        <button
                          className="btn btn--primary btn--rounded add-to-card-btn"
                          onClick={(e) => addToCard(e)}
                          onBlur={(e) =>
                            (e.currentTarget.style.backgroundColor = "#F26C4F")
                          }
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#252525")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#F26C4F")
                          }
                        >
                          ADD TO CART
                        </button>
                      </div>

                      {/* .product-share end  */}
                    </div>
                  </div>

                  <ProductDescTabs
                    returnGuide={returnGuide}
                    infoGuide={infoGuide}
                    shippingGuide={shippingGuide}
                  />
                </div>
                {/* .col-lg-6 end  */}
              </div>
              {/* .row end  */}
            </div>
            {/* .modal-body end  */}
          </div>
        </div>
        {/* .modal-content end  */}
      </div>
      {/* .modal-dialog end  */}
    </div>
  ) : (
    <div className="empty-quick-view"></div>
  );
}
