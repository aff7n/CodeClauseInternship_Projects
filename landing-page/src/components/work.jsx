import React from "react";

const portfolio = () => {
  return (
    <div id="portfolio">
      <div class="container-fluid p-0">
        <div class="row g-0">
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img2.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img2.jpg")}
                alt="..."
              />
              
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img7.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img7.jpg")}
                alt="..."
              />
              
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img4.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img4.jpg")}
                alt="..."
              />
              
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img5.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img5.jpg")}
                alt="..."
              />
              
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img6.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img6.jpg")}
                alt="..."
              />
              
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a
              class="portfolio-box"
              href={require("../imgs/img3.jpg")}
              title="Project Name"
            >
              <img
                class="img-fluid"
                src={require("../imgs/img3.jpg")}
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
