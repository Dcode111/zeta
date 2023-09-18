import React from "react";

const Service = ({ service }) => {
  return (
    <div className="flex flex-col space-y-4 p-1 py-3 bg-slate-200">
      <div className="max-w-xs">
        <img className="aspect-[3/4]" src={service.img} alt="serviceImage" />
      </div>
      <p className="ml-2 text-black">{service.name}</p>
      <p className="ml-2 text-black">${service.price}</p>
    </div>
  );
};

export default Service;
