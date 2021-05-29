import React from "react";

export default function Filters() {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 category-options">
        <div className="category-num pull-left pull-none-xs">
          <h2>
            <span>135</span>PRODUCTS FOUND
          </h2>
        </div>
        {/* .category-num end  */}

        <div
          className="
                  category-select
                  pull-right
                  text-right text-left-sm
                  pull-none-xs
                "
        >
          <ul className="list-unstyled mb-0">
            <li className="option category--filter-wrapper">
              <span className="option--title">PRICE</span>
              <div className="category--filter">
                <div id="slider-range"></div>
                <p>
                  <input type="text" id="amount" readonly />
                </p>
              </div>
            </li>
            <li className="option sort--options">
              <span className="option--title">Sort by:</span>
              <div className="select-form">
                <i className="fa fa-caret-down"></i>
                <select>
                  <option selected="" value="Default">
                    Name
                  </option>
                  <option value="color">Color</option>
                  <option value="price">Price</option>
                  <option value="branding">Branding</option>
                </select>
              </div>
              <div className="select-form">
                <i className="fa fa-caret-down"></i>
                <select>
                  <option selected="" value="">
                    Categories
                  </option>
                  <option value="">Furniture</option>
                  <option value="">Lightning</option>
                  <option value="">Accessories</option>
                </select>
              </div>
            </li>
            <li className="option">
              <span className="option--title">SHOW</span>
              <ul className="list-unstyled show--num">
                <li>2</li>
                <li>4</li>
                <li>6</li>
              </ul>
            </li>
            <li className="option view--type">
              <a id="switch-list" href="/#" className="">
                <i className="fa fa-th"></i>
              </a>
              <a id="switch-grid" href="/#" className="active">
                <i className="fa fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* .category-options end  */}
    </div>
  );
}
