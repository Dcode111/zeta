import React from "react";

import facebook from "/icon-facebook.svg";
import instagram from "/icon-instagram.svg";
import pinterest from "/icon-pinterest.svg";
import twitter from "/icon-twitter.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-black bg-opacity-90 pt-4">
      <div className="sm:flex justify-between px-6">
        <div className="text-white sm:text-left text-center">
          <h2>ZETA LOGO</h2>
          <p>Slogan, Lorem ipsum dolor sit.</p>
        </div>
        <div className="flex sm:space-x-6 space-x-8 my-3 justify-center items-center">
          <div>
            <a href="#">
              <img className="ficon" src={facebook} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className="ficon" src={twitter} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className="ficon" src={pinterest} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img className="ficon" src={instagram} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-1 border-t border-white mt-3 text-white  text-center font-barlow opacity-80">
        <p>&copy; All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
