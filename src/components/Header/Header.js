import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import Search from "./Search/Search";
import BurgerSearch from "./BurgerSearch/BurgerSearch";
import Cart from "./Cart/Cart";
import { Link, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userExists } from "../../store/Reducer/reducer";

import { toast } from "react-toastify";

// images
import Logo from "../../assets/svg/LogoLg.png";

function Header({ history }) {
  const dispatch = useDispatch();

  const { length: cartLength } = useSelector((state) => state.shop.cart);
  const user = useSelector((state) => state.shop.user);

  const [accDropdown, setAccDropdown] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [showMobileNav, setshowMobileNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [activePath, setActivePath] = useState(false);

  const search = useRef(null);
  const burgerSearch = useRef(null);
  const cart = useRef(null);

  const Logout = () => {
    localStorage.removeItem("user");
    dispatch(userExists(false));
    setAccDropdown(false);
    toast.success("You have successfully logged out");
  };

  const toggleMobileNav = () => {
    if (!firstLoaded) setFirstLoaded(true);

    if (showMobileNav) setshowMobileNav(false);
    else setshowMobileNav(true);
  };

  history.listen((location, action) => {
    // location is an object like window.location
    setActiveRoute(location.pathname);

    if (showCart) toggleShowCart();

    if (showSearch) toggleShowSearch();
  });

  useEffect(() => {
    const loc = window.location.pathname;

    setActiveRoute(loc);
  }, []);

  const setActiveRoute = (loc) => {
    if (loc === "/") setActivePath("home");
    else if (loc === "/shop") setActivePath("shop");
    else if (loc === "/collection") setActivePath("collection");
    else if (loc === "/about") setActivePath("about");
    else if (loc === "/contact") setActivePath("contact");
    else setActivePath("");
  };

  const toggleShowCart = () => {
    if (!showCart) {
      if (showSearch) setShowSearch(false);
      setShowCart(true);
    } else setShowCart(false);
  };

  const toggleShowSearch = () => {
    if (!showSearch) {
      if (showCart) setShowCart(false);
      setShowSearch(true);
      // if( searchInput.current ) searchInput.current.focus()
    } else setShowSearch(false);
  };

  return (
    <header id="header">
      <Cart toggleShowCart={toggleShowCart} showCart={showCart} />

      <div className="container nav-holder">
        <nav className="navbar">
          <div className="nav-container">
            <div className="left-part">
              <button className="big-screen-menu" onClick={toggleMobileNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="burger-nav-menu"
                  width="32px"
                  height="32px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <Link className="logo" to="/">
              <img src={Logo} alt="dopegood" />
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 399.91">
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M200,0V50a125,125,0,1,0,50,100V0ZM178,203a75,75,0,1,1,22-53A74.48,74.48,0,0,1,178,203Z"
                    />
                    <path
                      class="cls-1"
                      d="M0,274.91a125,125,0,0,0,250,0h0a67,67,0,0,0-58.9,35.51,75.11,75.11,0,0,1-132.37-.32A66.51,66.51,0,0,0,0,274.91Z"
                    />
                  </g>
                </g>
              </svg> */}

              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M187.5,12.5a62.5,62.5,0,0,0-62.48,61c0,.49,0,1,0,1.48a62.5,62.5,0,1,0,62.5-62.5Zm26.52,89A37.52,37.52,0,1,1,225,75,37.28,37.28,0,0,1,214,101.52Z"
                    />
                    <path
                      class="cls-1"
                      d="M424.71,62.5h48.17a37.52,37.52,0,1,0-35.38,50v25A62.5,62.5,0,0,1,375,75h0A62.5,62.5,0,1,1,498.75,87.5h-74Z"
                    />
                    <path
                      class="cls-1"
                      d="M100,0V25a62.5,62.5,0,1,0,25,50c0-.5,0-1,0-1.48V0ZM89,101.52A37.52,37.52,0,1,1,100,75,37.28,37.28,0,0,1,89,101.52Z"
                    />
                    <path
                      class="cls-1"
                      d="M125,73.52V75h0C125,74.5,125,74,125,73.52Z"
                    />
                    <path
                      class="cls-1"
                      d="M312.5,12.5A62.5,62.5,0,0,0,250,75v75h25V125A62.51,62.51,0,0,0,375,75h0A62.5,62.5,0,0,0,312.5,12.5Zm26.52,89A37.52,37.52,0,1,1,350,75,37.28,37.28,0,0,1,339,101.52Z"
                    />
                    <path
                      class="cls-1"
                      d="M62.5,162.5A62.5,62.5,0,1,0,100,275v12.12A38,38,0,0,1,89.13,313.9,37.23,37.23,0,0,1,63,325a37.63,37.63,0,0,1-27-11,38.08,38.08,0,0,1-6.53-8.76A33.51,33.51,0,0,0,0,287.5H0a62.5,62.5,0,1,0,125,0V225A62.5,62.5,0,0,0,62.5,162.5Zm26.52,89A37.52,37.52,0,1,1,100,225,37.28,37.28,0,0,1,89,251.52Z"
                    />
                    <path
                      class="cls-1"
                      d="M187.5,187.5a37.49,37.49,0,1,1-26.52,11,37.28,37.28,0,0,1,26.52-11Zm0-25A62.5,62.5,0,1,0,250,225a62.5,62.5,0,0,0-62.5-62.5Z"
                    />
                    <path
                      class="cls-1"
                      d="M312.5,187.5a37.49,37.49,0,1,1-26.52,11,37.28,37.28,0,0,1,26.52-11Zm0-25A62.5,62.5,0,1,0,375,225a62.5,62.5,0,0,0-62.5-62.5Z"
                    />
                    <path
                      class="cls-1"
                      d="M475,150v25a62.51,62.51,0,1,0,25,50V150ZM464,251.52A37.52,37.52,0,1,1,475,225,37.28,37.28,0,0,1,464,251.52Z"
                    />
                  </g>
                </g>
              </svg> */}
            </Link>

            <div className="right-part">
              {/* Navigation Search */}

              <div className="nav-search" ref={search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={toggleShowSearch}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                {showSearch && (
                  <Search toggle={toggleShowSearch} showSearch={showSearch} />
                )}
              </div>

              <span>|</span>

              {/* Navigation Cart */}
              <div className="shop-cart" ref={cart} onClick={toggleShowCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shopping-bag-icon"
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

                {cartLength ? (
                  <label className="cart-module-label">{cartLength}</label>
                ) : (
                  ""
                )}
              </div>

              <span>|</span>

              <div className="account">
                {user ? (
                  <div
                    className="acc-dropdown-btn"
                    onClick={() => setAccDropdown(!accDropdown)}
                  >
                    Acc
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ) : (
                  <Link to="/login">Login</Link>
                )}

                <div
                  className={`account-dropdown ${accDropdown ? "active" : ""}`}
                >
                  {accDropdown && (
                    <div
                      className="bg-full-cover"
                      onClick={() => setAccDropdown(false)}
                    ></div>
                  )}

                  <Link
                    to="/profile"
                    className="user-profile"
                    onClick={() => setAccDropdown(false)}
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Profile
                  </Link>

                  <Link
                    to="/profile/wishlist"
                    className="user-wishlist"
                    onClick={() => setAccDropdown(false)}
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Wish List
                  </Link>

                  <div className="user-logout" onClick={Logout}>
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </div>
                </div>
              </div>

              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMobileNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="burger-nav-menu"
                  width="32px"
                  height="32px"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`mobile-nav ${firstLoaded ? "" : "d-none"} ${
              showMobileNav ? "showMobileNav" : "hideMobileNav"
            } `}
          >
            {showMobileNav && (
              <div
                className="bg-full-cover"
                onClick={() => setshowMobileNav(false)}
              ></div>
            )}

            <ul className="navbar-ul ">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activePath === "home" && "active"} `}
                  to="/"
                  onClick={() => setshowMobileNav(false)}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${activePath === "shop" && "active"} `}
                  to="/shop"
                  onClick={() => setshowMobileNav(false)}
                >
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${activePath === "about" && "active"} `}
                  onClick={() => setshowMobileNav(false)}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    activePath === "contact" && "active"
                  } `}
                  onClick={() => setshowMobileNav(false)}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item account">
                {user ? (
                  <div
                    className="acc-dropdown-btn nav-link"
                    onClick={() => setAccDropdown(!accDropdown)}
                  >
                    Acc
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={() => setshowMobileNav(false)}
                  >
                    Login
                  </Link>
                )}

                <div
                  className={`account-dropdown ${accDropdown ? "active" : ""}`}
                >
                  <Link
                    to="/profile"
                    className="user-profile"
                    onClick={() => setAccDropdown(false)}
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    profile
                  </Link>

                  <div className="user-logout" onClick={Logout}>
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
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Logout
                  </div>
                </div>
              </li>

              {/* Navigation Search */}
              <li className="nav-item search-item" onClick={toggleShowSearch}>
                <div className="nav-search nav-link" ref={burgerSearch}>
                  Search
                  {showSearch && (
                    <BurgerSearch
                      toggle={toggleShowSearch}
                      showSearch={showSearch}
                    />
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Header);
