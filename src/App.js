import React, { useState } from "react";
import Collision from "./Collision.js";
import Differences from "./Differences.js";
import Memory from "./Memory.js";
import Nav from "./Nav.js";
import Perspective from "./Perspective.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggle, updateToggle] = useState(true);
  const [questionDisplay, setQuestionDisplay] = useState(true);

  return (
    <Router>
      {toggle ? <Nav /> : null}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collision">
          <Collision
            toggle={toggle}
            questionDisplay={questionDisplay}
            updateToggle={updateToggle}
            setQuestionDisplay={setQuestionDisplay}
          />
        </Route>
        <Route exact path="/differences">
          <Differences />
        </Route>
        <Route exact path="/equations">
          <Memory />
        </Route>
        <Route exact path="/perspective">
          <Perspective />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
