import React from "react";
import Nav from "./Nav";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
import "@splidejs/splide/css/skyblue";
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
                  768: {
                    perPage: 2,
                    gap: ".7rem",
                    height: "22rem",
                  },
                  480: {
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
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/wwf+plastic.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/wwf+air.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/CIty.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/CIty2-02.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/burgerKingWater.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/BurgerKingFrench.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/burger2.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/americanTourister.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Speedingcomm-02-02.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Speedingcomm-01-01.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/apollo.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/Boosty+bells+2.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/boostyBells.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/fitness+gym-01.jpg"
                    alt="Card image"
                  />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="card feat-card">
                  <img
                    class="card-img-top object-fit-cover feat-img"
                    style={{ objectPosition: "bottom" }}
                    src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/fitness+gym-02-02.jpg"
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
