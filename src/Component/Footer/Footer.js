import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="spacer">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            SaptaSoch<span></span>
          </h3>

          <p className="footer-links">
            <a href="/" className="link-1">
              Home
            </a>

            <a href="/">Service</a>

            <a href="/">About</a>

            <a href="/">career</a>

            <a href="/">Contact</a>
          </p>

          <p className="footer-company-name">SaptaSoch © 2020</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>BuddhaNagar</span> Kalanki, Kathmandu
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+997-9860262181</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:info@saptasoch.come">info@saptasoch.come</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>Why Us?</span>
            At SaptaSoch, we develop innovative and creative products
             and services such as web design and development, 
              mobile application, e-commerce solutions, are few that we offer.
          </p>

          <div className="footer-icons">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
