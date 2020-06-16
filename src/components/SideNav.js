import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const SideNav = () => {
  const [hover, setHoover] = useState({
    upArrow: false,
    about: false,
    projects: false,
    blogs: false,
    contact: false,
    downArrow: false,
  });

  return (
    <div className="hidden xl:block fixed object-none object-left bottom-0 w-40  border border-dracula6">
      <ul className="flex flex-col justify-center items-center list-none">
        <li className="h-12 w-12 inline-block">
          <Link to="navbar" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="angle-double-up"
              size="1x"
              color={hover.upArrow ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer ml-1"
              onMouseEnter={() => setHoover({ upArrow: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.upArrow ? "grow-5" : null}
              title="Go back to top"
            />
          </Link>
        </li>

        <li className="h-12 w-12">
          <Link to="about" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="user"
              size="1x"
              color={hover.about ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer"
              onMouseEnter={() => setHoover({ about: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.about ? "grow-5" : null}
              title="Go to about"
            />
          </Link>
        </li>

        <li className="h-12 w-12">
          <Link to="projects" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="tasks"
              size="1x"
              color={hover.projects ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer"
              onMouseEnter={() => setHoover({ projects: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.projects ? "grow-5" : null}
              title="Go to projects"
            />
          </Link>
        </li>

        <li className="h-12 w-12">
          <Link to="blogs" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="edit"
              size="1x"
              color={hover.blogs ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer"
              onMouseEnter={() => setHoover({ blogs: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.blogs ? "grow-5" : null}
              title="Go to blogs"
            />
          </Link>
        </li>

        <li className="h-12 w-12">
          <Link to="contact" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="envelope-open-text"
              size="1x"
              color={hover.contact ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer"
              onMouseEnter={() => setHoover({ contact: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.contact ? "grow-4" : null}
              title="Go to contact"
            />
          </Link>
        </li>

        <li className="h-12 w-12">
          <Link to="footer" smooth={true} duration={400}>
            <FontAwesomeIcon
              icon="angle-double-down"
              size="1x"
              color={hover.downArrow ? "#8BE9FD" : "#81A1C1"}
              className="cursor-pointer ml-1"
              onMouseEnter={() => setHoover({ downArrow: true })}
              onMouseLeave={() => setHoover(false)}
              transform={hover.downArrow ? "grow-4" : null}
              title="Go to bottom"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
