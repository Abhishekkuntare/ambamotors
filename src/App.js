import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
};

export default App;
