import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductImg1 from "../../assets/images/categories/cat1/1.jpg";
import { Link } from "react-router-dom";
import { setAllProducts, setProductQuickView, setSingleProduct, changeGettingProduct } from "../../store/Reducer/reducer";
import { get } from "../../utils/fetch";

import "./products.scss";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Products() {

  const products = useSelector((state) => state.shop.shownProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await get(`${apiUrl}/products`);

      dispatch(setAllProducts(allProducts.products));
    }

    if (!products || !products.length) fetchProducts();
  }, []);

	const [productHover,setProductHover] = useState('')

	const productHovered = (id) => {
		setProductHover(id)
	}

	const productHoverOut = (id) => {
		if( productHover.length && productHover === id ) setProductHover('')
	}

	const showProductQuickView = (product) => {
		dispatch( setProductQuickView(product) )
	}

	const goingToSingleProduct = async (id) => {
		console.log(`Sending Fetch request for product with id:${id}`)

		dispatch(changeGettingProduct());

		const singleProduct = await get(`${apiUrl}/product/${id}`);
		console.log(singleProduct)
		
		dispatch(setSingleProduct(singleProduct.products));
		dispatch(changeGettingProduct());

	}

  return (
    <div className="col-sm-12 col-md-12 col-lg-9 products-wrap">
      <div className="row">
        {products &&
          products.map((product) => {
            const { _id, name, price } = product;

            return (
              <div className="col-sm-6 col-md-6 col-lg-5ths" key={_id}>
                <div className="category-item" onMouseOver={ () => productHovered(_id) } onMouseLeave={ () => productHoverOut(_id) }>

                  <div className="category--img">
                    <img src={ProductImg1} alt="category" onClick={ () => goingToSingleProduct(_id) } />
                  </div>

                  {/* .category-img end  */}

                  <div className="category--content">
                    <div className="category--title">
                      <h3>
                        <Link to={`/product/${_id}`} onClick={ () => goingToSingleProduct(_id) } >{name}</Link>
                      </h3>
                    </div>
                    {/* .category-title end  */}

                    <div className="category--price">
                      <span> $ {price}.00</span>
                    </div>
									</div>
                    {/* .category-price end  */}

                    <div className={`category--hover ${ productHover === _id ? 'productHoverIn' : ''}`}>

												{/* ADD TO CART */}
                        <button
                          className="btn btn--primary btn--rounded add-to-cart"
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
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          
                          </svg>
													ADD TO CART
                        </button>

                        <div className="category--action-content">

                          <div className="category--action-icons">

                            <button className="product-quick-view" onClick={ () => showProductQuickView(product) }>

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

                            <button className="product-favorite">

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
																	d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
																/>
															</svg>
                            
														</button>

                          </div>

                          <div className="category--hover-info">
                            <div className="category--title">
                              <h3>
																<Link to={`/product/${_id}`} onClick={ () => goingToSingleProduct(_id) } >{name}</Link>
                              </h3>
                            </div>

                            <div className="category--price">
                              <span>$ {price}.00</span>
                            </div>
                          </div>

                          <div className="category--colors">
                            <a href="#" className="color-1"></a>
                            <a href="#" className="color-2"></a>
                            <a href="#" className="color-3"></a>
                            <a href="#" className="color-4"></a>
                          </div>

                      </div>
                    
										</div>
                    {/* .category-hover end  */}

                  {/* .category-content end  */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
