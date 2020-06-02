import React from "react";
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
      </div>
    </section>
  );
};

export default Footer;
