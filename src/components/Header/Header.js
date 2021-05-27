import React, { useState } from "react";
import "./header.css";
import Search from '../Search/Search'
import Cart from '../Cart/Cart'

// images
import Logo from "../../assets/images/logo/logo-light2.png";

export default function Header() {

	const [showSearch,setShowSearch] = useState(false)
	const [showCart,setShowCart] = useState(false)

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
                    <button className="nav-link active">Home</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Shop</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Collections</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">Blog</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link">About</button>
                  </li>
                </ul>
              </div>

            </div>

            <div className="right-part">

							<div className="nav-search">

								<svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => setShowSearch(!showSearch) } >
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>

								{
									showSearch &&
										<Search />
								}

							</div>

							<span>|</span>

							<div className="shop-cart">

								<svg xmlns="http://www.w3.org/2000/svg" className="shopping-bag-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={ () => setShowCart(!showCart) } >
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
								</svg>

								{ showCart &&
										<Cart />
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
                <button className="nav-link active">Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Features</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">How it works</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Pricing</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Team</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
