import React, { useState, useEffect } from "react";
import "./App.css";

function Math(props) {
  const { toggle, questionDisplay, setQuestionDisplay } = props;

  var myQuestions = [
    {
      question: "150 / 5 =",
      answers: [15, 20, 30, 25],
      correctAnswer: 2,
      id: 0,
      missed: false,
    },
    {
      question: "379 - 214 =",
      answers: [115, 225, 173, 165],
      correctAnswer: 3,
      id: 1,
      missed: false,
    },
    {
      question: "320 / 20 =",
      answers: [16, 20, 24, 12],
      correctAnswer: 0,
      id: 2,
      missed: false,
    },
    {
      question: "45 * 12 =",
      answers: [452, 420, 610, 540],
      correctAnswer: 3,
      id: 3,
      missed: false,
    },
    {
      question: "279 + 352 =",
      answers: [631, 543, 581, 697],
      correctAnswer: 0,
      id: 4,
      missed: false,
    },
    {
      question: "731 + 219 =",
      answers: [512, 950, 1040, 912],
      correctAnswer: 1,
      id: 5,
      missed: false,
    },
    {
      question: "416 - 105 =",
      answers: [311, 281, 391, 209],
      correctAnswer: 0,
      id: 6,
      missed: false,
    },
    {
      question: "28 * 32 =",
      answers: [646, 896, 912, 986],
      correctAnswer: 1,
      id: 7,
      missed: false,
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

  useEffect(() => {
    function downHandler(e) {
      if (e.key === "ArrowLeft") setAnswer(0);
      if (e.key === "ArrowUp") setAnswer(1);
      if (e.key === "ArrowRight") setAnswer(2);
      if (e.key === "ArrowDown") setAnswer(3);
      if (e.key === "0") setQuestionDisplay(false);
    }
    function upHandler(e) {
      if (e.key === "ArrowLeft") setQuestionDisplay(false);
      if (e.key === "ArrowUp") setQuestionDisplay(false);
      if (e.key === "ArrowRight") setQuestionDisplay(false);
      if (e.key === "ArrowDown") setQuestionDisplay(false);
    }
    window.addEventListener("keydown", (e) => downHandler(e));
    window.addEventListener("keyup", (e) => upHandler(e));

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", (e) => downHandler(e));
      window.addEventListener("keyup", (e) => upHandler(e));
    };
  }, []);

  useEffect(() => {
    if (toggle === false) {
      for (let i = 0; i < myQuestions.length; i++) {
        setTimeout(() => {
          if (i === currentSlide && answer === currentCorrect) {
            if (currentSlide === 7) {
              setAnswer(null);
              setCurrentQuestion("End of math problems");
              setCurrentChoices([]);
              updateScore(score + 1);
              setCurrentSlide(null);
              setQuestionDisplay(true);
            } else {
              setAnswer(null);
              setCurrentCorrect(myQuestions[i + 1].correctAnswer);
              setCurrentQuestion(myQuestions[i + 1].question);
              setCurrentChoices(myQuestions[i + 1].answers);
              updateScore(score + 1);
              setCurrentSlide(i + 1);
              setQuestionDisplay(true);
            }
          }
          if (
            i === currentSlide &&
            answer !== null &&
            answer !== currentCorrect
          ) {
            if (currentSlide === 7) {
              setAnswer(null);
              setCurrentQuestion("End of math problems");
              setCurrentChoices([]);
              updateIncorrect(incorrect + 1);
              setCurrentSlide(null);
              setQuestionDisplay(true);
            } else {
              setAnswer(null);
              setCurrentCorrect(myQuestions[i + 1].correctAnswer);
              setCurrentQuestion(myQuestions[i + 1].question);
              setCurrentChoices(myQuestions[i + 1].answers);
              updateIncorrect(incorrect + 1);
              setCurrentSlide(i + 1);
              setQuestionDisplay(true);
            }
          }
          if (i === currentSlide && answer === null) {
            myQuestions[i].missed = true;
          }
          if (myQuestions[i].missed === true) {
            if (currentSlide === 7) {
              setAnswer(null);
              setCurrentQuestion("End of math problems");
              setCurrentChoices([]);
              updateIncorrect(incorrect + 1);
              setCurrentSlide(null);
              setQuestionDisplay(false);
            } else {
              setAnswer(null);
              setCurrentCorrect(myQuestions[i + 1].correctAnswer);
              setCurrentQuestion(myQuestions[i + 1].question);
              setCurrentChoices(myQuestions[i + 1].answers);
              updateIncorrect(incorrect + 1);
              setCurrentSlide(i + 1);
            }
          }
        }, 9000);
      }
    }
  }, [currentCorrect, score, myQuestions, currentSlide]);

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
