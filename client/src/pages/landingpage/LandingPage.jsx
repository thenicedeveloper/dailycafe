import React from "react";
// import CoffeeVid from "./public/assets/video/Coffee_Beans_Fast_Fall.mp4";
// import CoffeeVid from "../../assets/video/Coffee_Beans_Fast_Fall.mp4";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
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
      </div>
      <div className="header-overlay" />
      <div className="header-content">
        {/* <Roll top> */}
        <h2 className="landingpage-title">
          Enter here
          <span>Enter here</span>
          <span>Enter here</span>
          <span>
            <NavLink
              className="landingpage-link"
              to="/home"
            >
              Daily Cafe
            </NavLink>
          </span>
        </h2>
        {/* </Roll> */}
      </div>
    </header>
  );
};

export default LandinPage;
