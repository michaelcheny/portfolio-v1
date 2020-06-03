import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section id="footer">
      <div className="block bg-dracula1 p-12">
        <ul className="list-none mx-auto text-center">
          <li className="inline-block mx-1 ">
            <a href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="envelope-square" size="2x" color="#81A1C1" />
            </a>
          </li>
          <li className="inline-block mx-1">
            <a
              href="https://www.linkedin.com/in/michaelchen13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" color="#81A1C1" />
            </a>
          </li>
          <li className="inline-block mx-1 ">
            <a href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" color="#81A1C1" />
            </a>
          </li>
          <li className="inline-block mx-1 ">
            <a
              href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "youtube-square"]} size="2x" color="#81A1C1" />
            </a>
          </li>
          <li className="inline-block mx-1 ">
            <a href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fab", "medium"]}
                size="2x"
                color="#81A1C1"
                // transform="grow-3"
              />
            </a>
          </li>
        </ul>
        <p className="text-center text-dracula4 py-6" onClick={() => scroll.scrollToTop()}>
          © Michael Chen 2020
        </p>
        {/* <span
          onClick={() => scroll.scrollToTop()}
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dracula3 hover:bg-dracula4 mt-4 lg:mt-0"
        >
          Top
        </span> */}
      </div>
    </section>
  );
};

export default Footer;
