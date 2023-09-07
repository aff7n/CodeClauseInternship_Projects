import React, { useState, useEffect } from "react";
// import Sample from "../components/Sample";
// import Nav from "../components/Nav";
import { ReactComponent as YourSvg } from "../img/hot-coffee.svg";
import NavStatic from "../components/Nav-static";
import Footer from "../components/Footer";

const About = (props) => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      Username: "rayyan1412rmp@gmail.com",
      Password: "6FD5433F320D03CA2F415207C9DCEBA2C9F1",
      Host: "smtp.elasticemail.com",
      Port: 2525,
      To: "rayyan1412rmp@gmail.com",
      From: formState.email,
      Subject: formState.subject,
      Body: formState.message,
    };

    if (window.Email) {
      window.Email.send(config).then(() => alert("Email sent succesfully"));
    }
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
