import React from "react";
import { animateScroll as scroll } from "react-scroll";

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
          > */}
          {/* <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /> */}
          {/* </svg> */}
          <span
            class="font-semibold text-xl text-white tracking-tight"
            onClick={() => scroll.scrollToTop()}
          >
            Placeholder
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
            <a
              href="#about"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
            >
              About
            </a>
            <a
              href="#projects"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
            >
              Projects
            </a>
            <a
              href="#blog"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3 mr-4"
            >
              Blog
            </a>
            <a href="#contact" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-dracula3">
              Contact
            </a>
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
