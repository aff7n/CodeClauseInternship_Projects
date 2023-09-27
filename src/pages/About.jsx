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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                  odio incidunt cupiditate at tenetur, rem, nobis inventore
                  quasi totam voluptas quisquam quae facilis ipsam quaerat
                  repudiandae commodi quos officiis dignissimos, aliquid
                  explicabo blanditiis non asperiores eius. Libero molestias
                  expedita incidunt tenetur officiis facilis commodi! Magni
                  ipsam maxime, numquam, neque nemo minus ratione at corrupti
                  maiores dolor molestiae? Saepe non, iure molestias quo
                  suscipit sapiente officia! Cum aliquid sapiente iusto
                  dignissimos, ipsum eveniet nobis porro. Harum dolor omnis ex
                  in ullam tenetur mollitia, fugit vel architecto non similique
                  nemo nisi ratione porro quibusdam veniam eveniet, optio,
                  debitis unde. Ipsa, id soluta.
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
