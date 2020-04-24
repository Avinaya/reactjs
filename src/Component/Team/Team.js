import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Team.css'
class Team extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="margin">
        <section className="team">
          <div className="container">
            <h1>Our Team</h1>
            <Slider {...settings}>
            
            <div>

            <div className="card">
            <div className="box">
              <img src={require("../../Images/yogee.jpg")} alt="team img" />
              <h4>Yogendra Bhattarai</h4>
              <h5>.Net Developer</h5>
              <p></p>
            </div>
          </div>

          <div className="card">
          <div className="box">
            <img src={require("../../Images/bishow.png")} alt="team img" />
            <h4>Bishow Shrestha</h4>
            <h5>Mobile App Developer</h5>
            <p></p>
          </div>    
        </div>

        <div className="card">
        <div className="box">
          <img src={require("../../Images/subash.jpg")} alt="team img" />
          <h4>Subash Nagarkoti</h4>
          <h5>Graphic Designer</h5>
          <p></p>
        </div>    
      </div>
            
            </div>


            <div>

            <div className="card">
            <div className="box">
              <img src={require("../../Images/sagar.jpg")} alt="team img" />
              <h4>Sagar Shrestha</h4>
              <h5>React Js</h5>
              <p></p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={require("../../Images/avinaya.png")} alt="team img" />
              <h4>Avinaya Acharya</h4>
              <h5>Java Developer</h5>
              <p></p>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <img src={require("../../Images/yogee.jpg")} alt="team img" />
              <h4>Yogendra Bhattarai</h4>
              <h5>.Net Developer</h5>
              <p></p>
            </div>
          </div>
            
            </div>
            
            
            
            
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}
export default Team;
