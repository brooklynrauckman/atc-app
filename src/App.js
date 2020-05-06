import React, { useState } from "react";
import "./App.css";
import Collision from "./Collision.js";
import Differences from "./Differences.js";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggle, updateToggle] = useState(true);
  const [questionDisplay, setQuestionDisplay] = useState(true);

  return (
    <Router>
      {toggle ? <Nav /> : null}
      <Switch>
        <Route path="/differences">
          <Differences />
        </Route>
        <Route path="/">
          <Collision
            toggle={toggle}
            questionDisplay={questionDisplay}
            updateToggle={updateToggle}
            setQuestionDisplay={setQuestionDisplay}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
