import React from "react";
import Placeholder from "../assets/images/1920x1080.png";

const MainImage = () => {
  return (
    <div
      className="flex justify-center bg-cover bg-center h-half lg:h-screen z-10"
      style={{
        backgroundImage: `url("http://via.placeholder.com/1920x1080")`,
      }}
    >
      <h1 className="self-center text-nord-6 text-6xl">TEXT</h1>
    </div>
  );
};

export default MainImage;
