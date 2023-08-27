import React from "react";
import Nav from "./Nav";
import $ from "jquery";

const Sample = (props) => {
  $(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  return (
    <>
      <Nav />
      <div className="carasoul">
        <div class="options container">
          <div
            class="option active"
            style={{
              background:
                "url(https://portfolio-bckt.s3.ap-south-1.amazonaws.com/allDrycleaners.jpg)  0% 5% / cover",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">
                <i class="fas fa-walking"></i>
              </div>
              <div class="info">
                <div class="main">Ad title</div>
                <div class="sub">Ad small description</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://portfolio-bckt.s3.ap-south-1.amazonaws.com/burgerKingWater.jpg) 0% 45% / cover",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">{/* <i class="fas fa-snowflake"></i> */}</div>
              <div class="info">
                <div class="main">Ad title</div>
                <div class="sub">Ad small description</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              zoom: "100%",
              background:
                "url(https://portfolio-bckt.s3.ap-south-1.amazonaws.com/apollo.jpg) 0% 45% / cover",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">{/* <i class="fas fa-tree"></i> */}</div>
              <div class="info">
                <div class="main">Ad title</div>
                <div class="sub">Ad small description</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://portfolio-bckt.s3.ap-south-1.amazonaws.com/CIty.jpg) 0% 45% / cover",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">{/* <i class="fas fa-tint"></i> */}</div>
              <div class="info">
                <div class="main">Ad title</div>
                <div class="sub">Ad small description</div>
              </div>
            </div>
          </div>
          <div
            class="option"
            style={{
              background:
                "url(https://portfolio-bckt.s3.ap-south-1.amazonaws.com/colgate.jpg) 0% 45% / cover",
            }}
          >
            <div class="shadow"></div>
            <div class="label">
              <div class="icon">{/* <i class="fas fa-sun"></i> */}</div>
              <div class="info">
                <div class="main">Ad title</div>
                <div class="sub">Ad small description</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-button btn button-2">More work</div>
        {/* <a className="button button-2 more">More</a> */}
      </div>
    </>
  );
};

export default Sample;
