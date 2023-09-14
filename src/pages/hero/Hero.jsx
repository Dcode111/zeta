import React from "react";

import "./Hero.css";

import company from "/company_img.png";

const Hero = () => {
  return (
    <div className="h-screen w-full flex px-4">
      <div className="w-2/3 flex flex-col space-y-4 justify-center items-left">
        <h1 className="text-6xl font-sans">Zeta Group Of Companies</h1>
        <h3>Zeta is zeta is a conglomerate parenting different companies</h3>
        <div>
          <button className="bg-transparent border-2 border-black rounded-xl px-4 py-2 hover:bg-black hover:text-white hover:scale-105 durat active:scale-100 ion-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-1/3 flex flex-col items-end space-y-4 justify-center mr-4">
        <div className="circle">
          <a href="#"></a>
        </div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Hero;
