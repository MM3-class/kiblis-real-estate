import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import "./promptConsultation.css";
import { ToastContainer, toast } from "react-toastify";

const PromptConsultation = ({ setIsShowPrompt }) => {
  const [userInput, setUserInput] = useState({});
  const [userForm, setUserForm] = useState(
    localStorage.getItem("USER") ? JSON.parse(localStorage.getItem("USER")) : []
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(userInput);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (!userInput.name || !userInput.phone || !userInput.email) return;
    setUserForm((prev) => [userInput, ...prev]);
    setUserInput({});
    console.log(userForm);
    toast.success("Thank you!", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    localStorage.setItem("USER", JSON.stringify(userForm));
  }, [userForm]);

  return (
    <>
      <div className="prompt-head">
        <h1>PROMPT CONSULTATION</h1>
        <p>Fill form below and our agent will contact you shortly</p>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="prompt-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={userInput.name || ""}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="tel"
            name="phone"
            value={userInput.phone || ""}
            onChange={handleChange}
            placeholder="Your Phone"
          />
          <input
            type="email"
            name="email"
            value={userInput.email || ""}
            onChange={handleChange}
            placeholder="Your E-mail"
          />
          <input type="submit" value="SEND" />
        </form>
        <div className="whats-app">
          <span>Or contact us right now via</span>
          <a
            href="https://wa.me/+971561113080"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default PromptConsultation;
