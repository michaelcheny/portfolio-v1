import React, { useState } from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { Link as Navlink, useLocation } from "react-router-dom";
import ThemeDropdown from "./ThemeDropdown";

const Navbar = ({ setTheme }) => {
  const [shown, setShown] = useState(false);

  let location = useLocation();

  return (
    <section id="navbar" className="">
      <nav className="flex items-center justify-between flex-wrap p-6 bg-background-secondary shadow-outline z-20">
        <div className="flex items-center flex-shrink-0  mr-6">
          <Navlink to="/">
            <span
              className="font-semibold text-xl tracking-tight cursor-pointer hover:text-copy-secondary"
              onClick={() => scroll.scrollToTop()}
            >
              Michael Chen
            </span>
          </Navlink>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-copy-primary border-nord-4 hover:bg-dracula-4 hover:text-copy-secondary hover:border-transparent"
            onClick={() => setShown((prev) => !prev)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={` ${
            shown ? null : "hidden"
          } w-full block flex-grow md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            {location.pathname === "/" ? (
              <>
                <Link
                  to="about"
                  smooth={true}
                  duration={400}
                  className="block mt-4 md:inline-block md:mt-0  hover:text-copy-secondary mr-4 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={400}
                  offset={-150}
                  className="block mt-4 md:inline-block md:mt-0  hover:text-copy-secondary mr-4 cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={400}
                  className="block mt-4 md:inline-block md:mt-0 hover:text-copy-secondary mr-4 cursor-pointer"
                >
                  Projects
                </Link>
                <Navlink
                  // target="_blank"
                  to="/blogs"
                  smooth={true}
                  duration={400}
                  className="block mt-4 md:inline-block md:mt-0 hover:text-copy-secondary mr-4 cursor-pointer"
                >
                  Blogs
                </Navlink>
                <Link
                  to="contact"
                  smooth={true}
                  duration={400}
                  className="block mt-4 md:inline-block md:mt-0 hover:text-copy-secondary mr-4 cursor-pointer"
                >
                  Contact
                </Link>

                <ThemeDropdown setTheme={setTheme} />
              </>
            ) : (
              <Navlink
                to="/"
                className="block mt-4 md:inline-block md:mt-0 hover:text-copy-secondary cursor-pointer"
              >
                Home
              </Navlink>
            )}
          </div>
          <div>
            <Navlink
              to="/resume"
              // new tab... yay or nay?
              // target="_blank"
              class="inline-block text-sm px-4 py-2 leading-none border rounded border-copy-primary hover:border-transparent hover:text-copy-secondary hover:bg-dracula-4 mt-4 lg:mt-0"
            >
              Resume
            </Navlink>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
