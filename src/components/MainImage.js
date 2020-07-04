import React from "react";
import Placeholder from "../assets/images/1920x1080.png";

const MainImage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center h-half lg:h-screen z-10 text-7xl"
      style={{
        backgroundImage: `url("http://via.placeholder.com/1920x1080")`,
      }}
    >
      <p className="">Hi, my name is</p>
      <p className="text-copy-secondary">Michael Chen</p>
    </div>
  );
};

export default MainImage;
