import React from "react";

import { services } from "../../data/services";

import Service from "./Service";

const Services = () => {
  return (
    <div id="services" className="mt-16">
      <h1 className="text-3xl text-center mb-5 ml-4">Services</h1>
      <div className="px-2 grid grid-cols-2 sm:grid-cols-3 gap-6  min-h-screen space-x-2">
        {services.map((service) => (
          <div className="text-black" key={service.id}>
            <Service service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
