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
const extra = Math.floor(Math.random() * (3 + 1)) + 1;
const extra1 = Math.floor(Math.random() * (3 + 1)) + 1;
const extra2 = Math.floor(Math.random() * (2 + 1)) + 1;
const extra3 = Math.floor(Math.random() * (3 + 1)) + 1;
const extra4 = Math.floor(Math.random() * (3 + 1)) + 1;
const extra5 = Math.floor(Math.random() * (3 + 1)) + 1;
const extra6 = Math.floor(Math.random() * (2 + 1)) + 1;
const extra7 = Math.floor(Math.random() * (2 + 1)) + 1;
const extra8 = Math.floor(Math.random() * (3 + 1)) + 3;
const c3 = Math.floor(Math.random() * (4 + 1)) + 4;
const b3 = c3 - extra;
const a3 = Math.floor(Math.random() * (3 + 1)) + 1;
const a4 = Math.floor(Math.random() * (3 + 1)) + 1;
const c4 = extra1 + a4;
const b4 = Math.floor(Math.random() * (3 + 1)) + 1;
const b5 = Math.floor(Math.random() * (2 + 1)) + 1;
const c5 = Math.floor(Math.random() * (3 + 1)) + 1;
const a5 = b5 * extra2;
const a6 = Math.floor(Math.random() * (4 + 1)) + 4;
const b6 = a6 - extra4;
const c6 = extra3 + b6;
const c7 = Math.floor(Math.random() * (2 + 1)) + 1;
const b7 = c7 * extra6;
const a7 = extra5 + b7;
const c8 = Math.floor(Math.random() * (1 + 1)) + 1;
const a8 = extra8 - c8;
const b8 = extra7 * a8;

