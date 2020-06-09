import React from "react";
import headshot from "../assets/images/DSC_0163.JPG";
import Html from "../assets/images/html5Icon.png";
import Css from "../assets/images/cssIcon.png";
import Ruby from "../assets/images/rubyIcon.png";
import Sql from "../assets/images/sqlIcon.png";
import Rails from "../assets/images/railsIcon.png";
import Javascript from "../assets/images/javascriptIcon.png";
import Git from "../assets/images/gitIcon.png";
import ReactIcon from "../assets/images/reactIcon.png";
import Redux from "../assets/images/reduxIcon.png";

const AboutContainer = () => {
  return (
    <section
      className="h-screen max-w-screen-lg mx-auto flex flex-col border border-dracula6"
      id="about"
    >
      <div className=" m-auto pb-20 border border-dracula5">
        <h1 className="text-4xl text-gray-500">About Me</h1>
        <div className="flex mb-4 sm:flex-col md:flex-row">
          <img className="w-auto h-64" src={headshot} alt="placeholder" />
          <p className="text-gray-400 pt-12 pl-3">
            God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank
            me. Nobody's killing me until after I catch my wife with another man. Listen to your sister
            Morty; to live is to risk it all; otherwise you're just an inert chunk of randomly assembled
            molecules drifting wherever the universe blows you. Oh, I'm sorry, Jerry, I didn't see you
            there, how much of that did you hear? Do you know how many characters there are in the
            Simpsons Morty? There's like a-a billion characters, M-Morty. There was an episode where
            Former President BUSH was their neighbor!
          </p>
          {/* add icons here */}
        </div>
        <div className="flex flex-row justify-start">
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
      </div>{" "}
    </section>
  );
};

export default AboutContainer;
