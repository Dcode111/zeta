import React from "react";

import facebook from "/icon-facebook.svg";
import instagram from "/icon-instagram.svg";
import pinterest from "/icon-pinterest.svg";
import twitter from "/icon-twitter.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 h-24min- w-full pt-4">
      <div className=" flex justify-between px-6">
        <div className="text-white">
          <h2>ZETA LOGO</h2>
          <p>Slogan, Lorem ipsum dolor sit.</p>
        </div>
        <div className="flex space-x-4">
          <img className="ficon" src={facebook} alt="" />
          <img className="ficon" src={twitter} alt="" />
          <img className="ficon" src={pinterest} alt="" />
          <img className="ficon" src={instagram} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center py-1 border-t border-white mt-3 text-white  text-center font-barlow opacity-80">
        <p>&copy; All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
