import React from "react";
import Html from "../assets/images/html5Icon.png";
import Css from "../assets/images/cssIcon.png";
import Ruby from "../assets/images/rubyIcon.png";
import Sql from "../assets/images/sqlIcon.png";
import Rails from "../assets/images/railsIcon.png";
import Javascript from "../assets/images/javascriptIcon.png";
import Git from "../assets/images/gitIcon.png";
import ReactIcon from "../assets/images/reactIcon.png";
import Redux from "../assets/images/reduxIcon.png";

const SkillsSection = () => {
  return (
    <section id="skills" className=" h-half border border-dracula6">
      <div className=" inline-flex flex-row justify-start">
        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/20909/html-5">
          <img src={Html} alt="HTML5 Language Icon" title="HTML" className="flex h-10" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/css3">
          <img src={Css} alt="CSS Language Icon" title="CSS" className="flex h-10" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/sql">
          <img src={Sql} alt="Sql Icon" title="SQL" className="flex h-10" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://icons8.com/icons/set/ruby-programming-language"
        >
          <img src={Ruby} alt="Ruby Programming Icon" title="Ruby" className="flex h-10" />
        </a>

        <img src={Rails} alt="Rails Programming Icon" title="Rails" className="flex h-10 " />

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/javascript">
          <img
            src={Javascript}
            alt="Javascript Language Icon"
            title="Javascript"
            className="flex h-10"
          />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/react-native">
          <img src={ReactIcon} alt="React Programming Icon" title="Reactjs" className="flex h-10" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/redux">
          <img src={Redux} alt="Redux Programming Icon" title="Redux" className="flex h-10" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/git">
          <img src={Git} alt="Git Icon" title="Git" className="flex h-10" />
        </a>
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">
        icons by Icons8
      </a>
    </section>
  );
};

export default SkillsSection;
