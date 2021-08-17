import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import { Link, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

// images
import Logo from "../../assets/images/logo/logo-light2.png";

function Header({ history }) {

  const { length: cartLength } = useSelector((state) => state.shop.cart);
  const user = useSelector((state) => state.shop.user);

  const [firstLoaded, setFirstLoaded] = useState(false);
  const [showMobileNav, setshowMobileNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [activePath, setActivePath] = useState(false);

  const search = useRef(null);
  const cart = useRef(null);

  const toggleMobileNav = () => {

		if( !firstLoaded ) setFirstLoaded(true)

		if( showMobileNav ) setshowMobileNav(false)
		else setshowMobileNav(true)

  };

  history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
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
    } else setShowSearch(false);
  };

  return (
    <header id="header">

      <Cart toggleShowCart={toggleShowCart} showCart={showCart} />

      <div className="container">
        <nav className="navbar">
          <div className="nav-container">
            <div className="left-part">

							<button className="big-screen-menu" onClick={ toggleMobileNav }>

								<span className="menu--icon">
									<span></span>
									<span></span>
									<span></span>
								</span>

								menu

							</button>

						</div>

						<Link className="logo" to="/">
							<img src={Logo} alt="Comfeey" />
						</Link>

            <div className="right-part">

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

                {showSearch && <Search toggle={toggleShowSearch} showSearch={showSearch} />}
              </div>

              <span>|</span>

              <div className="shop-cart" ref={cart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shopping-bag-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={toggleShowCart}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
								{
									cartLength ? 
										<label className="cart-module-label">{cartLength}</label>
									: 
										''
								}
              </div>
            
              <span>|</span>
							
							<div className="account">
								{
									user ?
										<Link to="/profile">
											Account
										</Link>
									:
										<Link to="/login">Login</Link>
								}
							</div>

							<button
								className="navbar-toggler"
								type="button"
								onClick={toggleMobileNav}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="burger-menu"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>

						</div>

          </div>

          {/* Mobile Navbar */}
          <div className={`mobile-nav ${ firstLoaded ? '' : 'd-none' } ${ showMobileNav ? 'showMobileNav' : 'hideMobileNav'} `}>
            <ul className="navbar-ul ">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activePath === "home" && "active"} `}
                  to="/"
									onClick={ () => setshowMobileNav(false) }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activePath === "shop" && "active"} `}
                  to="/shop"
									onClick={ () => setshowMobileNav(false) }
                >
                  Shop
                </Link>
              </li>
              {/* <li className="nav-item">
                <button
                  className={`nav-link ${
                    activePath === "collection" && "active"
                  } `}
									onClick={setshowMobileNav(false)}
                >
                  Collection
                </button>
              </li> */}
              <li className="nav-item">
                <Link
									to="/about"
                  className={`nav-link ${activePath === "about" && "active"} `}
									onClick={ () => setshowMobileNav(false) }
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
									onClick={ () => setshowMobileNav(false) }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default withRouter(Header);
