import React from "react";
import Canvas from "./Canvas.js";
import Math from "./Math.js";
import "./App.css";

function Collision(props) {
  const { toggle, questionDisplay, updateToggle, setQuestionDisplay } = props;
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

export default Collision;
