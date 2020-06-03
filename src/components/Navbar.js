import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav class="flex items-center justify-between flex-wrap bg-dracula1 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          <span
            class="font-semibold text-xl text-white tracking-tight cursor-pointer hover:text-dracula3"
            onClick={() => scroll.scrollToTop()}
          >
            Michael Chen
          </span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link
              to="about"
              smooth={true}
              duration={400}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={400}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="blogs"
              smooth={true}
              duration={400}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 cursor-pointer"
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={400}
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 cursor-pointer"
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
      {/* <nav class="bg-dracula1 px-8 pt-2 shadow-md">
        <div class="-mb-px flex justify-start flex-wrap">
          <Link
            to="about"
            smooth={true}
            duration={400}
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 py-2"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={400}
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 py-2"
          >
            Projects
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={400}
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4 py-2"
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={400}
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 py-2"
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
          </a> */}
      {/* <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="#"
          >
            Products
          </a>
          <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            href="#"
          >
            Discounts
          </a>
          <a
            class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3"
            href="#"
          >
            Customers
          </a> */}
      {/* </div> */}
      {/* </nav> */}
    </div>
  );
};

export default Navbar;
