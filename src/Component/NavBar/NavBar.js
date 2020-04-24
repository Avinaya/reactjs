import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="header_detail">
        <div className="header_logo">
          <a href="/">
            <img
              src={require("../../Images/logo.png")}
              alt="saptasoch.com"
            />
          </a>
        </div>
        <div className="header_socialmedia">
          <a href="https://www.facebook.com/saptasoch">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <span className="scroll-bottom active">
          <span className="main-title"> -----Scroll-----</span>
          <span className="line-box">
            <span className="line-stroke"></span>
          </span>
        </span>
        <span className="scroll-top hide">
          <a className="link" href="/" title="Go to top">
            <span className="main-title">Go Top</span>
            <span className="line-box">
              <span className="line-stroke"></span>
            </span>
          </a>
        </span>
      </nav>
    </header>
  );
};
export default NavBar;
