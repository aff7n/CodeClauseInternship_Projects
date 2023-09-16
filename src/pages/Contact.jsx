import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavStatic from "../components/Nav-static";
import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "rayyan1412rmp@gmail.com",
        "template_o8wu4vj",
        form.current,
        "g8z2cnHnBeSXzlThe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <NavStatic />
      <div className="contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-intro">
              <img
                src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/rayyan-pfp.jpg"
                class="pfp1 rounded-circle shadow-4-strong"
                alt="rayyan"
              />
              <h2 className="contact-text">feel free to contact me</h2>
            </div>
            <div className="contact-form">
              <h1 className="contact-greeting">Contact me</h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="form"
                id="enquire"
              >
                <div className="left">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="right">
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
              </form>
              <button className="send-btn btn" form="enquire" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
