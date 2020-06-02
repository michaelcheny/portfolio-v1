import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <section id="footer">
      <div className="block bg-nord-0 p-6">
        <ul className="list-none mx-auto text-center">
          <li className="inline-block mx-1 border border-red-500">
            <FontAwesomeIcon icon="envelope-square" size="3x" color="white" />
          </li>
          <li className="inline-block mx-1 border border-red-500">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="white" />
          </li>
          <li className="inline-block mx-1 border border-red-500">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="3x" color="white" />
          </li>
          <li className="inline-block mx-1 border border-red-500">
            <FontAwesomeIcon icon={["fab", "medium"]} size="3x" color="white" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
