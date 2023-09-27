import React from "react";
import Nav from "./Nav";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import "@splidejs/splide/css/sea-green";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import $ from "jquery";

const Sample = (props) => {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <div id="sample" className="featured">
      <Nav />
      <div className="container slide-cont">
        <h2 className="feat-title text-center text-uppercase">
          Work & Projects
        </h2>
        <div className="feat-cont">
          <div className="col-10">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                perMove: 1,
                gap: "2rem",
                breakpoints: {
                  480: {
                    perPage: 1,
                    gap: ".7rem",
                    height: "22rem",
                  },
                  360: {
                    perPage: 1,
                    gap: ".7rem",
                    height: "20rem",
                  },
                },
              }}
              aria-labelledby="My Favorite Images"
            >
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "top" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-1.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-2.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-3.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-4.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-5.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>

              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-6.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/code-clause/img-7.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
