import React from "react";
import { ReactDOM } from "react-dom";
import $ from "jquery";
import Nav from "../components/Nav";

const Work = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <Nav />
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Work;
