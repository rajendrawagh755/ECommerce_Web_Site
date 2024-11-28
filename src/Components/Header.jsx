import React, { useState } from "react";  // Only import useState from React
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Header = () => {
  // State to manage mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className="header header--sticky"
      data-header-hover="true"
    >
      {/*Header Navigation*/}
      <nav id="navigation" className="header-nav">
        <div className="container-fluid">
          <div className="row">
            {/*Logo*/}
            <div className="site-logo">
              <a href="home.html">
                <img
                  src="img/logo--dark.png"
                  className="logo-dark"
                  alt="Mazaar"
                />
                <img
                  src="img/logo--light.png"
                  className="logo-light"
                  alt="Mazaar"
                />
              </a>
            </div>
            {/*End Logo*/}

            {/*Navigation Menu*/}
            <div className="nav-menu">
              <ul>
                <li className="nav-menu-item">
                  <a href="home.html">Home</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col3-dropdown">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home.html">
                              <img
                                src="img/banner/themeshots/shot_home01.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 01</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_02.html">
                              <img
                                src="img/banner/themeshots/shot_home02.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 02</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_03.html">
                              <img
                                src="img/banner/themeshots/shot_home03.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 03</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_04.html">
                              <img
                                src="img/banner/themeshots/shot_home04.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 04</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_05.html">
                              <img
                                src="img/banner/themeshots/shot_home05.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 05</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <ul>
                          <li>
                            <a href="home_06.html">
                              <img
                                src="img/banner/themeshots/shot_home06.jpg"
                                alt="Banner"
                              />
                              <figure className="text--center">Home 06</figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item mega-menu">
                  <a href="product_listing.html">Shop</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown mega-dropdown">
                    <div className="container">
                      <div className="row">
                        {/* Other dropdown contents */}
                      </div>
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                <li className="nav-menu-item">
                  <a href="product_listing-right_sidebar.html">Man</a>
                  {/*Dropdown*/}
                  <div className="nav-dropdown col2-dropdown">
                    <div className="row">
                      {/* Dropdown content */}
                    </div>
                  </div>
                  {/*End Dropdown*/}
                </li>
                {/* Add more navigation items here */}
              </ul>
            </div>
            {/*End Navigation Menu*/}

            {/*Nav Icons*/}
            <div className="nav-icons">
              <ul>
                <li className="nav-icon-item d-lg-none">
                  <div
                    className="nav-icon-trigger menu-mobile-btn"
                    title="Navigation Menu"
                    onClick={toggleMenu} // Toggles the menu visibility
                  >
                    <span>
                      <i className="ti-menu" />
                    </span>
                  </div>
                </li>
                <li className="nav-icon-item">
                  <div
                    className="nav-icon-trigger search-menu-btn"
                    title="Search"
                  >
                    <span>
                      <i className="ti-search" />
                    </span>
                  </div>
                </li>
                {/* Other nav icons */}
              </ul>
            </div>
            {/*End Nav Icons*/}

            {/* Mobile Menu (only visible when menuOpen is true) */}
            {menuOpen && (
              <div className="mobile-menu">
                <ul>
                  <li key="home-01"><Link to="#">Home</Link></li>
                  <li key="shop-01"><Link to="#">Shop</Link></li>
                  <li key="sale-01"><Link to="#">Sale</Link></li>
                  <li key="blog-01"><Link to="#">Blog</Link></li>
                  <li key="pages-01"><Link to="#">Pages</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/*End Header Navigation*/}
    </header>
  );
};

export default Header;
