import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faGithubSquare, faMedium } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";
import AboutContainer from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faEnvelope,
    faLinkedin,
    faEnvelopeSquare,
    faGithubSquare,
    faMedium
  );
  return (
    <>
      <Navbar />
      <div className="px-14">
        <h1 className="text-6xl">PLACEHOLDER FOR IMAGE??</h1>
        <AboutContainer />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
