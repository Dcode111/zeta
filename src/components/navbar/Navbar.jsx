import React, { useState } from "react";

import "./Navbar.css";

const navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => {
    showNav ? setShowNav(false) : setShowNav(true);
  };
  return (
    // Navbar container
    <div className="fixed top-0 right-0 left-0 flex font-barlow justify-between px-10 items-center bg-slate-100 max-w-6xl mx-auto bg-opacity-80">
      {/* Navbar_Logo */}
      <div className="py-2 text-2xl cursor-pointer">
        <a href="#home">Logo</a>
      </div>
      {/* Navbar_Items */}
      <div className="hidden sm:flex text-lg justify-between space-x-6 border-black">
        <div className="nav_links">
          <a href="#products">Products</a>
        </div>
        <div className="nav_links">
          <a href="#services">Services</a>
        </div>
        <div className="nav_links">
          <a href="#about">About</a>
        </div>
        <div className="nav_links">
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* ********** Hamburger Menu ********** */}
      <div className="sm:hidden z-30">
        <div
          onClick={showNavHandler}
          className={`hamburger ${showNav && "active"}`}
        >
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </div>
      </div>

      {/* ************ SideNav ************ */}
      {showNav && (
        <div className="fixed z-20 top-0 right-0 bottom-0 left-0 h-screen bg-slate-800 bg-opacity-70">
          <div className="flex flex-col items-center pt-20 font-bold">
            <a onClick={showNavHandler} className="nav_link" href="#products">
              Products
            </a>
            <a onClick={showNavHandler} className="nav_link" href="#services">
              Services
            </a>
            <a onClick={showNavHandler} className="nav_link" href="#about">
              About
            </a>
            <a onClick={showNavHandler} className="nav_link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default navbar;
