import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faGithubSquare,
  faMedium,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faEnvelopeSquare,
  faAngleDoubleUp,
  faAngleDoubleDown,
  faUser,
  faTasks,
  faEdit,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/Navbar";
import AboutContainer from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
// import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";
import BlogPage from "./containers/BlogPage";
import ResumePage from "./containers/ResumePage";
import MainImage from "./components/MainImage";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faEnvelope,
    faLinkedin,
    faEnvelopeSquare,
    faGithubSquare,
    faMedium,
    faYoutubeSquare,
    faAngleDoubleUp,
    faAngleDoubleDown,
    faUser,
    faTasks,
    faEdit,
    faEnvelopeOpenText
  );

  const [theme, setTheme] = useState("light");

  return (
    <div className={`theme-${theme} bg-background-primary text-copy-primary`}>
      <Router>
        <Navbar setTheme={setTheme} />
        <Switch>
          <Route path="/" exact>
            {/* <SideNav /> */}
            <MainImage />
            <div className="flex justify-center">
              {/* <div className="hidden lg:w-64  lg:inline-block bg-pink-800 border border-orange-700 ml-0"></div> */}

              <div className=" mx-auto border border-dracula-3 flex-grow inline-block ">
                <AboutContainer />
                <SkillsSection />
                <ProjectsSection />
                {/* <BlogSection /> */}
                <ContactSection />
              </div>

              {/* <div className="hidden lg:inline-block lg:w-64   bg-pink-800 mr-0"></div> */}
            </div>
          </Route>
          <Route path="/blogs" component={BlogPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
