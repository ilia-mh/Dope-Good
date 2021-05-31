import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./productInfo.scss";


export default function ProductInfo() {

	const [infoTab, setInfoTab] = useState(0)

	const changeInfoTab = ( idx ) => {
		if( infoTab !== idx ) setInfoTab(idx)
	}

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-content">

      <div className="mb-30">
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
      </div>

      <div className="product--title">
        <h3>Hebes Living Wood Sofa</h3>
      </div>

      {/* .product-title end  */}
      <div className="product--rating">
        <i className="fa fa-star active"></i>
        <i className="fa fa-star active"></i>
        <i className="fa fa-star active"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>

      <div className="product--review">03 Customer Review</div>
      {/* - .product-review end  */}

      <div className="product--price">$ 42.00</div>
      {/* .product-price end  */}

      <div className="product--desc-tabs tabs">

        {/* Nav tabs  */}
        <ul className="nav nav-tabs" role="tablist">
          <li>
            <button 
							className={ infoTab === 0 ? 'active' : '' }
							onClick={ () => changeInfoTab(0) }
						>
              INFO GUIDE
            </button>
          </li>
          <li>
            <button 
							className={ infoTab === 1 ? 'active' : '' } 
							onClick={ () => changeInfoTab(1) }
						>SHIPPING</button>
          </li>
          <li>
            <button 
							className={ infoTab === 2 ? 'active' : '' } 
							onClick={ () => changeInfoTab(2) }
						>RETURN</button>
          </li>
        </ul>

        {/* Tab panes  */}
				<div className="tab-content">

					<div className={`tab-pane fade ${ infoTab === 0 ? 'show active' : '' }`} >
						<div className="product--desc">
							<p>
								Trends, vision dominates a lot of our subconscious of the world
								around us. On top it, pleasing images create a better user
								experience. Rounding up a bunch of specific designs.
							</p>
						</div>
					</div>
					

					<div
						className={`tab-pane fade ${ infoTab === 1 ? 'show active' : '' } `}
					>
						<div className="product--desc">
							<p>
								Sed id interdum urna. Nam ac elit a ante commodo tristique. tum
								vehicula a hendrerit ac nisi. hendrerit ac nisi Lorem ipsum
								dolor sit perdiet nibh vel magna lacinia ultrices. Sed id
								interdum urna.
							</p>
						</div>
					</div>
					

					<div className={`tab-pane fade ${ infoTab === 2 ? 'show active' : '' } `} >
						<div className="product--desc">
							<p>
								Our brand promise is simple: to provide powerful digital
								marketing solutions to small businesses that are looking to
								build success online
							</p>
						</div>
					</div>
					
					
        </div>

        {/* #tab-content end  */}
      </div>

      {/* .product-desc-tabs end  */}
      <div className="product--meta">
        <div className="product--meta-select product--meta-select2 select--color2">
          <span className="title">SELECT COLOR</span>
          <div className="dropdown select--dropdown">
            <a href="/#">
              <div className="color color-1">
                <span>Sage</span>
              </div>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/#" className="color color-1">
                  <span>Sage</span>
                </a>
              </li>
              <li>
                <a href="/#" className="color color-2">
                  <span>Red</span>
                </a>
              </li>
              <li>
                <a href="/#" className="color color-3">
                  <span>Green</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* .product-meta-select end  */}

        <div className="product--meta-select product--meta-select2 select--size2">
          <span className="title">SELECT size</span>
          <div className="dropdown select--dropdown">
            <a href="/#" className="dropdown-toggle">
              <div className="size">
                XL <span>( 120cm x 50cm)</span>
              </div>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="/#" className="size">
                  XL <span>( 120cm x 50cm)</span>
                </a>
              </li>
              <li>
                <a href="/#" className="size">
                  XXL <span>( 130cm x 60cm)</span>
                </a>
              </li>
              <li>
                <a href="/#" className="size">
                  XXXL <span>( 140cm x 70cm)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* .product-meta-select end  */}

        <ul className="product--meta-info list-unstyled">
          <li>
            Availability:<span>In stock</span>
          </li>
          <li>
            SKU:<span>S3456</span>
          </li>
        </ul>
        <div className="product--meta-action">
          <div className="select-order">
            <div className="product-quantity">
              <input className="minus" type="button" defaultValue="-" />
              <input
                type="text"
                id="pro1-qunt"
                defaultValue="2"
                className="qty"
              />
              <input className="plus" type="button" defaultValue="+" />
            </div>
          </div>

          <a href="/#" className="btn btn--primary btn--rounded">
            ADD TO CART
          </a>
          
					<a href="/#" className="product-fav">
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
          </a>
        </div>
      </div>

      {/* <div className="product--share">
        <span className="share--title">share</span>
        <a className="share-facebook" href="/#">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="share-twitter" href="/#">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="share-google-plus" href="/#">
          <i className="fa fa-pinterest-p"></i>
        </a>
        <a className="share-linkedin" href="/#">
          <i className="fa fa-linkedin"></i>
        </a>
      </div> */}
      {/* .product-share end  */}

    </div>
  );
}
