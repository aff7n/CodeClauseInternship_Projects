import React from "react";

const Hero = () => {
  return (
    <header class="masthead">
      <div class="container px-4 px-lg-5 h-100">
        <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-8 align-self-end">
            <h1 class="text-white font-weight-bold">
            Elevate Your Home's Beauty and Comfort.
            </h1>
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 mb-5">
            Crafting Elegance, Inspiring Comfort
            </p>
            <a class="btn btn-primary btn-xl" href="#about">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
