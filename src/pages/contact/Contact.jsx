import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Loader from "../../components/loader/Loader";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_zeta",
        "template_4ftd3th",
        form.current,
        "6bhYY1qzdt4DrI9xW"
      )
      .then(
        (result) => {
          setSending(false);
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          setSending(false);
          console.log(error.text);
          setFailed(true);
        }
      );
  };

  const resendHandler = () => {
    setEmail("");
    setMessage("");
    setName("");
    setSent(false);
  };

  return (
    <div id="contact" className=" h-screen flex items-center justify-center">
      <div className="contact-container">
        <div className="left-container">
          {!sent ? (
            <div className="relative">
              <h2 className="text-5xl text-center sm:text-left text-white font-barlow mb-8">
                Contact us
              </h2>
              <form
                ref={form}
                onSubmit={submitHandler}
                className="input-container"
              >
                <p className="text-white w-64 text-sm ">
                  feel free to contact us and we will get back to you as soon as
                  we can
                </p>
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="user_name"
                    value={name}
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="user_email"
                    value={email}
                    placeholder="email"
                    required
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
                    required
                  ></textarea>
                </div>
                <button className="w-64 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-slate-100 hover:text-blue-800 border-white active:scale-[0.98] duration-300">
                  Send Message
                </button>
              </form>
              {sending && (
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50">
                  <Loader />
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-white text-5xl mb-4">
                Thank you for reaching out
              </h2>
              <h3 className="text-white mb-4">
                We will get back to you as soon as possible
              </h3>
              <div>
                <button
                  onClick={resendHandler}
                  className="mb-4 px-4 py-2 bg-blue-600 rounded-md text-white hover:scale-105 active:scale-100 duration-300"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
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
