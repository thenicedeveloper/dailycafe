import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <video
        width="500px"
        
        id="videoBG"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        muted={true}
        data-reactid=".0.1.0.0"
      >
        <source
          type="video/mp4"
          src="public/video/DrinkingCoffee.mp4"
          data-reactid=".0.1.0.0.0"
        />
      </video>
    </div>
  );
};

export default HomePage;
