import React from "react";
import Placeholder from "../assets/images/1920x1080.png";

const MainImage = () => {
  return (
    <div
      className="bg-cover bg-center h-half lg:h-screen"
      style={{
        backgroundImage: `url("https://baconmockup.com/1920/1080")`,
      }}
    >
      {/* <image className="" /> */}
    </div>
  );
};

export default MainImage;
