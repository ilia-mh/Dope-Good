import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import Search from './Search/Search'
import Cart from './Cart/Cart'
import { Link, withRouter  } from 'react-router-dom'

// images
import Logo from "../../assets/images/logo/logo-light2.png";

function Header({ history }) {

	const [showSearch,setShowSearch] = useState(false)
	const [showCart,setShowCart] = useState(false)
	const [activePath,setActivePath] = useState(false)

	const search = useRef(null)
	const cart = useRef(null)

  const toggleMobileNav = () => {
    const mobileNav = document.querySelector(".mobile-nav");

    if (mobileNav?.classList.contains("d-none"))
      mobileNav.classList.remove("d-none");

    if (mobileNav?.classList.contains("hideMobileNav")) {
      mobileNav?.classList.remove("hideMobileNav");
      mobileNav?.classList.add("showMobileNav");
    } else if (mobileNav?.classList.contains("showMobileNav")) {
      mobileNav?.classList.remove("showMobileNav");
      mobileNav?.classList.add("hideMobileNav");
    }
  };

	history.listen((location, action) => {
		// location is an object like window.location
		console.log(action, location.pathname, location.state)
		setActiveRoute(location.pathname)

		if( showCart ) toggleShowCart()

		if( showSearch ) toggleShowSearch()
	});

	useEffect( () => {

		const loc = window.location.pathname

		setActiveRoute(loc)

		// document.addEventListener( 'click', (e) => {

		// 	console.log('click event listener')
		// 	console.log(e.target)
		// 	console.log( e.target == search.current.children )

		// 	if( showCart ) {
		// 		if( e.target != cart ) setShowCart(false)
		// 	}

		// 	if( showSearch ) {
		// 		if( e.target != search ) setShowSearch(false)
		// 	}

		// })

	}, [])

	const setActiveRoute = (loc) => {
		if( loc === '/' ) 
			setActivePath('home')
		else if( loc === '/shop' )
			setActivePath('shop')
		else if( loc === '/collection' )
			setActivePath('collection')
		else if( loc === '/about' )
			setActivePath('about')
		else if ( loc === '/contact' ) setActivePath('contact')
	}

	const toggleShowCart = () => {

		if( !showCart ) {

			if( showSearch ) setShowSearch(false)
			setShowCart(true)

		} else setShowCart(false)

	}

	const toggleShowSearch = () => {

		if( !showSearch ) {

			if( showCart ) setShowCart(false)
			setShowSearch(true)

		} else setShowSearch(false)

	}

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav-container">

            <div className="left-part">
              {/* Logo */}
              <a className="logo" href="/">
                <img src={Logo} alt="Comfeey" />
              </a>

              {/* navbar links */}
              <div className="nvabar-links">
                <ul className="navbar-ul">
                  <li className="nav-item">
                    <Link className={`nav-link ${ activePath === 'home' && 'active'} `} to='/' >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${ activePath === 'shop' && 'active'} `} to='/shop' >Shop</Link>
                  </li>
                  <li className="nav-item">
                    <button className={`nav-link ${ activePath === 'collection' && 'active'} `} >Collections</button>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${ activePath === 'about' && 'active'} `} to='/about' >About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${ activePath === 'contact' && 'active'} `} to='/contact' >Contact</Link>
                  </li>
                </ul>
              </div>

            </div>

            <div className="right-part">

							<div className="nav-search" ref={search}>

								<svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ toggleShowSearch } >
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>

								{
									showSearch &&
										<Search />
								}

							</div>

							<span>|</span>

							<div className="shop-cart" ref={cart}>

								<svg xmlns="http://www.w3.org/2000/svg" className="shopping-bag-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ toggleShowCart } >
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
								</svg>

								{ showCart &&
										<Cart toggleShowCart={toggleShowCart} />
								}
							</div>

						</div>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMobileNav}
            >
              <span className="icon-bar">
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
              </span>
            </button>
          
					</div>

          {/* Mobile Navbar */}
          <div className="mobile-nav d-none hideMobileNav">
            <ul className="navbar-ul ">
              <li className="nav-item">
                <Link className={`nav-link ${ activePath === 'home' && 'active'} `} to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ activePath === 'shop' && 'active'} `} to='/shop' >Shop</Link>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${ activePath === 'collection' && 'active'} `} >Collection</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${ activePath === 'about' && 'active'} `} >About</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${ activePath === 'contact' && 'active'} `} >Contact</button>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default withRouter(Header);