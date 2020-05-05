import React, { useState } from "react";
import "./App.css";
import Canvas from "./Canvas.js";
import Math from "./Math.js";

function App() {
  const [toggle, updateToggle] = useState(true);
  const [questionDisplay, setQuestionDisplay] = useState(true);

  return (
    <div className="App">
      <Canvas
        toggle={toggle}
        updateToggle={updateToggle}
        setQuestionDisplay={setQuestionDisplay}
      />
      <Math
        toggle={toggle}
        questionDisplay={questionDisplay}
        setQuestionDisplay={setQuestionDisplay}
      />
    </div>
  );
}

export default App;
