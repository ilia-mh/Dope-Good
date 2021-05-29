import React from "react";
import ProductImg1 from "../../assets/images/categories/cat1/1.jpg";
import ProductImg2 from "../../assets/images/categories/cat1/2.jpg";
import ProductImg3 from "../../assets/images/categories/cat1/3.jpg";
import ProductImg4 from "../../assets/images/categories/cat1/4.jpg";
import ProductImg5 from "../../assets/images/categories/cat1/5.jpg";
// import ProductImg6 from '../../assets/images/categories/cat1/6.jpg'
// import ProductImg7 from '../../assets/images/categories/cat1/7.jpg'
// import ProductImg8 from '../../assets/images/categories/cat1/8.jpg'
// import ProductImg9 from '../../assets/images/categories/cat1/9.jpg'
// import ProductImg10 from '../../assets/images/categories/cat1/10.jpg'
// import ProductImg11 from '../../assets/images/categories/cat1/11.jpg'
// import ProductImg12 from '../../assets/images/categories/cat1/12.jpg'
// import ProductImg13 from '../../assets/images/categories/cat1/13.jpg'
// import ProductImg14 from '../../assets/images/categories/cat1/14.jpg'
// import ProductImg15 from '../../assets/images/categories/cat1/15.jpg'

import "./products.scss";

export default function Products() {
  return (
    <div className="products-wrap row row-no-padding mb-60">
      {/* category item #1  */}
      <div className="col-sm-6 col-md-6 col-lg-5ths">
        <div className="category-item">
          <div className="category--img">
            <img src={ProductImg1} alt="category" />
          </div>

          {/* .category-img end  */}
          <div className="category--content">
            <div className="category--title">
              <h3>
                <a href="/#">Hebes Great Chair</a>
              </h3>
            </div>
            {/* .category-title end  */}

            <div className="category--price">
              <span>$ 42.00</span>
            </div>
            {/* .category-price end  */}

            <div className="category--hover">
              <div className="category--action">
                <a
                  href="/#"
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
                </a>

                <a href="/#" className="product-quick-view">
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
                </a>

                <a href="/#" className="product-favorite">
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
            {/* .category-hover end  */}
          </div>
          {/* .category-content end  */}
        </div>
      </div>
      {/* .category-item end  */}

      {/* category item #2  */}
      <div className="col-sm-6 col-md-6 col-lg-5ths">
        <div className="category-item">
          <div className="category--img">
            <img src={ProductImg2} alt="category" />
          </div>
          {/* .category-img end  */}
          <div className="category--content">
            <div className="category--title">
              <h3>
                <a href="/#">Hebes Great Chair</a>
              </h3>
            </div>
            {/* .category-title end  */}
            <div className="category--price">
              <span>$ 42.00</span>
            </div>
            {/* .category-price end  */}
            <div className="category--hover">
              <div className="category--action">
                <a href="/#" className="btn btn--primary btn--rounded">
                  <i className="icon-bag"></i>ADD TO CART
                </a>
                <a href="/#">
                  <i className="ti-search"></i>
                </a>
                <a href="/#">
                  <i className="ti-heart"></i>
                </a>
                <a href="/#">
                  <i className="ti-control-shuffle"></i>
                </a>
              </div>
            </div>
            {/* .category-hover end  */}
          </div>
          {/* .category-content end  */}
        </div>
      </div>
      {/* .category-item end  */}

      {/* category item #3  */}
      <div className="col-sm-6 col-md-6 col-lg-5ths">
        <div className="category-item">
          <div className="category--img">
            <img src={ProductImg3} alt="category" />
          </div>
          {/* .category-img end  */}
          <div className="category--content">
            <div className="category--title">
              <h3>
                <a href="/#">Hebes Amazing Chair</a>
              </h3>
            </div>
            {/* .category-title end  */}
            <div className="category--price">
              <span>$ 42.00</span>
            </div>
            {/* .category-price end  */}
            <div className="category--hover">
              <div className="category--action">
                <a href="/#" className="btn btn--primary btn--rounded">
                  <i className="icon-bag"></i>ADD TO CART
                </a>
                <a href="/#">
                  <i className="ti-search"></i>
                </a>
                <a href="/#">
                  <i className="ti-heart"></i>
                </a>
                <a href="/#">
                  <i className="ti-control-shuffle"></i>
                </a>
              </div>
            </div>
            {/* .category-hover end  */}
          </div>
          {/* .category-content end  */}
        </div>
      </div>
      {/* .category-item end  */}

      {/* category item #4  */}
      <div className="col-sm-6 col-md-6 col-lg-5ths">
        <div className="category-item">
          <div className="category--img">
            <img src={ProductImg4} alt="category" />
            <span className="featured-item">hot</span>
          </div>
          {/* .category-img end  */}
          <div className="category--content">
            <div className="category--title">
              <h3>
                <a href="/#">Hebes Black wood Chair</a>
              </h3>
            </div>
            {/* .category-title end  */}
            <div className="category--price">
              <span>$ 42.00</span>
            </div>
            {/* .category-price end  */}
            <div className="category--hover">
              <div className="category--action">
                <a href="/#" className="btn btn--primary btn--rounded">
                  <i className="icon-bag"></i>ADD TO CART
                </a>
                <a href="/#">
                  <i className="ti-search"></i>
                </a>
                <a href="/#">
                  <i className="ti-heart"></i>
                </a>
                <a href="/#">
                  <i className="ti-control-shuffle"></i>
                </a>
              </div>
            </div>
            {/* .category-hover end  */}
          </div>
          {/* .category-content end  */}
        </div>
      </div>
      {/* .category-item end  */}

      {/* category item #5  */}
      <div class="col-sm-6 col-md-6 col-lg-5ths">
        <div class="category-item">
          <div class="category--img">
            <img src={ProductImg5} alt="category" />
            <span class="featured-item featured-item2">new</span>
          </div>
          {/* .category-img end  */}
          <div class="category--content">
            <div class="category--title">
              <h3>
                <a href="/#">Hebes Great Chair</a>
              </h3>
            </div>
            {/* .category-title end  */}
            <div class="category--price">
              <span>$ 42.00</span>
            </div>
            {/* .category-price end  */}
            <div class="category--hover">
              <div class="category--action">
                <a href="/#" class="btn btn--primary btn--rounded">
                  <i class="icon-bag"></i>ADD TO CART
                </a>
                <a href="/#">
                  <i class="ti-search"></i>
                </a>
                <a href="/#">
                  <i class="ti-heart"></i>
                </a>
                <a href="/#" class="compare">
                  <i class="ti-control-shuffle"></i>
                </a>
              </div>
            </div>
            {/* .category-hover end  */}
          </div>
          {/* .category-content end  */}
        </div>
      </div>
      {/* .category-item end  */}
    </div>
  );
}
