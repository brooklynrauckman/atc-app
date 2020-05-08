import React, { useState, useEffect } from "react";
import "./Maths.css";

const singleDigit = Math.floor(Math.random() * 9 + 1);
const doubleDigit = Math.floor(Math.random() * 90 + 10);
const tripleDigit =
  Math.round(Math.floor(Math.random() * 900 + 100) / singleDigit) * singleDigit;
const doubleDigit1 = Math.floor(Math.random() * 90 + 10);
const tripleDigit1 = Math.floor(Math.random() * 500 + 400);
const doubleDigit2 = Math.floor(Math.random() * 90 + 10);
const tripleDigit2 = Math.floor(Math.random() * 400 + 100);
const doubleDigit3 = Math.floor(Math.random() * 90 + 10);
const tripleDigit3 = Math.floor(Math.random() * 900 + 100);
const doubleDigit4 = Math.floor(Math.random() * 90 + 10);
const tripleDigit4 = Math.floor(Math.random() * 900 + 100);
const doubleDigit5 = Math.floor(Math.random() * 90 + 10);
const tripleDigit5 = Math.floor(Math.random() * 900 + 100);
const doubleDigit6 = Math.floor(Math.random() * 90 + 10);
const tripleDigit6 =
  Math.round(Math.floor(Math.random() * 900 + 100) / doubleDigit3) *
  doubleDigit3;
const doubleDigit7 = Math.floor(Math.random() * 60 + 10);
const tripleDigit7 = Math.floor(Math.random() * 600 + 100);
const doubleDigit8 = Math.floor(Math.random() * 60 + 10);
const tripleDigit8 = Math.floor(Math.random() * 600 + 100);
const doubleDigit9 = Math.floor(Math.random() * 20 + 10);
const tripleDigit9 = Math.floor(Math.random() * 600 + 100);
const doubleDigit10 = Math.floor(Math.random() * 20 + 10);
const tripleDigit10 = Math.floor(Math.random() * 600 + 100);
const tripleDigit11 = Math.floor(Math.random() * 600 + 100);
const tripleDigit12 = Math.floor(Math.random() * 600 + 100);
const tripleDigit13 = Math.floor(Math.random() * 600 + 100);
const tripleDigit14 = Math.floor(Math.random() * 600 + 100);
const tripleDigit15 = Math.floor(Math.random() * 600 + 100);
const tripleDigit16 = Math.floor(Math.random() * 600 + 100);
const tripleDigit17 = Math.floor(Math.random() * 600 + 100);
const tripleDigit18 = Math.floor(Math.random() * 600 + 100);
const tripleDigit19 = Math.floor(Math.random() * 600 + 100);
const tripleDigit20 = Math.floor(Math.random() * 500 + 400);
const tripleDigit21 = Math.floor(Math.random() * 400 + 100);
const tripleDigit22 = Math.floor(Math.random() * 600 + 100);
const tripleDigit23 = Math.floor(Math.random() * 600 + 100);
const tripleDigit24 = Math.floor(Math.random() * 600 + 100);
const tripleDigit25 = Math.floor(Math.random() * 600 + 100);
const tripleDigit26 = Math.floor(Math.random() * 600 + 100);
const tripleDigit27 = Math.floor(Math.random() * 600 + 100);
const correct = tripleDigit / singleDigit;
const correct1 = tripleDigit1 - tripleDigit2;
const correct2 = tripleDigit6 / doubleDigit3;
const correct3 = doubleDigit7 * doubleDigit8;
const correct4 = tripleDigit10 + tripleDigit11;
const correct5 = tripleDigit15 + tripleDigit16;
const correct6 = tripleDigit20 - tripleDigit21;
const correct7 = doubleDigit9 * doubleDigit10;

function Maths(props) {
  const { toggle, questionDisplay, setQuestionDisplay } = props;

  var myQuestions = [
    {
      question: `${tripleDigit} / ${singleDigit} =`,
      answers: [doubleDigit, doubleDigit1, correct, doubleDigit2],
      correctAnswer: 2,
      id: 0,
    },
    {
      question: `${tripleDigit1} - ${tripleDigit2} =`,
      answers: [tripleDigit3, tripleDigit4, tripleDigit5, correct1],
      correctAnswer: 3,
      id: 1,
    },
    {
      question: `${tripleDigit6} / ${doubleDigit3} =`,
      answers: [correct2, doubleDigit4, doubleDigit5, doubleDigit6],
      correctAnswer: 0,
      id: 2,
    },
    {
      question: `${doubleDigit7} * ${doubleDigit8} =`,
      answers: [tripleDigit7, tripleDigit8, tripleDigit9, correct3],
      correctAnswer: 3,
      id: 3,
    },
    {
      question: `${tripleDigit10} + ${tripleDigit11} =`,
      answers: [correct4, tripleDigit12, tripleDigit13, tripleDigit14],
      correctAnswer: 0,
      id: 4,
    },
    {
      question: `${tripleDigit15} + ${tripleDigit16} =`,
      answers: [tripleDigit17, correct5, tripleDigit18, tripleDigit19],
      correctAnswer: 1,
      id: 5,
    },
    {
      question: `${tripleDigit20} - ${tripleDigit21} =`,
      answers: [correct6, tripleDigit22, tripleDigit23, tripleDigit24],
      correctAnswer: 0,
      id: 6,
    },
    {
      question: `${doubleDigit9} * ${doubleDigit10} =`,
      answers: [tripleDigit25, correct7, tripleDigit26, tripleDigit27],
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
  const [flip, setFlip] = useState(false);

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
        setFlip(!flip);
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
            <div className="scene-math">
              <div className={flip ? "card-math" : "flip-card-math"}>
                <div
                  className={flip ? "card-inner-math" : "flip-card-inner-math"}
                >
                  <div className="question-wrapper">
                    <div className="question">{currentQuestion}</div>
                    <div className="answers">
                      {currentChoices.map((c, index) => (
                        <div className="choice" key={index}>
                          {c}
                          <div className="arrow">
                            {index === 0 ? (
                              <img
                                src="./triangle.svg"
                                alt=""
                                className="left"
                              />
                            ) : null}
                            {index === 1 ? (
                              <img src="./triangle.svg" alt="" />
                            ) : null}
                            {index === 2 ? (
                              <img
                                src="./triangle.svg"
                                alt=""
                                className="right"
                              />
                            ) : null}
                            {index === 3 ? (
                              <img
                                src="./triangle.svg"
                                alt=""
                                className="down"
                              />
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Maths;
