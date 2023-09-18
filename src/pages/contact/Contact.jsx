import React, { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact" className=" h-screen flex items-center justify-center">
      <div className="contact-container">
        <div className="left-container">
          <h2>Contact us</h2>
          <div className="input-container">
            <p className="text-white w-64 text-sm ">
              feel free to contact us and we will get back to you as soon as we
              can
            </p>
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="name"
                required
              />
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="email"
              />
            </div>
            <div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                name="message"
                id="message"
                cols="30"
                rows="3"
                value={message}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="right-container">
          <div className="flex flex-col mb-3 mx-4 sm:mx-0">
            <h3 className="text-slate-300 font-sans">Opening hours</h3>
            <p>Monday - Friday</p>
            <p className="ml-2">9am - 5pm</p>
            <p>Weekend</p>
            <p className="ml-2">Closed</p>
          </div>
          <div className="flex flex-col mb-3 sm:mx-0 mx-4">
            <h3 className="text-slate-300 font-sans">address</h3>
            <p className="w-32">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col mr-4">
            <h3 className="text-slate-300 font-sans">support</h3>
            <p>example@gmail.com</p>
            <p>+251-912-345-678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
