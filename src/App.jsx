import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;
