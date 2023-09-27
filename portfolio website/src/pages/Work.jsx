import React from "react";
import { ReactDOM } from "react-dom";
import $ from "jquery";
import Nav from "../components/Nav";
import NavStatic from "../components/Nav-static";
import Footer from "../components/Footer";

// $(document).ready(function () {
//   $("nav#remove").removeClass("fixed-top");
// });

const Work = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <NavStatic />
      {/* <div
        class="jumbotron jumbotron-fluid bg-image"
        style={{ background: "none", height: "0" }}
      >
        <div class="dsgn d-flex flex-column justify-content-center align-items-center mask">
          <h1
            class="display-1 text-uppercase fw-bold text-center"
            style={{
              fontFamily: "Space Mono",
              letterSpacing: "4px",
              zIndex: "1",
            }}
          >
            2D Art
          </h1>
        </div>
      </div> */}
      <div className="gallery">
        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-1.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-2.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-3.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-4.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-5.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-6.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-7.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-8.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-9.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-10.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
