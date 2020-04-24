import React from "react";
import Slider from "infinite-react-carousel";
import "./SimpleSlider.css";

const SimpleSlider = () => (
  <div className="slider">
    <Slider dots>
      <div className="web">
        <div className="web_description">
          <p>
            World Class <strong>Digital Platform</strong> For Your Organization
          </p>
          <span className="description">  
            Our team will help to choose the best technology for
            your project. We will deliver productive, engaging and reliable web
            solutions that bring you the business outcomes that you deserve.
          </span>
        </div>
        <div className="web_image">
          <img
            src={require("../../Images/webImage.png")} 
            alt="Web App"
            height="400px"
            width="600px"
            

            
          />
        </div>
      </div>

      <div className="mobile">
        <div className="mobile_description">
          <p>
            Mobile Solutions <strong>That Fit</strong> Your Enterprise
          </p>
          <span className="description">
            Add mobile capabilities and reap the benefits of a connected
            infrastructure and platform. With your system requirements in mind,
            we develop custom backend, middleware and frontend mobile solutions.
          </span>
        </div>
        <div className="mobile_image">
          <img
            src={require("../../Images/mobile.png")} 
            alt="Mobile App"
            height="400px"
            width="600px"

          />
        </div>
      </div>
    </Slider>
  </div>
);
export default SimpleSlider;
