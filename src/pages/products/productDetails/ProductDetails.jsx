import React from "react";
import { useParams } from "react-router-dom";

import { products } from "../../../data/products";

const ProductDetails = () => {
  const { productId } = useParams();

  let product;
  products.map((p) => {
    console.log(p.id, productId);
    if (p.id == productId) {
      product = p;
    }
  });

  return (
    <div className="flex items-center content-center min-h-screen p-10 ">
      <div className="w-full sm:flex px-10 ">
        <div className=" sm:w-1/2 flex items-center justify-center">
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className=" sm:w-1/2 my-4 sm:my-0 sm:ml-4 flex flex-col space-y-2 items-start justify-center">
          <p className="font-barlow text-2xl capitalize font-bold">
            {product.name}
          </p>
          <p className="font-barlow flex space-x-2">
            <span className="text-blue-600">Description: </span>
            <span className="max-w-xl">{product.description}</span>
          </p>
          <p className="font-barlow flex space-x-2">
            <span className="text-blue-600">Price: </span>
            <span>{product.price} birr.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
