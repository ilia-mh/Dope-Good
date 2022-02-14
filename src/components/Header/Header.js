import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import Search from "./Search/Search";
import BurgerSearch from "./BurgerSearch/BurgerSearch";
import Cart from "./Cart/Cart";
import { Link, withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { userExists } from "../../store/Reducer/reducer";

import { toast } from "react-toastify";

import lgLogo from "../../assets/svg/LogoLg.png";
import { motion, useCycle } from 'framer-motion';
import CartIcon from './Cart/CartIcon';
import BurgerButton from './BurgerButton/burgerButton'

import Logo from "../../assets/svg/Logo.svg";

let TO

function Header({ history }) {
  
  const dispatch = useDispatch();

  const { length: cartLength } = useSelector((state) => state.shop.cart);
  const user = useSelector((state) => state.shop.user);

  const [isHeaderFixed, toggleHeaderFixed] = useCycle(false, true);
  // const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  // const [shouldRenderFixed, setShouldRenderFixed] = useState(false);
  const [scrolledPart, setScrolledPart] = useState(0)

  // const [showMobileNav, setshowMobileNav] = useState(false);
  const [showMenu, toggleShowMenu] = useCycle(false, true);

  const [accDropdown, setAccDropdown] = useState(false);
  // const [firstLoaded, setFirstLoaded] = useState(false);
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
    // if (!firstLoaded) setFirstLoaded(true);

    toggleShowMenu();
    // if (showMobileNav) setshowMobileNav(false);
    // else setshowMobileNav(true);
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

  useEffect(() => {

    // setTimeout(() => {
      
      const bodyClass = document.documentElement.classList
  
      if( showMenu ) {
        bodyClass.add('no-scroll');
      } else {
        bodyClass.remove('no-scroll');
      }

    // }, 500);
    
  }, [showMenu])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [isHeaderFixed]);
  
  const onScroll = () => {

    const scrollTop = window.scrollY
    determinScrolledPart(scrollTop)

    if ( scrollTop > 300 && !isHeaderFixed ) {

      toggleHeaderFixed()

    } else if ( scrollTop < 300 && isHeaderFixed ) {
      toggleHeaderFixed()
    }
  }

  const determinScrolledPart = (scrolled) => {

    const pageHeight = document.body.offsetHeight - window.innerHeight - 50

    setScrolledPart( scrolled / pageHeight )
  }

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

  const menuBg = {
    open: () => {

      const isMobile = window.innerWidth <= 768

      return ({
        clipPath: `circle(${window.innerHeight * 2 + 500}px at ${ isMobile ? '100%' : 0} 0px)`,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 6,
          stiffness: 20,
          restDelta: 2
        }
      })
    },
    closed: () => {

      const isMobile = window.innerWidth <= 768

      return ({
        clipPath: `circle(0px at ${ isMobile ? '100%' : 0} 0px)`,
        transition: {
          // delay: 0.5,
          duration: 0.4,
          type: "spring",
          damping: 15,
        }
      })
    }
  };

  return (
    <>
      {/* Normal Header at top */}
      <header 
        id="header" 
      >

        <Cart toggleShowCart={toggleShowCart} showCart={showCart} />

        <div className="container nav-holder">

          <nav className="navbar">

            <div className="nav-container">
              <div className="left-part">

                <CartIcon 
                  toggleShowCart={toggleShowCart}
                  cartRef={cart}
                  cartLength={cartLength}
                />
                
                <BurgerButton toggle={ () => toggleShowMenu() } isOpen={showMenu} />

              </div>

              <Link className="logo" to="/">
                <img src={lgLogo} alt="dopegood" />
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
                <CartIcon 
                  toggleShowCart={toggleShowCart}
                  cartRef={cart}
                  cartLength={cartLength}
                />

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
              className={`mobile-nav ${
                showMenu ? "showMobileNav" : "hideMobileNav"
              } `}
            >

              <motion.div 
                className="menubg"
                initial={false}
                animate={showMenu ? "open" : "closed"}
                // custom={window.innerHeight}
                variants={menuBg}
              >
              </motion.div>

              {showMenu && (
                <motion.div
                  className="bg-full-cover absolute"
                  onClick={() => toggleShowMenu()}
                  
                ></motion.div>
              )}

              <motion.ul className="navbar-ul"
                initial={{ opacity: 0 }}
                animate={ showMenu ? { opacity: 1, transition: { delay: 0.2 } } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <li className="nav-item">
                  <Link
                    className={`nav-link ${activePath === "home" && "active"} `}
                    to="/"
                    onClick={() => toggleShowMenu()}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${activePath === "shop" && "active"} `}
                    to="/shop"
                    onClick={() => toggleShowMenu()}
                  >
                    Shop
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className={`nav-link ${activePath === "about" && "active"} `}
                    onClick={() => toggleShowMenu()}
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
                    onClick={() => toggleShowMenu()}
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
                      onClick={() => toggleShowMenu()}
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
              </motion.ul>
            </div>
            
          </nav>
        </div>
      </header>

      {/* Fixed Header */}
          <motion.header 
            id="header" 
            className='fixed-header'
            initial={ isHeaderFixed ? { y: 0 } : { y: 60 } }
            animate={ isHeaderFixed ? { y: 60 } : { y: 0 } }
            transition={{ duration: 0.4 }}
          >

            <Cart toggleShowCart={toggleShowCart} showCart={showCart} />

            <div className="container nav-holder">
              <nav className="navbar">

                <div className="nav-container">
                  <div className="left-part">

                    <CartIcon 
                      toggleShowCart={toggleShowCart}
                      cartRef={cart}
                      cartLength={cartLength}
                    />

                    <BurgerButton toggle={ () => toggleShowMenu() } isOpen={showMenu} />

                  </div>

                  <Link className="logo" to="/">
                    <img src={Logo} alt="dopegood" />
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

                      { isHeaderFixed && showSearch && (
                        <Search toggle={toggleShowSearch} showSearch={showSearch} />
                      )}
                    </div>

                    <span>|</span>

                    {/* Navigation Cart */}
                    <CartIcon 
                      toggleShowCart={toggleShowCart}
                      cartRef={cart}
                      cartLength={cartLength}
                    />

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

                      {
                        isHeaderFixed &&
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
                      }

                    </div>
                    
                    <BurgerButton toggle={ () => toggleShowMenu() } isOpen={showMenu} />

                  </div>
                </div>

              </nav>
            </div>
            
            {
              !showMenu && <motion.div
                className="header-progress"
                initial={{ width: 0 }}
                animate={{ width: `${scrolledPart * 100}%` }}
                transition={{ duration: 0.3, ease: 'linear' }}
              >
              </motion.div>
            }


          </motion.header>
      
    </>
  );
}

export default withRouter(Header);
