import React from "react";
// import CoffeeVid from "./public/assets/video/Coffee_Beans_Fast_Fall.mp4";
// import CoffeeVid from "../../assets/video/Coffee_Beans_Fast_Fall.mp4";
import "./LandingPage.css";
import { Link } from "react-router-dom";
// import Roll from "react-reveal/Roll";

const LandinPage = () => {
  return (
    <header className="v-header ">
      <div className="fullscreen-video-wrap">
        <video
          width="100%"
          id="videoBG"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
        >
          <source
            type="video/mp4"
            src="DrinkingCoffee.mp4"
            data-reactid=".0.1.0.0.0"
          />
        </video>

        {/* <video
          width="100%"
          id="videoBG"
          type="video/mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          data-reactid=".0.1.0.0"
        >
          <source
            type="video/mp4"
            src="assets/video/Coffee_Beans_Fast_Fall.mp4"
            data-reactid=".0.1.0.0.0"
          />
        </video> */}
      </div>
      <div className="header-overlay" />
      <div className="header-content">
        {/* <Roll top> */}
        <h2>
          Daily Cafe
          <span>Daily Cafe</span>
          <span>Daily Cafe</span>
          <span>
            <Link className="link" to="/home">Enter Cafe</Link>
          </span>
        </h2>
        {/* </Roll> */}
      </div>
    </header>
  );
};

export default LandinPage;
