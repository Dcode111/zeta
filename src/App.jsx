import React from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AllProducts from "./pages/products/allProducts/AllProducts";
import MainPage from "./components/mainPage/MainPage";

import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/products/productDetails/ProductDetails";
import ServiceDetails from "./pages/services/serviceDetails/ServiceDetails";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="service/:serviceId" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
