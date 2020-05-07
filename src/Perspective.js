import React, { useState, useEffect } from "react";
import "./Perspective.css";

const perspectiveArray = ["RIGHT", "LEFT"];
const direction =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction1 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction2 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction3 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction4 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction5 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction6 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction7 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction8 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction9 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction10 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];
const direction11 =
  perspectiveArray[(perspectiveArray.length * Math.random()) | 0];

function Perspective() {
  const perspectiveSet = [
    {
      src: "eye.svg",
      side: "RIGHT",
      label: direction,
    },
    {
      src: "eye1.svg",
      side: "LEFT",
      label: direction1,
    },
    {
      src: "eye2.svg",
      side: "RIGHT",
      label: direction2,
    },
    {
      src: "eye3.svg",
      side: "LEFT",
      label: direction3,
    },
    {
      src: "eye4.svg",
      side: "LEFT",
      label: direction4,
    },
    {
      src: "eye5.svg",
      side: "RIGHT",
      label: direction5,
    },
    {
      src: "eye6.svg",
      side: "RIGHT",
      label: direction6,
    },
    {
      src: "eye7.svg",
      side: "LEFT",
      label: direction7,
    },
    {
      src: "eye8.svg",
      side: "RIGHT",
      label: direction8,
    },
    {
      src: "eye9.svg",
      side: "LEFT",
      label: direction9,
    },
    {
      src: "eye10.svg",
      side: "LEFT",
      label: direction10,
    },
    {
      src: "eye11.svg",
      side: "RIGHT",
      label: direction11,
    },
  ];

  const [score, updateScore] = useState(0);
  const [incorrect, updateIncorrect] = useState(0);
  const [start, setStart] = useState(false);
  const [flip, setFlip] = useState(false);
  const [activeSlide, updateActiveSlide] = useState(0);
  const [answered, setAnswered] = useState(false);

  let timer = null;

  const nextSlide = () => {
    setAnswered(false);
    updateActiveSlide(activeSlide + 1);
    setFlip(!flip);
  };

  const correctPress = (test) => {
    updateScore(score + 1);
    setAnswered(true);
  };

  const inCorrectPress = () => {
    updateIncorrect(incorrect + 1);
    setAnswered(true);
  };

  useEffect(() => {
    if (start === true) {
      timer = setTimeout(() => {
        if (activeSlide < perspectiveSet.length - 1) {
          if (answered === false) {
            updateIncorrect(incorrect + 1);
            nextSlide();
          }
          nextSlide();
        } else {
          setStart(false);
          window.location.reload(false);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide, start, answered, flip]);

  useEffect(() => {
    const downHandler = (e) => {
      if (e.keyCode === 37 && answered === false) {
        if (
          perspectiveSet[activeSlide].side === perspectiveSet[activeSlide].label
        )
          correctPress();
        else {
          inCorrectPress();
        }
      }
      if (e.keyCode === 39 && answered === false) {
        if (
          perspectiveSet[activeSlide].side !== perspectiveSet[activeSlide].label
        )
          correctPress();
        else {
          inCorrectPress();
        }
      }
    };

    window.addEventListener("keydown", downHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [activeSlide, answered]);

  return (
    <div className="perspective">
      {start === false || activeSlide >= perspectiveSet.length ? (
        <React.Fragment>
          <div className="instructions-pers">
            <h1>Perspective Challenge Instructions:</h1>
            <p>
              Cards will appear for 3 seconds each. The cards will have an eye,
              a big plane, and a small plane. Above the card, you will see
              'RIGHT' or 'LEFT'. Determine if, from the perspective shown, the
              small plane is on the right or left of the big plane. Before the
              card switches, press the arrow key that corresponds to the correct
              answer, 'yes' or 'no'.
            </p>
            <p className="good-luck-pers">Good Luck!</p>
          </div>
          <div>
            <button
              onClick={() => {
                setStart(true);
                updateActiveSlide(0);
              }}
            >
              Start
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="top-line-wrapper">
            <div className="points-pers">
              <p className="tally">Correct: {score}</p>
              <p className="tally">Incorrect: {incorrect}</p>
            </div>
            <div className="direction">{perspectiveSet[activeSlide].label}</div>
          </div>
          <div className="scene">
            <div className={flip ? "card-pers" : "flip-card-pers"}>
              <div
                className={flip ? "card-inner-pers" : "flip-card-inner-pers"}
              >
                <img
                  className="picture"
                  alt="plane perspectice scene"
                  src={perspectiveSet[activeSlide].src}
                />
              </div>
            </div>
          </div>
          <div className="yes-or-no">
            <div className="yes-group">
              <img src="triangle.svg" alt="left arrow" className="yes-arrow" />
              <p>YES</p>
            </div>
            <div className="no-group">
              <p>NO</p>
              <img src="triangle.svg" alt="right arrow" className="no-arrow" />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Perspective;
