import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="items-center flex flex-col border border-black rounded-sm p-1 bg-slate-200">
      <div className="max-w-xs">
        <img className="h-56" src={product.img} alt="productImage" />
      </div>
      <p className="text-center my-3">{product.name}</p>
      <Link
        to={`/product/${product.id}`}
        className="px-4 py-2 bg-blue-300 rounded-md text-black font-sans hover:text-blue-300 hover:bg-black active:scale-[0.98]"
      >
        Product Details
      </Link>
    </div>
  );
};

export default Product;
