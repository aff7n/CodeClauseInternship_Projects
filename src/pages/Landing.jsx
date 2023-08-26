import React from "react";
import { ReactComponent as YourSvg } from "../img/hot-coffee.svg";

const Landing = (props) => {
  return (
    <header id="header">
      <div className="hero">
        {/* <div className="overlay"> */}
        <div className="container">
          <div className="intro-text">
            <h1>
              {props.data ? props.data.title : "Loading"}
              {/* <YourSvg class="coffee-logo" /> */}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            {/* <a href="#work" className="btn btn-custom btn-lg page-scroll">
              Explore
            </a> */}
            <div class="button btn button-2">Explore</div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Landing;
