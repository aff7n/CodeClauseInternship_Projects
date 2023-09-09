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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/americanTourister.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/wwf+air.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/wwf+plastic.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/boostyBells.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Boosty+bells+2.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/burger2.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/BurgerKingFrench.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/burgerKingWater.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/fitness+gym-01.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/fitness+gym-02-02.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/CIty.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/CIty2-02.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Speedingcomm-01-01.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Speedingcomm-02-02.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/tide2.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Hit.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Fedex.jpg"
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
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/colgate.jpg"
              alt=" "
              className="gallery__image"
            />
            {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
          </figure>

          <figure className="gallery__thumb">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/apollo.jpg"
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
