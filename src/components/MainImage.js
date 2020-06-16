import React from "react";
import Placeholder from "../assets/images/1920x1080.png";

const MainImage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url("https://loremflickr.com/cache/resized/2849_9140904545_0a8fae7610_h_1280_711_nofilter.jpg")`,
      }}
    >
      {/* <image className="" /> */}
    </div>
  );
};

export default MainImage;
