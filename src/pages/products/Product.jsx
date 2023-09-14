import React from "react";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col space-y-4 border-2 border-black rounded-lg p-1 bg-slate-200">
      <div className="max-w-xs">
        <img className="aspect-[3/4]" src={product.img} alt="productImage" />
      </div>
      <p className="ml-2">{product.name}</p>
      <p className="ml-2">${product.price}</p>
    </div>
  );
};

export default Product;
