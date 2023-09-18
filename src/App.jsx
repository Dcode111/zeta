import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <About />
    </div>
  );
};

export default App;
