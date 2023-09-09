import React, { useState, useEffect } from "react";
import Sample from "../components/Sample";
import Nav from "../components/Nav";
import { ReactComponent as YourSvg } from "../img/hot-coffee.svg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <header id="header">
        <div className="hero">
          <div className="container">
            <div className="hero-cont">
              <div className="hero-content">
                <div className="intro-img">
                  <img
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/rayyan-pfp.jpg"
                    class="pfp rounded-circle shadow-4-strong"
                    alt="rayyan"
                  />
                </div>
                <div className="intro-text">
                  <h1 className="greeting">
                    {props.data ? props.data.title1 : "Loading"} <br />
                    <span className="greeting1">
                      {props.data ? props.data.title2 : "Loading"}
                    </span>
                    <span></span>
                  </h1>
                  <p className="prof">
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                  <p className="prof1">
                    {props.data ? props.data.paragraph1 : "Loading"}{" "}
                    <span className="prof2">
                      {props.data ? props.data.paragraph2 : "Loading"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="hero-btns">
                <Link to="/About" style={{ textDecoration: "none" }}>
                  <div class="button btn">Hire Me</div>
                </Link>

                <Link to="#">
                  <div class="button btn">Download CV</div>
                </Link>
                <Link to="/Work">
                  <div class="button btn">explore My work </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sample />
      <Footer />
    </>
  );
};

export default Landing;
