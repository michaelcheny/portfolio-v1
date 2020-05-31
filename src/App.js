import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutContainer from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl">PLACEHOLDER FOR IMAGE??</h1>
      <AboutContainer />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default App;
