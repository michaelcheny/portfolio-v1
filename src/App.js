import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-6xl">hi</h1>
    </div>
  );
};

export default App;
