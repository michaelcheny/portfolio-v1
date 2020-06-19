import React from "react";
import headshot from "../assets/images/DSC_0163.JPG";
// import Html from "../assets/images/html5Icon.png";
// import Css from "../assets/images/cssIcon.png";
// import Ruby from "../assets/images/rubyIcon.png";
// import Sql from "../assets/images/sqlIcon.png";
// import Rails from "../assets/images/railsIcon.png";
// import Javascript from "../assets/images/javascriptIcon.png";
// import Git from "../assets/images/gitIcon.png";
// import ReactIcon from "../assets/images/reactIcon.png";
// import Redux from "../assets/images/reduxIcon.png";

const AboutContainer = () => {
  return (
    <section className="h-screen flex justify-center" id="about">
      <div className=" md:w-4/5 flex flex-col md:mx-8 pb-2 justify-center">
        <h3 className="text-2xl">
          About Me
          <hr className=" w-5/12 h-0 pb-4 border-dracula-4 border-t" />
        </h3>
        <div className="flex mb-4 flex-col lg:flex-row relative">
          <img
            className=" object-scale-down h-56 md:h-64 lg:h-72 xl:h-80 lg:pl-8 "
            src={headshot}
            alt="placeholder"
          />
          {/* <svg
            className="absolute inset-y-0 h-full fill-current bg-dracula2 w-32 -ml-16 object-right"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}
          <div className=" pt-6 my-auto sm:pt-8 lg:pt-0 px-12 self-center leading-snug max-w-xl ">
            <p className="pb-2 ">Hello, I am a software engineer based in San Francisco, California.</p>
            <p className="pb-2">
              I've been a tech enthusiast since I was a youngster. I completed Flatiron's Full Stack
              Software Engineering curriculum in early 2020. I build things to help simplify and enhance
              people's lives. My goal is to build ____.
            </p>
            <p>
              I'm also an air fryer enthusiast, a sous vide fanatic, and a coffee connoisseur. I love all
              kinds of pasta.
            </p>
          </div>
          {/* add icons here */}
        </div>
        {/* <div className=" inline-flex flex-row justify-start border border-dracula3">
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
        </a> */}
      </div>{" "}
    </section>
  );
};

export default AboutContainer;
