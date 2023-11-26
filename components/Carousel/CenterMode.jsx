import "./CenterMode.css"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", color: "orange", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
export default class CenterMode extends Component {
  
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000      ,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    return (
      
      <div className="cards">
        
        <Slider {...settings}>
          <div>
            <img src="../public/Dustguard.png" alt="" />
          </div>
          <div>
          <img src="../public/hygiene.png" alt="" />
          </div>
          <div>
          <img src="../public/KitchenKing.png" alt="" />
          </div>
          <div>
          <img src="../public/NN.png" alt="" />
          </div>
          <div>
            <img src="../public/Dustguard.png" alt="" />
          </div>
          <div>
          <img src="../public/hygiene.png" alt="" />
          </div>
          <div>
          <img src="../public/KitchenKing.png" alt="" />
          </div>
          <div>
          <img src="../public/NN.png" alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}
