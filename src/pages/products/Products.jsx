import React from "react";

import { products } from "../../data/products";

import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <div className="font-sans pt-16 h-screen bg-slate-100">
      <h1 className="text-center text-4xl">Shop Our Products</h1>
      <div className="flex mt-24 space-x-6 overflow-y-hidden px-4">
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
