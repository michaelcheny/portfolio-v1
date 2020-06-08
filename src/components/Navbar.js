import React, { useState } from "react";
import { animateScroll as scroll, Link } from "react-scroll";

const Navbar = () => {
  const [shown, setShown] = useState(false);

  return (
    <div id="navbar">
      <nav className="flex items-center justify-between flex-wrap bg-dracula1 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span
            className="font-semibold text-xl text-white tracking-tight cursor-pointer hover:text-dracula3"
            onClick={() => scroll.scrollToTop()}
          >
            Michael Chen
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
            shown ? null : "sm:hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="about"
              smooth={true}
              duration={400}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={400}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={400}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={400}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="../src/assets/resume/michaelchenresume.pdf"
              download
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-dracula3 hover:bg-dracula4 mt-4 lg:mt-0"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
