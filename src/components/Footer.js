import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const [bigEmail, setBigEmail] = useState(false);
  const [bigLinkedIn, setBigLinkedin] = useState(false);
  const [bigGithub, setBigGithub] = useState(false);
  const [bigYoutube, setBigYoutube] = useState(false);
  const [bigMedium, setBigMedium] = useState(false);

  return (
    <section id="footer">
      <div className="block bg-dracula1 h-50 py-2">
        <ul className="list-none mx-auto text-center pt-8">
          <li className="inline-block mx-2 ">
            <a href="mailto:michaelchengaming@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon="envelope-square"
                size="2x"
                color={bigEmail ? "#8BE9FD" : "#81A1C1"}
                onMouseEnter={() => setBigEmail(true)}
                onMouseLeave={() => setBigEmail(false)}
                transform={bigEmail ? "grow-4" : null}
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
                icon={["fab", "linkedin"]}
                size="2x"
                color={bigLinkedIn ? "#8BE9FD" : "#81A1C1"}
                onMouseEnter={() => setBigLinkedin(true)}
                onMouseLeave={() => setBigLinkedin(false)}
                transform={bigLinkedIn ? "grow-4" : null}
                title="Linkedin"
              />
            </a>
          </li>
          <li className="inline-block mx-2 ">
            <a href="https://github.com/michaelcheny" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fab", "github-square"]}
                size="2x"
                color={bigGithub ? "#8BE9FD" : "#81A1C1"}
                onMouseEnter={() => setBigGithub(true)}
                onMouseLeave={() => setBigGithub(false)}
                transform={bigGithub ? "grow-4" : null}
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
                icon={["fab", "youtube-square"]}
                size="2x"
                color={bigYoutube ? "#8BE9FD" : "#81A1C1"}
                onMouseEnter={() => setBigYoutube(true)}
                onMouseLeave={() => setBigYoutube(false)}
                transform={bigYoutube ? "grow-4" : null}
                title="YouTube"
              />
            </a>
          </li>
          <li className="inline-block mx-2 ">
            <a href="https://medium.com/@michaelychen" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fab", "medium"]}
                size="2x"
                color={bigMedium ? "#8BE9FD" : "#81A1C1"}
                onMouseEnter={() => setBigMedium(true)}
                onMouseLeave={() => setBigMedium(false)}
                transform={bigMedium ? "grow-4" : null}
                title="Medium"
              />
            </a>
          </li>
        </ul>
        <p className="text-center text-dracula4 py-6">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={() => scroll.scrollToTop()} className="hover:text-dracula3">
            © Michael Chen 2020
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
