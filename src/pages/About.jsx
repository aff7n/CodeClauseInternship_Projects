import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavStatic from "../components/Nav-static";
import Footer from "../components/Footer";
import { event } from "jquery";

const About = (props) => {
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
      <header id="about">
        <div className="about">
          <div className="container">
            <div className="about-cont">
              <div className="about-content">
                <div className="intro-text">
                  <h1 className="about-greeting">
                    {props.data ? props.data.about : "Loading"} <br />
                  </h1>
                  <p className="prof">
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                </div>
              </div>
              <div className="contact-form">
                <h1 className="about-greeting">Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className="form">
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
                    <button className="send-btn btn" type="submit">
                      Send Message
                    </button>
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
              </div>
              {/* <div className="contact-form">
                <h1 className="about-greeting">Contact me</h1>
                <form class="cf" onSubmit={submitHandler}>
                  <div class="half left cf">
                    <input
                      type="text"
                      name="name"
                      value={formState.name || ""}
                      onChange={changeHandler}
                      id="input-name"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formState.email || ""}
                      onChange={changeHandler}
                      id="input-email"
                      placeholder="Email address"
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject || ""}
                      onChange={changeHandler}
                      id="input-subject"
                      placeholder="Subject"
                    />
                    <input
                      type="submit"
                      value="Send Email"
                      className="button btn"
                      id="input-submit"
                    />
                  </div>
                  <div class="half right cf">
                    <textarea
                      name="message"
                      type="text"
                      value={formState.message || ""}
                      onChange={changeHandler}
                      id="input-message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default About;
