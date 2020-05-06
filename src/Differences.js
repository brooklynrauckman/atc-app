import React, { useState, useEffect } from "react";
import "./Differences.css";

const number1 = Math.floor(Math.random() * (8 + 1)) + 1;
const number2 = Math.floor(Math.random() * (8 + 1)) + 1;
const difference1 = Math.abs(number1 - number2);
const number3 = Math.floor(Math.random() * (8 + 1)) + 1;
const difference2 = Math.abs(number2 - number3);
const number4 = Math.floor(Math.random() * (8 + 1)) + 1;
const difference3 = Math.abs(number3 - number4);
const number5 = Math.floor(Math.random() * (8 + 1)) + 1;
const difference4 = Math.abs(number4 - number5);
const number6 = Math.floor(Math.random() * (8 + 1)) + 1;
const difference5 = Math.abs(number5 - number6);

function Differences() {
  const memorySet = [
    number1,
    number2,
    "",
    number3,
    "",
    number4,
    "",
    number5,
    "",
    number6,
    "",
  ];

  const [activeSlide, updateActiveSlide] = useState(0);
  const [start, setStart] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [score, updateScore] = useState(0);
  const [incorrect, updateIncorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [flip, setFlip] = useState(false);

  let timer = null;

  const nextSlide = () => {
    setAnswer(null);
    setAnswered(false);
    updateActiveSlide(activeSlide + 1);
    setFlip(!flip);
  };

  const correctPress = () => {
    updateScore(score + 1);
    setAnswered(true);
    blurInput();
  };

  const inCorrectPress = () => {
    updateIncorrect(incorrect + 1);
    setAnswered(true);
    blurInput();
  };

  const blurInput = () => {
    document.getElementById("myText").blur();
  };

  useEffect(() => {
    if (start === true) {
      timer = setTimeout(() => {
        if (activeSlide < memorySet.length) {
          if (activeSlide % 2 === 0 && activeSlide > 0 && answered === false) {
            updateIncorrect(incorrect + 1);
            nextSlide();
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
    if (activeSlide === 2) {
      if (answer === difference1) correctPress();
      if (answer !== null && answer !== difference1) inCorrectPress();
    }
    if (activeSlide === 4) {
      if (answer === difference2) correctPress();
      if (answer !== null && answer !== difference2) inCorrectPress();
    }
    if (activeSlide === 6) {
      if (answer === difference3) correctPress();
      if (answer !== null && answer !== difference3) inCorrectPress();
    }
    if (activeSlide === 8) {
      if (answer === difference4) correctPress();
      if (answer !== null && answer !== difference4) inCorrectPress();
    }
    if (activeSlide === 10) {
      if (answer === difference5) correctPress();
      if (answer !== null && answer !== difference5) inCorrectPress();
    }
  }, [answer, activeSlide]);

  return (
    <div className="differences">
      {start === false ? (
        <div className="instructions">
          <h1>Differences Memory Challenge Instructions:</h1>
          <p>
            Cards will appear for 2 seconds each. The first two cards will be a
            number 1-9. The next card with be an empty box. Before the card
            switches, press the number key that corresponds to the difference
            between the first two numbers. The next card will be a number 1-9,
            followed by another card with an empty box. You will need to press
            the number key that corresponds to the difference between the last
            two numbers given (NOT the previous difference). For example, if the
            first two cards are '4' then '6', the first difference will be '2'.
            Then, if the card is '9', the difference would be '3'. This pattern
            will continue through 5 differnences.
          </p>
          <p className="good-luck-diff">Good Luck!</p>
        </div>
      ) : null}
      <div>
        {start === false ? (
          <button
            onClick={() => {
              setStart(true);
              updateActiveSlide(0);
            }}
          >
            Start
          </button>
        ) : null}
      </div>
      <div>
        {start && activeSlide < memorySet.length ? (
          <div className="scene">
            <div className={flip ? "card" : "flip-card"}>
              <div className={flip ? "card-inner" : "flip-card-inner"}>
                {activeSlide % 2 === 0 && activeSlide > 0 ? (
                  <input type="text" id="myText" autoFocus />
                ) : (
                  memorySet[activeSlide]
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
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

export default Differences;
