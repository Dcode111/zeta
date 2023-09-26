import React from "react";
import Contact from "../../pages/contact/Contact";
import About from "../../pages/about/About";
import Services from "../../pages/services/Services";
import Products from "../../pages/products/Products";
import Hero from "../../pages/hero/Hero";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default MainPage;
