import React, { useState, useEffect } from "react";
import "./Memory.css";

const a = Math.floor(Math.random() * (8 + 1)) + 1;
const b = Math.floor(Math.random() * (8 + 1)) + 1;
const c = Math.floor(Math.random() * (8 + 1)) + 1;
const a1 = Math.floor(Math.random() * (8 + 1)) + 1;
const b1 = Math.floor(Math.random() * (8 + 1)) + 1;
const c1 = Math.floor(Math.random() * (8 + 1)) + 1;
const a2 = Math.floor(Math.random() * (8 + 1)) + 1;
const b2 = Math.floor(Math.random() * (8 + 1)) + 1;
const c2 = Math.floor(Math.random() * (8 + 1)) + 1;

function Memory() {
  const equation1 = `A = ${a} \u00A0\u00A0\u00A0 C = ${c} \u00A0\u00A0\u00A0 B = ${b}`;
  const equation2 = `C = ${c1} \u00A0\u00A0\u00A0 A = ${a1} \u00A0\u00A0\u00A0 B = ${b1}`;
  const equation3 = `C = ${c2} \u00A0\u00A0\u00A0 B = ${b2} \u00A0\u00A0\u00A0 A = ${a2}`;
  const equationSet = [equation1, "", equation2, "", equation3, ""];

  const [activeSlide, updateActiveSlide] = useState(0);
  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [score, updateScore] = useState(0);
  const [incorrect, updateIncorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [flip, setFlip] = useState(false);

  let timer = null;

  const nextSlide = () => {
    setAnswer(null);
    setAnswered(0);
    updateActiveSlide(activeSlide + 1);
    setFlip(!flip);
  };

  const correctPressA = () => {
    updateScore(score + 1);
    setAnswer(null);
    setAnswered(1);
    blurInputA();
    focusInputB();
  };
  const correctPressB = () => {
    updateScore(score + 1);
    setAnswer(null);
    setAnswered(2);
    blurInputB();
    focusInputC();
  };
  const correctPressC = () => {
    updateScore(score + 1);
    setAnswer(null);
    setAnswered(3);
    blurInputC();
  };

  const inCorrectPressA = () => {
    updateIncorrect(incorrect + 1);
    setAnswer(null);
    setAnswered(1);
    blurInputA();
    focusInputB();
  };
  const inCorrectPressB = () => {
    updateIncorrect(incorrect + 1);
    setAnswer(null);
    setAnswered(2);
    blurInputB();
    focusInputC();
  };

  const inCorrectPressC = () => {
    updateIncorrect(incorrect + 1);
    setAnswer(null);
    setAnswered(3);
    blurInputC();
  };

  const blurInputA = () => {
    document.getElementById("a").blur();
  };
  const focusInputB = () => {
    document.getElementById("b").focus();
  };
  const blurInputB = () => {
    document.getElementById("b").blur();
  };
  const focusInputC = () => {
    document.getElementById("c").focus();
  };
  const blurInputC = () => {
    document.getElementById("c").blur();
  };

  useEffect(() => {
    if (start === true) {
      timer = setTimeout(() => {
        if (activeSlide < equationSet.length) {
          if (activeSlide % 2 !== 0 && answered < 3) {
            if (answered === 2) {
              updateIncorrect(incorrect + 1);
              nextSlide();
            }
            if (answered === 1) {
              updateIncorrect(incorrect + 2);
              nextSlide();
            }
            if (answered === 0) {
              updateIncorrect(incorrect + 3);
              nextSlide();
            }
          }
          nextSlide();
        } else {
          setStart(false);
          window.location.reload(false);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide, start, answered, flip]);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === "0") setAnswer(0);
      if (key === "1") setAnswer(1);
      if (key === "2") setAnswer(2);
      if (key === "3") setAnswer(3);
      if (key === "4") setAnswer(4);
      if (key === "5") setAnswer(5);
      if (key === "6") setAnswer(6);
      if (key === "7") setAnswer(7);
      if (key === "8") setAnswer(8);
      if (key === "9") setAnswer(9);
    }
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  useEffect(() => {
    if (activeSlide === 1 && answered === 0) {
      if (answer === a) correctPressA();
      if (answer !== null && answer !== a) inCorrectPressA();
    }
    if (activeSlide === 1 && answered === 1) {
      if (answer === b) correctPressB();
      if (answer !== null && answer !== b) inCorrectPressB();
    }
    if (activeSlide === 1 && answered === 2) {
      if (answer === c) correctPressC();
      if (answer !== null && answer !== c) inCorrectPressC();
    }
    if (activeSlide === 3 && answered === 0) {
      if (answer === a1) correctPressA();
      if (answer !== null && answer !== a1) inCorrectPressA();
    }
    if (activeSlide === 3 && answered === 1) {
      if (answer === b1) correctPressB();
      if (answer !== null && answer !== b1) inCorrectPressB();
    }
    if (activeSlide === 3 && answered === 2) {
      if (answer === c1) correctPressC();
      if (answer !== null && answer !== c1) inCorrectPressC();
    }
    if (activeSlide === 5 && answered === 0) {
      if (answer === a2) correctPressA();
      if (answer !== null && answer !== a2) inCorrectPressA();
    }
    if (activeSlide === 5 && answered === 1) {
      if (answer === b2) correctPressB();
      if (answer !== null && answer !== b2) inCorrectPressB();
    }
    if (activeSlide === 5 && answered === 2) {
      if (answer === c2) correctPressC();
      if (answer !== null && answer !== c2) inCorrectPressC();
    }
  }, [answer, activeSlide, answered]);

  return (
    <div className="memory">
      {start === false ? (
        <React.Fragment>
          <div className="instructions">
            <h1>Equations Memory Challenge Instructions:</h1>
            <p>
              A card with three equations will appear for 2-6 seconds. Then, you
              will be prompted to recall the value of each variable. Choose a
              level below to begin.
            </p>
            <p className="good-luck-mem">Good Luck!</p>
          </div>
          <div className="levels">
            <button
              className="level"
              onClick={() => {
                setStart(true);
                updateActiveSlide(0);
              }}
            >
              Level 1
            </button>
            <button className="level">Level 2</button>
            <button className="level">Level 3</button>
          </div>
        </React.Fragment>
      ) : null}
      <div></div>
      <div>
        {start && activeSlide < equationSet.length ? (
          <div className="scene">
            <div className={flip ? "card-eq" : "flip-card-eq"}>
              <div className={flip ? "card-inner-eq" : "flip-card-inner-eq"}>
                {activeSlide % 2 === 0 ? (
                  equationSet[activeSlide]
                ) : (
                  <div className="input-group">
                    <label htmlFor="a">A:</label>
                    <input id="a" type="text" autoFocus />
                    <label htmlFor="b">B:</label>
                    <input id="b" type="text" />
                    <label htmlFor="c">C:</label>
                    <input id="c" type="text" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      {start ? (
        <div className="points">
          <p>Correct: {score}</p>
          <p>Incorrect: {incorrect}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Memory;
