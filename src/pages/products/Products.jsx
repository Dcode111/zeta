import React from "react";

import { products } from "../../data/products";

import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <div id="products" className="font-sans pt-16 min-h-screen bg-slate-100">
      <h1 className="text-center text-4xl">Shop Our Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-24 space-x-6 overflow-y-hidden px-4 gap-2">
        {products.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
