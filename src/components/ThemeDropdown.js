import React, { useState } from "react";
// import Icon from "../assets/images/theme.png";
// might remove theme icon later

// TODO: set the theme links to class block, wire it up to app.js to change theme

const ThemeDropdown = () => {
  const [shown, setShown] = useState(false);

  return (
    <div className="block mt-4 md:inline-block md:mt-0 cursor-pointer relative ">
      <span className="hover:text-copy-secondary" onClick={() => setShown((p) => !p)}>
        Theme
      </span>

      <div className={`${shown ? "block" : "hidden"} absolute`}>
        <a href="">Dark</a>
        <a href="">Light</a>
        <a href="">Dracula</a>
        <a href="">Nord</a>
      </div>
    </div>
  );
};

export default ThemeDropdown;
