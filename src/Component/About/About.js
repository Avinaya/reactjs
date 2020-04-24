import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-space">
      <div className="about">
        <div className="about-container">
          <h1 className="title">
            {" "}
            Why Work <br></br> With Us ?
          </h1>
          <div className="about-container-description">
            <h1>About</h1>
            <p>
              Our expertise in application development is evolutionary and
              at-par with next-generation software applications. Entrust us to
              design, develop and enhance your software products so that you can
              remain focused on your core business. We have a team of creative
              designers, quick developers, vigilant project managers, and
              aggressive online marketers – you can count on us for your digital
              needs.
            </p>
            <center>
      <button class="button"><span>More </span></button>
      </center>
          </div>
          <div className="about-container-image">
            <img
              className="image"
              src={require("../../Images/about.jpg")}
              alt="avinaya"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
