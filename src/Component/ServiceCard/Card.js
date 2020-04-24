import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="section">
      <h1 className="heading">Our Services</h1>
      <div className="services">
        <div className="service-1">
          <div className="shapes">
            <div className="shapes-1 right"></div>
            <div className="shapes-2 right"></div>
            <div className="shapes-3 right"></div>
          </div>
          <div className="img">
            <img
              src="https://elasticbeanstalk-us-east-1-937433307859.s3.amazonaws.com/webDesign.png"
              height="170px"
              width="100%"
              alt=""
            />
          </div>
          <div className="description">
            <h2>Web Application Development</h2>
            <p>
              We provide end-to-end web application development services that
              are strong, scalable and world-class.
            </p>
          </div>
          <div className="shapes">
            <div className="shapes-4"></div>
            <div className="shapes-5"></div>
            <div className="shapes-6"></div>
          </div>
        </div>

        <div className="service-1">
          <div className="shapes">
            <div className="shapes-1 right"></div>
            <div className="shapes-2 right"></div>
            <div className="shapes-3 right"></div>
          </div>
          <div className="img">
            <img
              src="https://elasticbeanstalk-us-east-1-937433307859.s3.amazonaws.com/mob.jpg"
              height="170px"
              width="100%"
              alt=""
            />
          </div>
          <div className="description">
            <h2>Mobile Application Development</h2>
            <p>
              Add mobile capabilities and reap the benefits of a connected
              infrastructure and platform.
            </p>
          </div>
          <div className="shapes">
            <div className="shapes-4"></div>
            <div className="shapes-5"></div>
            <div className="shapes-6"></div>
          </div>
        </div>

        <div className="service-1">
          <div className="shapes">
            <div className="shapes-1 right"></div>
            <div className="shapes-2 right"></div>
            <div className="shapes-3 right"></div>
          </div>
          <div className="img">
            <img
              src="https://elasticbeanstalk-us-east-1-937433307859.s3.amazonaws.com/graphic+design.jpeg"
              height="170px"
              width="100%"
              alt=""
            />
          </div>
          <div className="description">
            <h2>Web design & UX/UI Design</h2>
            <p>
              Let our intuitive designs add a bit of glam, elegance and ease to
              your products to compete the mearket.
            </p>
          </div>
          <div className="shapes">
            <div className="shapes-4"></div>
            <div className="shapes-5"></div>
            <div className="shapes-6"></div>
          </div>
        </div>
      </div>
      <center>
      <button class="button"><span>More </span></button>
      </center>
    </div>
  );
}
