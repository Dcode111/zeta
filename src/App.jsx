import React from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <About />
    </div>
  );
};

export default App;
