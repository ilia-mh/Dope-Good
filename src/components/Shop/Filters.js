import React from "react";

export default function Filters() {
  return (
    <div className="col-sm-12 col-md-12 col-lg-3">
      <div className="sidebar cat-sidebar">
        <div className="widget widget-categories2">
          <div className="widget--title">
            <h3>categories</h3>
          </div>
          <div className="widget--content">
            <ul className="main--list list-unstyled mb-0">
              <li className="active">
                <a href="#">
                  FURNITURE <span>(1214)</span>
                </a>
                <ul className="inner--list list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Chair<span>34</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sofas<span>104</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tables<span>28</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed<span>31</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bathrooms<span>26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bookshelf<span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Accessories<span>129</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  LIGHTING <span>(236)</span>
                </a>
                <ul className="inner--list list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Chair<span>34</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sofas<span>104</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tables<span>28</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed<span>31</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bathrooms<span>26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bookshelf<span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Accessories<span>129</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  ACCESSORIES <span>(312)</span>
                </a>
                <ul className="inner--list list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Chair<span>34</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sofas<span>104</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tables<span>28</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed<span>31</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bathrooms<span>26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bookshelf<span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Accessories<span>129</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  SALE PRODUCTS <span>(28)</span>
                </a>
                <ul className="inner--list list-unstyled mb-0">
                  <li>
                    <a href="#">
                      Chair<span>34</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sofas<span>104</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Tables<span>28</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed<span>31</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bathrooms<span>26</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bookshelf<span>21</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Accessories<span>129</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* .widget-categories end  */}

        <div className="widget widget-filter">

          <div className="widget--title">
            <h3>Filter By</h3>
          </div>
          
					<div className="widget--content">
            <div className="category--filter">
              <h4 className="subtitle mt-0">price</h4>
              <div id="slider-range"></div>
              <p>
                <input type="text" id="amount" readOnly={true} />
              </p>
            </div>
            <div className="size--filter">
              <h4 className="subtitle">size</h4>

              <form className="widget-size-form d-flex mb-0">
                <div className="input-radio">
                  <label className="label-radio">
                    <input type="radio" name="sizeSelect" />
                    <span className="radio-indicator"></span>
                    <span className="radio-content">s</span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio">
                    <input type="radio" name="sizeSelect" />
                    <span className="radio-indicator"></span>
                    <span className="radio-content">M</span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio">
                    <input type="radio" name="sizeSelect" />
                    <span className="radio-indicator"></span>
                    <span className="radio-content">l</span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio">
                    <input type="radio" name="sizeSelect" />
                    <span className="radio-indicator"></span>
                    <span className="radio-content">xl</span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio">
                    <input type="radio" name="sizeSelect" />
                    <span className="radio-indicator"></span>
                    <span className="radio-content">xxl</span>
                  </label>
                </div>
                {/* .input-radio end  */}
              </form>
            </div>

            <div className="color--filter">
              <h4 className="subtitle">color</h4>

              <div className="colors-wrapper">
                <a href="#" className="color-1"></a>
                <a href="#" className="color-2"></a>
                <a href="#" className="color-3"></a>
                <a href="#" className="color-4 active"></a>
                <a href="#" className="color-5"></a>
                <a href="#" className="color-6"></a>
                <a href="#" className="color-7"></a>
                <a href="#" className="color-8"></a>
                <a href="#" className="color-9"></a>
                <a href="#" className="color-10"></a>
                <a href="#" className="color-11"></a>
                <a href="#" className="color-12"></a>
              </div>
              <form className="widget-color-form d-flex flex-wrap mb-0">
                <div className="input-radio">
                  <label className="label-radio color-1">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-2">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-3">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-4">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-5">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-6">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-7">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-8">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-9">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-10">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-11">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
                <div className="input-radio">
                  <label className="label-radio color-12">
                    <input type="radio" name="colorSelect" />
                    <span className="radio-indicator"></span>
                  </label>
                </div>
                {/* .input-radio end  */}
              </form>
            </div>

            <div className="brands--fiter">
              <h4 className="subtitle">brands</h4>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#">
                    Hendrerit<span>34</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Nullam lacinia<span>104</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Magna lacinia <span>28</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Faucibus<span>31</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Duis lacus<span>26</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        
				</div>
        {/* .widget-filter end  */}
      </div>
    </div>
  );
}
