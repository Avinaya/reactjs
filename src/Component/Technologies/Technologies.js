import React from "react";
import "./Technology.css";

export default function Technologies() {
  return (
    <div className="margin-tech">
      <section className="technologies">
        <div className="technologies-container">
          <h1>
            Tools & <br></br> Technologies
          </h1>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/java.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/Aspnet.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/aws.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/WordPress.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/react.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/JQuery.webp")} alt="team img" />
            </div>
          </div>{" "}
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/html.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/mysql-512.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/android-3.png")} alt="team img" />
            </div>
          </div>
          <div className="technologies-card">
            <div className="technologies-box">
              <img src={require("../../Images/iso.jpg")} alt="team img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
