import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function Math(props) {
  const { toggle, questionDisplay, setQuestionDisplay } = props;

  var myQuestions = [
    {
      question: "150 / 5 =",
      answers: [15, 20, 30, 25],
      correctAnswer: 2,
      id: 0,
    },
    {
      question: "379 - 214 =",
      answers: [115, 225, 173, 165],
      correctAnswer: 3,
      id: 1,
    },
    {
      question: "320 / 20 =",
      answers: [16, 20, 24, 12],
      correctAnswer: 0,
      id: 2,
    },
    {
      question: "45 * 12 =",
      answers: [452, 420, 610, 540],
      correctAnswer: 3,
      id: 3,
    },
    {
      question: "279 + 352 =",
      answers: [631, 543, 581, 697],
      correctAnswer: 0,
      id: 4,
    },
    {
      question: "731 + 219 =",
      answers: [512, 950, 1040, 912],
      correctAnswer: 1,
      id: 5,
    },
    {
      question: "416 - 105 =",
      answers: [311, 281, 391, 209],
      correctAnswer: 0,
      id: 6,
    },
    {
      question: "28 * 32 =",
      answers: [646, 896, 912, 986],
      correctAnswer: 1,
      id: 7,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    myQuestions[0].question
  );
  const [currentChoices, setCurrentChoices] = useState(myQuestions[0].answers);
  const [currentCorrect, setCurrentCorrect] = useState(
    myQuestions[0].correctAnswer
  );
  const [answer, setAnswer] = useState(null);
  const [score, updateScore] = useState(0);
  const [incorrect, updateIncorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  let timer = null;

  useEffect(() => {
    function downHandler(e) {
      if (e.key === "ArrowLeft") setAnswer(0);
      if (e.key === "ArrowUp") setAnswer(1);
      if (e.key === "ArrowRight") setAnswer(2);
      if (e.key === "ArrowDown") setAnswer(3);
    }
    function upHandler(e) {
      if (e.key === "ArrowLeft") {
        if (answer !== currentCorrect && answer !== null) inCorrectPress();
        if (answer === currentCorrect) correctPress();
      }
      if (e.key === "ArrowUp") {
        if (answer !== currentCorrect && answer !== null) inCorrectPress();
        if (answer === currentCorrect) correctPress();
      }
      if (e.key === "ArrowRight") {
        if (answer !== currentCorrect && answer !== null) inCorrectPress();
        if (answer === currentCorrect) correctPress();
      }
      if (e.key === "ArrowDown") {
        if (answer !== currentCorrect && answer !== null) inCorrectPress();
        if (answer === currentCorrect) correctPress();
      }
    }

    window.addEventListener("keydown", (e) => downHandler(e));
    window.addEventListener("keyup", (e) => upHandler(e));

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", (e) => downHandler(e));
      window.addEventListener("keyup", (e) => upHandler(e));
    };
  }, [currentCorrect, answer]);

  useEffect(() => {
    if (toggle === false) {
      timer = setTimeout(() => {
        if (currentSlide === 7) {
          if (answered === false) updateIncorrect(incorrect + 1);
          lastSlide();
        } else if (currentSlide === null) console.log("over");
        else {
          if (answered === false) updateIncorrect(incorrect + 1);
          nextSlide();
        }
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [toggle, currentSlide, answered]);

  const nextSlide = () => {
    for (let i = 0; i < myQuestions.length; i++) {
      if (i === currentSlide) {
        setAnswered(false);
        setCurrentCorrect(myQuestions[i + 1].correctAnswer);
        setCurrentQuestion(myQuestions[i + 1].question);
        setCurrentChoices(myQuestions[i + 1].answers);
        setCurrentSlide(i + 1);
        setQuestionDisplay(true);
      }
    }
  };
  const lastSlide = () => {
    for (let i = 0; i < myQuestions.length; i++) {
      if (i === currentSlide) {
        setAnswered(false);
        setCurrentQuestion("End of math problems");
        setCurrentChoices([]);
        setCurrentSlide(null);
        setQuestionDisplay(true);
      }
    }
  };
  const correctPress = () => {
    clearTimeout(timer);
    updateScore(score + 1);
    setAnswered(true);
    setAnswer(null);
    setQuestionDisplay(false);
    console.log("correct");
  };
  const inCorrectPress = () => {
    clearTimeout(timer);
    updateIncorrect(incorrect + 1);
    setAnswered(true);
    setAnswer(null);
    setQuestionDisplay(false);
  };

  return (
    <div className="Math">
      {toggle === false ? (
        <React.Fragment>
          <div className="score">
            <p>Correct: {score}</p>
            <p>Incorrect: {incorrect}</p>
          </div>
          {questionDisplay === true ? (
            <div className="question-wrapper">
              <div className="question">{currentQuestion}</div>
              <div className="answers">
                {currentChoices.map((c, index) => (
                  <div className="choice" key={index}>
                    {c}
                    <div className="arrow">
                      {index === 0 ? (
                        <img src="./triangle.svg" alt="" className="left" />
                      ) : null}
                      {index === 1 ? <img src="./triangle.svg" alt="" /> : null}
                      {index === 2 ? (
                        <img src="./triangle.svg" alt="" className="right" />
                      ) : null}
                      {index === 3 ? (
                        <img src="./triangle.svg" alt="" className="down" />
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Math;
