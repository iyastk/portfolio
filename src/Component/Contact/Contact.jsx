import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [Done, setDone] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xut4jud",
        "template_kgat4gj",
        form.current,
        "L6VAgyYd2M3imv0mR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-wrapper" id="Contact us">
      <div className="c-left">
        <span className="contact-head">Get in Touch </span>
        <span className="contact-span">Contact me</span>
        <div className="blur c-blur-1"></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className="c-form">
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{Done && "Thanks for connecting me"}</span>
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
