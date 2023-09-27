import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      class="text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div class="container pt-4">
        <section class="mb-4">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </section>
      </div>

      <div
        class="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
      >
        © 2023 Copyright:
        <a
          class="text-dark"
          href="https://www.linkedin.com/in/mohd-kaab-khan-7683141b5/"
        >
          Kaab Khan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
