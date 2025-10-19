import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav__container">
          <div className="row nav__row">
            <div className="nav__left">
              <a href="#topbar" className="nav__logo__wrapper">
                <img src={Logo} className="nav__logo" />
              </a>
            </div>
            <div className="nav__middle">
              <div className="nav__links">
                <a href="#topbar" className="nav__link">
                  Home
                </a>
                <a href="#about" className="nav__link">
                  About
                </a>
                <a href="#coverages" className="nav__link">
                  Coverage
                </a>
                <a href="#prices" className="nav__link">
                  Prices
                </a>
                <a href="#contact" className="nav__link">
                  Contact
                </a>
              </div>
              <button className="menu-btn">
                <FontAwesomeIcon
                  icon={faBars}
                  className="menu-icon"
                  onClick={() => setShowSidebar(true)}
                />
              </button>
            </div>
            <div className="nav__right">
              <a href="tel:07943227718" className="nav__btn" onClick={() => setShowSidebar(false)}>
                Book now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showSidebar && (
        <div className="overlay" onClick={() => setShowSidebar(false)}></div>)}

      {/* When showSidebar becomes true, slide in the side bar (active) otherwise return nothing (empty string*/}
      <div className={`sidebar ${showSidebar ? "active" : ""} `}>
        <a href="#topbar" className="nav__logo__wrapper" onClick={() => setShowSidebar(false)}>
          <img src={Logo} className="nav__logo" />
        </a>
        <a href="#topbar" className="nav__link" onClick={() => setShowSidebar(false)}>
          Home
        </a>
        <a href="#about" className="nav__link" onClick={() => setShowSidebar(false)}>
          About
        </a>
        <a href="#coverages" className="nav__link" onClick={() => setShowSidebar(false)}>
          Coverage
        </a>
        <a href="#prices" className="nav__link" onClick={() => setShowSidebar(false)}>
          Prices
        </a>
        <a href="#contact" className="nav__link" onClick={() => setShowSidebar(false)}>
          Contact
        </a>
        <a href="tel:07943227718" className="nav__btn" onClick={() => setShowSidebar(false)}>
          Book now
        </a>
      </div>
    </>
  );
};

export default Nav;
