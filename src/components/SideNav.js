import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const SideNav = () => {
  return (
    <div className="fixed bottom-0 w-40 left-40 right-auto block">
      <ul className="flex flex-col items-center list-none">
        <li className="h-10 w-10 inline-block">
          <Link
            to="navbar"
            smooth={true}
            duration={400}
            // class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
          >
            <FontAwesomeIcon
              icon="angle-double-up"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer ml-1"
              // onMouseEnter={() => setBigEmail(true)}
              // onMouseLeave={() => setBigEmail(false)}
              // transform={bigEmail ? "grow-4" : null}
            />
          </Link>
        </li>

        <li className="h-10 w-10">
          <Link
            to="about"
            smooth={true}
            duration={400}
            // class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
          >
            <FontAwesomeIcon
              icon="user"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer"
              // onMouseEnter={() => setBigEmail(true)}
              // onMouseLeave={() => setBigEmail(false)}
              // transform={bigEmail ? "grow-4" : null}
            />
          </Link>
        </li>

        <li className="h-10 w-10">
          <Link
            to="projects"
            smooth={true}
            duration={400}
            // class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
          >
            <FontAwesomeIcon
              icon="tasks"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer"
              // onMouseEnter={() => setBigEmail(true)}
              // onMouseLeave={() => setBigEmail(false)}
              // transform={bigEmail ? "grow-4" : null}
            />
          </Link>
        </li>

        <li className="h-10 w-10">
          <Link
            to="blogs"
            smooth={true}
            duration={400}
            // class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
          >
            <FontAwesomeIcon
              icon="edit"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer"
              // onMouseEnter={() => setBigEmail(true)}
              // onMouseLeave={() => setBigEmail(false)}
              // transform={bigEmail ? "grow-4" : null}
            />
          </Link>
        </li>

        <li className="h-10 w-10">
          <Link
            to="contact"
            smooth={true}
            duration={400}
            // class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
          >
            <FontAwesomeIcon
              icon="envelope-open-text"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer"
              // onMouseEnter={() => setBigEmail(true)}
              // onMouseLeave={() => setBigEmail(false)}
              // transform={bigEmail ? "grow-4" : null}
            />
          </Link>
        </li>

        <li className="h-10 w-10">
          <Link to="footer" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="angle-double-down"
              size="2x"
              color="#81A1C1"
              className="cursor-pointer ml-1"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
