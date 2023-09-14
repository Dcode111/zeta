import React from "react";

import "./Navbar.css";

const navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 flex font-barlow justify-between px-10 items-center bg-slate-100 max-w-6xl mx-auto bg-opacity-80">
      <div className="text-2xl cursor-pointer">Logo</div>
      <div className="flex text-lg justify-between space-x-6 border-black">
        <div className="nav_links">
          <a href="#shop">Shop</a>
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
    </div>
  );
};

export default navbar;
