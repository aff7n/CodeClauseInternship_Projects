import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavStatic from "../components/Nav-static";
import Footer from "../components/Footer";
import { event } from "jquery";

const About = (props) => {
  return (
    <>
      <NavStatic />
      <header id="about">
        <div className="about">
          <div className="container">
            <div className="about-container">
              <div className="intro-text">
                <h1 className="about-greeting">
                  {props.data ? props.data.about : "Loading"} <br />
                </h1>
                <p className="prof">
                  {props.data ? props.data.aboutP : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP1 : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP2 : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP3 : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP4 : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP5 : "Loading"} <br /> <br />
                  {props.data ? props.data.aboutP6 : "Loading"} <br /> <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  );
};

export default About;
