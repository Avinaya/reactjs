import React from "react";
import "./Team.css";

export default function Team() {
  return (
      <div className="margin">
    <section className="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="card">
          <div className="box">
            <img src={require("../../Images/one.jpg")} alt="team img" />
            <h4>Yogendra Bhattarai</h4>
            <h5>.Net Developer</h5>
            <p></p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={require("../../Images/two.jpg")} alt="team img" />
            <h4>Bishow Shrestha</h4>
            <h5>Flutter Developer</h5>
            <p>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={require("../../Images/three.jpg")} alt="team img" />
            <h4>Subash Nagarkati</h4>
            <h5>Graphic Desiner</h5>
            <p>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={require("../../Images/four.jpg")} alt="team img" />
            <h4>Sagar Shrestha</h4>
            <h5>React Js</h5>
            <p>
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
