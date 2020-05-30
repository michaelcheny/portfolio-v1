import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AboutContainer from "./containers/AboutContainer";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl">PLACEHOLDER FOR IMAGE??</h1>
      <AboutContainer />
    </div>
  );
};

export default App;
