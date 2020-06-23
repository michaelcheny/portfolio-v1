import React, { useState, useEffect } from "react";
// import Icon from "../assets/images/theme.png";
// might remove theme icon later

const themes = ["Dark", "Light", "Dracula", "Nord", "Monokai"];
const ThemeDropdown = ({ setTheme }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Esc" || event.key === "Escape") {
        setShown(false);
        console.log("poop");
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="block mt-4 md:inline-block md:mt-0 cursor-pointer relative ">
      <span className="z-10 relative hover:text-copy-secondary" onClick={() => setShown((p) => !p)}>
        Theme
      </span>
      {shown ? (
        <button
          className="fixed inset-0 h-full w-full bg-dracula-1 opacity-25 cursor-default"
          tabIndex="-1"
          onClick={() => setShown(false)}
        ></button>
      ) : null}

      <div
        className={`${
          shown ? "block" : "hidden"
        } absolute border-2 bg-background-secondary border-background-primary py-2 my-2 rounded-md shadow shadow-xl`}
      >
        {themes.map((theme) => (
          <Theme theme={theme} setShown={setShown} setTheme={setTheme} />
        ))}
      </div>
    </div>
  );
};

export default ThemeDropdown;

const Theme = ({ theme, setShown, setTheme }) => {
  return (
    <span
      onClick={() => {
        setTheme(theme.toLowerCase());
        localStorage.setItem("theme", theme.toLowerCase());
        setShown(false);
      }}
      className="block px-5 py-1 hover:text-copy-secondary hover:bg-background-primary"
    >
      {theme}
    </span>
  );
};
