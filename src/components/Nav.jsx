import { useRef } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Nav = () => {
  // on scroll visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos < currentScrollPos || currentScrollPos > 10);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      style={{ top: visible ? "0" : "-100px", transition: "top 0.6s" }}
      class="navbar bg navbar-expand-sm fixed-top shadow p-3 mb-5 rounded-bottom-5"
    >
      <div class="container">
        <div className="nav-cont">
          {/* <img
            src={require("../img/rayyan.jpg")}
            class="logo rounded-circle shadow-4-strong"
            alt="rayyan"
          /> */}

          <Link to={"/"} className="navbar-brand">
            <img
              src="https://portfolio-bckt.s3.ap-south-1.amazonaws.com/rayyan-pfp.jpg"
              class="nav-pfp rounded-circle shadow-4-strong"
              alt="rayyan"
              style={{ display: "none" }}
            />
            <h2 class="navbar-name">Mohd Rayyan</h2>
            <p className="navbar-dsgn">creative copywriter</p>
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link to={"/"} class="nav-link">
                Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/Work"} class="nav-link">
                Work
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/About"} class="nav-link">
                About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/Contact"} class="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/* <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <div className="">
        <div className="navbar-header">
          <a href="#page-top" className="navbar-brand page-scroll">
            Mohd Rayyan
          </a>
        </div>
      </div> 
      <div className="" id="">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#work" className="page-scroll">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> */

export default Nav;
