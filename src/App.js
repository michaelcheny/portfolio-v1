import React from "react";
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
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <SideNav />
            <div className="px-14 mx-auto border border-dracula3">
              <h1 className="text-6xl">PLACEHOLDER FOR IMAGE??</h1>
              <AboutContainer />
              <ProjectsSection />
              {/* <BlogSection /> */}
              <ContactSection />
              <Footer />
            </div>
          </Route>
          <Route path="/blogs" component={BlogPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