const Memory = () => {
  const equation1 = `A = ${a} \u00A0\u00A0\u00A0 C = ${c} \u00A0\u00A0\u00A0 B = ${b}`;
  const equation2 = `C = ${c1} \u00A0\u00A0\u00A0 A = ${a1} \u00A0\u00A0\u00A0 B = ${b1}`;
  const equation3 = `C = ${c2} \u00A0\u00A0\u00A0 B = ${b2} \u00A0\u00A0\u00A0 A = ${a2}`;
  const equation4 = `C = ${c3} \u00A0\u00A0\u00A0 C - ${extra} = B \u00A0\u00A0\u00A0 ${a3} = A`;
  const equation5 = `${extra1} + A = C \u00A0\u00A0\u00A0 A = ${a4} \u00A0\u00A0\u00A0 ${b4} = B`;
  const equation6 = `B = ${b5} \u00A0\u00A0\u00A0 ${c5} = C \u00A0\u00A0\u00A0 A = B * ${extra2}`;
  const equation7 = `C = ${extra3} + B \u00A0\u00A0\u00A0 A - ${extra4} = B \u00A0\u00A0\u00A0 A = ${a6}`;
  const equation8 = `${c7} = C \u00A0\u00A0\u00A0 A = ${extra5} + B \u00A0\u00A0\u00A0 C * ${extra6} = B`;
  const equation9 = `${extra7} * A = B \u00A0\u00A0\u00A0 C = ${c8} \u00A0\u00A0\u00A0 ${extra8} - C = A`;

  const equationSet = [equation1, "", equation2, "", equation3, ""];
  const equationSet1 = [equation4, "", equation5, "", equation6, ""];
  const equationSet2 = [equation7, "", equation8, "", equation9, ""];

  const [activeSlide, updateActiveSlide] = useState(0);
  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [score, updateScore] = useState(0);
  const [incorrect, updateIncorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [flip, setFlip] = useState(false);
  const [currentLevel, updateCurrentLevel] = useState(null);
  const [timeLimit, setTimeLimit] = useState(2000);

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
      }, timeLimit);
      return () => clearTimeout(timer);
    }
  }, [activeSlide, start, answered, flip, timeLimit]);

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
    function preventFocus(e) {
      e.preventDefault();
    }
    window.addEventListener("keydown", downHandler);
    window.addEventListener("mousedown", preventFocus);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.addEventListener("mousedown", preventFocus);
    };
  });

  useEffect(() => {
    if (activeSlide === 1 && answered === 0) {
      if (currentLevel === 1) {
        if (answer === a) correctPressA();
        if (answer !== null && answer !== a) inCorrectPressA();
      }
      if (currentLevel === 2) {
        if (answer === a3) correctPressA();
        if (answer !== null && answer !== a3) inCorrectPressA();
      }
      if (currentLevel === 3) {
        if (answer === a6) correctPressA();
        if (answer !== null && answer !== a6) inCorrectPressA();
      }
    }
    if (activeSlide === 1 && answered === 1) {
      if (currentLevel === 1) {
        if (answer === b) correctPressB();
        if (answer !== null && answer !== b) inCorrectPressB();
      }
      if (currentLevel === 2) {
        if (answer === b3) correctPressB();
        if (answer !== null && answer !== b3) inCorrectPressB();
      }
      if (currentLevel === 3) {
        if (answer === b6) correctPressB();
        if (answer !== null && answer !== b6) inCorrectPressB();
      }
    }
    if (activeSlide === 1 && answered === 2) {
      if (currentLevel === 1) {
        if (answer === c) correctPressC();
        if (answer !== null && answer !== b) inCorrectPressC();
      }
      if (currentLevel === 2) {
        if (answer === c3) correctPressC();
        if (answer !== null && answer !== c3) inCorrectPressC();
      }
      if (currentLevel === 3) {
        if (answer === c6) correctPressC();
        if (answer !== null && answer !== c6) inCorrectPressC();
      }
    }
    if (activeSlide === 3 && answered === 0) {
      if (currentLevel === 1) {
        if (answer === a1) correctPressA();
        if (answer !== null && answer !== a1) inCorrectPressA();
      }
      if (currentLevel === 2) {
        if (answer === a4) correctPressA();
        if (answer !== null && answer !== a4) inCorrectPressA();
      }
      if (currentLevel === 3) {
        if (answer === a7) correctPressA();
        if (answer !== null && answer !== a7) inCorrectPressA();
      }
    }
    if (activeSlide === 3 && answered === 1) {
      if (currentLevel === 1) {
        if (answer === b1) correctPressB();
        if (answer !== null && answer !== b1) inCorrectPressB();
      }
      if (currentLevel === 2) {
        if (answer === b4) correctPressB();
        if (answer !== null && answer !== b4) inCorrectPressB();
      }
      if (currentLevel === 3) {
        if (answer === b7) correctPressB();
        if (answer !== null && answer !== b7) inCorrectPressB();
      }
    }
    if (activeSlide === 3 && answered === 2) {
      if (currentLevel === 1) {
        if (answer === c1) correctPressC();
        if (answer !== null && answer !== c1) inCorrectPressC();
      }
      if (currentLevel === 2) {
        if (answer === c4) correctPressC();
        if (answer !== null && answer !== c4) inCorrectPressC();
      }
      if (currentLevel === 3) {
        if (answer === c7) correctPressC();
        if (answer !== null && answer !== c7) inCorrectPressC();
      }
    }
    if (activeSlide === 5 && answered === 0) {
      if (currentLevel === 1) {
        if (answer === a2) correctPressA();
        if (answer !== null && answer !== a2) inCorrectPressA();
      }
      if (currentLevel === 2) {
        if (answer === a5) correctPressA();
        if (answer !== null && answer !== a5) inCorrectPressA();
      }
      if (currentLevel === 3) {
        if (answer === a8) correctPressA();
        if (answer !== null && answer !== a8) inCorrectPressA();
      }
    }
    if (activeSlide === 5 && answered === 1) {
      if (currentLevel === 1) {
        if (answer === b2) correctPressB();
        if (answer !== null && answer !== b2) inCorrectPressB();
      }
      if (currentLevel === 2) {
        if (answer === b5) correctPressB();
        if (answer !== null && answer !== b5) inCorrectPressB();
      }
      if (currentLevel === 3) {
        if (answer === b8) correctPressB();
        if (answer !== null && answer !== b8) inCorrectPressB();
      }
    }
    if (activeSlide === 5 && answered === 2) {
      if (currentLevel === 1) {
        if (answer === c2) correctPressC();
        if (answer !== null && answer !== c2) inCorrectPressC();
      }
      if (currentLevel === 2) {
        if (answer === c5) correctPressC();
        if (answer !== null && answer !== c5) inCorrectPressC();
      }
      if (currentLevel === 3) {
        if (answer === c8) correctPressC();
        if (answer !== null && answer !== c8) inCorrectPressC();
      }
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
                updateCurrentLevel(1);
              }}
            >
              Level 1
            </button>
            <button
              className="level"
              onClick={() => {
                setStart(true);
                updateActiveSlide(0);
                updateCurrentLevel(2);
                setTimeLimit(4000);
              }}
            >
              Level 2
            </button>
            <button
              className="level"
              onClick={() => {
                setStart(true);
                updateActiveSlide(0);
                updateCurrentLevel(3);
                setTimeLimit(6000);
              }}
            >
              Level 3
            </button>
          </div>
        </React.Fragment>
      ) : null}
      <div></div>
      <div>
        {start && activeSlide < equationSet.length ? (
          <div className="scene-eq">
            <div className={flip ? "card-eq" : "flip-card-eq"}>
              <div className={flip ? "card-inner-eq" : "flip-card-inner-eq"}>
                {activeSlide % 2 === 0 ? (
                  <React.Fragment>
                    {currentLevel === 1 ? equationSet[activeSlide] : null}
                    {currentLevel === 2 ? equationSet1[activeSlide] : null}
                    {currentLevel === 3 ? equationSet2[activeSlide] : null}
                  </React.Fragment>
                ) : (
                  <div className="input-group">
                    <label htmlFor="a">A:</label>
                    <input
                      id="a"
                      type="text"
                      autoFocus
                      onmousedown={(e) => e.preventDefault()}
                    />
                    <label htmlFor="b">B:</label>
                    <input
                      id="b"
                      type="text"
                      onmousedown={(e) => e.preventDefault()}
                    />
                    <label htmlFor="c">C:</label>
                    <input
                      id="c"
                      type="text"
                      onmousedown={(e) => e.preventDefault()}
                    />
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
};

export default Memory;
