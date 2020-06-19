import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [hover, setHover] = useState({
    email: false,
    linkedin: false,
    github: false,
    youtube: false,
    medium: false,
  });

  return (
    <section id="footer">
      <div className="flex flex-col bg-background-secondary  py-2 shadow-2xl shadow-inner">
        <ul className="list-none mx-auto text-center pt-8">
          <li className="inline-block mx-2 ">
            <a href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="hover:text-copy-secondary"
                icon="envelope-square"
                size="2x"
                onMouseEnter={() => setHover({ email: true })}
                onMouseLeave={() => setHover(false)}
                transform={hover.email ? "grow-4" : null}
                title="Email"
                // alt="Email"
              />
            </a>
          </li>
          <li className="inline-block mx-2">
            <a
              href="https://www.linkedin.com/in/michaelchen13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="hover:text-copy-secondary"
                icon={["fab", "linkedin"]}
                size="2x"
                onMouseEnter={() => setHover({ linkedin: true })}
                onMouseLeave={() => setHover(false)}
                transform={hover.linkedin ? "grow-4" : null}
                title="Linkedin"
              />
            </a>
          </li>
          <li className="inline-block mx-2 ">
            <a href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="hover:text-copy-secondary"
                icon={["fab", "github-square"]}
                size="2x"
                onMouseEnter={() => setHover({ github: true })}
                onMouseLeave={() => setHover(false)}
                transform={hover.github ? "grow-4" : null}
                title="GitHub"
              />
            </a>
          </li>
          <li className="inline-block mx-2 ">
            <a
              href="https://www.youtube.com/channel/UCsVPeLiZClEYtyPHfweRniw?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="hover:text-copy-secondary"
                icon={["fab", "youtube-square"]}
                size="2x"
                onMouseEnter={() => setHover({ youtube: true })}
                onMouseLeave={() => setHover({ youtube: false })}
                transform={hover.youtube ? "grow-4" : null}
                title="YouTube"
              />
            </a>
          </li>
          <li className="inline-block mx-2 ">
            <a href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className=" hover:text-copy-secondary"
                icon={["fab", "medium"]}
                size="2x"
                onMouseEnter={() => setHover({ medium: true })}
                onMouseLeave={() => setHover({ medium: false })}
                transform={hover.medium ? "grow-4" : null}
                title="Medium"
              />
            </a>
          </li>
        </ul>
        <p className="text-center py-6">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={() => scroll.scrollToTop()} className="hover:text-copy-secondary">
            © Michael Chen 2020
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
