import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section id="footer">
      <div className="block bg-dracula1 p-6">
        <ul className="list-none mx-auto text-center">
          <li className="inline-block mx-1 ">
            <FontAwesomeIcon icon="envelope-square" size="3x" color="white" />
          </li>
          <li className="inline-block mx-1">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="white" />
          </li>
          <li className="inline-block mx-1 ">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" color="white" />
          </li>
          <li className="inline-block mx-1 ">
            <FontAwesomeIcon icon={["fab", "medium"]} size="3x" color="white" />
          </li>
        </ul>
        <p className="text-center text-dracula4 py-2">© Michael Chen 2020</p>
        <span
          onClick={() => scroll.scrollToTop()}
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dracula3 hover:bg-dracula4 mt-4 lg:mt-0"
        >
          Top
        </span>
      </div>
    </section>
  );
};

export default Footer;
