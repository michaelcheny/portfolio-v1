import React, { useState, useEffect } from "react";
// import Icon from "../assets/images/theme.png";
// might remove theme icon later

// TODO: set the theme links to class block, wire it up to app.js to change theme

const ThemeDropdown = () => {
  const [shown, setShown] = useState(false);

  const handleEscape = (event) => {
    if (event.key === "Esc" || event.key === "Escape") {
      setShown(false);
      console.log("poop");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [shown]);

  return (
    <div className="block mt-4 md:inline-block md:mt-0 cursor-pointer relative ">
      <span className="z-10 relative hover:text-copy-secondary" onClick={() => setShown((p) => !p)}>
        Theme
      </span>
      {shown ? (
        <button
          className="fixed inset-0 h-full w-full bg-dracula-1 opacity-25 cursor-default"
          tabIndex="-1"
          // onKeyPress={handleEscape}
          onClick={() => setShown(false)}
        ></button>
      ) : null}

      <div
        className={`${
          shown ? "block" : "hidden"
        } absolute border-2 bg-dracula-1 border-background-primary py-2 my-2 rounded-md shadow shadow-xl`}
      >
        <a href="" className="block px-4 py-1 hover:text-copy-secondary hover:bg-background-primary">
          Dark
        </a>
        <a href="" className="block px-4 py-1 hover:text-copy-secondary hover:bg-background-primary">
          Light
        </a>
        <a href="" className="block px-4 py-1 hover:text-copy-secondary hover:bg-background-primary">
          Dracula
        </a>
        <a href="" className="block px-4 py-1 hover:text-copy-secondary hover:bg-background-primary">
          Nord
        </a>
      </div>
    </div>
  );
};

export default ThemeDropdown;
