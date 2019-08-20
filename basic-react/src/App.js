import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dummy from "./Dummy";

function App() {
  return (
    <Router basename="basic-react/">
      <Route path="/" exact component={Dummy} />
    </Router>
  );
}

export default App;
