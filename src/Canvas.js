import React, { useRef, useEffect, useState } from "react";
import "./Canvas.css";

function Canvas(props) {
  const canvasRef = useRef();
  let frameCount = 0;
  const canvasWidth = 1000;
  const canvasHeight = 600;
  let score = 0;
  let collisions = 0;

  const { toggle, updateToggle, setQuestionDisplay } = props;

  const [planes, updatePlanes] = useState([
    {
      x: Math.floor(Math.random() * (980 + 1)),
      y: 20,
      height: 15,
      width: 15,
      dx: 0.75,
      dy: 0.75,
      angle: 1.22173,
      id: "1",
      status: true,
      selected: false,
    },
    {
      x: 980,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: -1.25,
      dy: -1.25,
      angle: 1.5708,
      id: "2",
      status: true,
      selected: false,
    },
    {
      x: Math.floor(Math.random() * (980 + 1)),
      y: 20,
      height: 15,
      width: 15,
      dx: 1,
      dy: 1,
      angle: 1.5708,
      id: "3",
      status: true,
      selected: false,
    },
    {
      x: 980,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: -1,
      dy: -1,
      angle: 1.5708,
      id: "4",
      status: true,
      selected: false,
    },
    {
      x: 980,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: -1.25,
      dy: -1.25,
      angle: 1.5708,
      id: "5",
      status: true,
      selected: false,
    },
    {
      x: Math.floor(Math.random() * (980 + 1)),
      y: 580,
      height: 15,
      width: 15,
      dx: -0.75,
      dy: -0.75,
      angle: 1.0472,
      id: "6",
      status: true,
      selected: false,
    },
    {
      x: 20,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: 1.5,
      dy: 1.5,
      angle: 1.5708,
      id: "7",
      status: true,
      selected: false,
    },

    {
      x: 20,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: 0.5,
      dy: 0.5,
      angle: 1.5708,
      id: "8",
      status: true,
      selected: false,
    },
    {
      x: 980,
      y: Math.floor(Math.random() * (580 + 1)),
      height: 15,
      width: 15,
      dx: -1.75,
      dy: -1.75,
      angle: 1.5708,
      id: "9",
      status: true,
      selected: false,
    },
  ]);

  useEffect(() => {
    function downHandler({ key }) {
      if (key === "1") {
        planes[0].selected = true;
        updatePlanes([...planes, ...[planes[0]]]);
      }
      if (key === "2") {
        planes[1].selected = true;
        updatePlanes([...planes, ...[planes[1]]]);
      }
      if (key === "3") {
        planes[2].selected = true;
        updatePlanes([...planes, ...[planes[2]]]);
      }
      if (key === "4") {
        planes[3].selected = true;
        updatePlanes([...planes, ...[planes[3]]]);
      }
      if (key === "5") {
        planes[4].selected = true;
        updatePlanes([...planes, ...[planes[4]]]);
      }
      if (key === "6") {
        planes[5].selected = true;
        updatePlanes([...planes, ...[planes[5]]]);
      }
      if (key === "7") {
        planes[6].selected = true;
        updatePlanes([...planes, ...[planes[6]]]);
      }
      if (key === "8") {
        planes[7].selected = true;
        updatePlanes([...planes, ...[planes[7]]]);
      }
      if (key === "9") {
        planes[8].selected = true;
        updatePlanes([...planes, ...[planes[8]]]);
      }
    }
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [planes]);

  //Collision Scenario Functions

  const draw = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < planes.length; i++) {
      var p = planes[i];
      if (p.status === true) {
        context.beginPath();
        context.rect(p.x, p.y, p.height, p.width, p.dx, p.dy);
        context.font = "16px Arial";
        context.fillStyle = "#F6F930";
        context.fillText(p.id, p.x + p.width / 4, p.y - 2);
        context.closePath();
        context.fill();
      }
    }
  };

  const drawScore = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.font = "16px Arial";
    context.fillStyle = "#FCFCFC";
    context.fillText("Saves: " + score, 8, 40);
    context.fillText("Collisions: " + collisions, 8, 20);
  };

  const collisionDetection = () => {
    var planesCopy = [...planes];
    for (var i = 0; i < planes.length; i++) {
      for (var j = 0; j < planesCopy.length; j++) {
        var p = planes[i];
        var c = planesCopy[j];
        if (p.status === true && c.status === true) {
          if (p !== c) {
            if (
              p.x < c.x + c.width &&
              p.x + p.width > c.x &&
              p.y < c.y + c.height &&
              p.y + p.height > c.y
            ) {
              if (p.selected === false && c.selected === false) {
                p.status = false;
                c.status = false;
                collisions++;
              }
              if (p.selected === true) {
                p.x = 20;
                p.y = Math.floor(Math.random() * (580 + 1));
                score++;
                c.selected = false;
                p.selected = false;
              }
              if (c.selected === true) {
                c.x = 20;
                c.y = Math.floor(Math.random() * (580 + 1));
                score++;
                c.selected = false;
                p.selected = false;
              }
            }
          }
        }
      }
    }
  };

  const animate = () => {
    if (frameCount < 5400) {
      requestAnimationFrame(animate);
      frameCount++;
    } else {
      alert("Scenerio is over. Refresh the page to try another.");
      setQuestionDisplay(false);
    }

    for (var i = 0; i < planes.length; i++) {
      var p = planes[i];
      p.x += p.dx * Math.sin(p.angle);
      p.y += p.dy * Math.cos(p.angle);
      draw();
      collisionDetection();
      drawScore();
      if (p.x + p.dx > canvasWidth || p.x + p.dx < p.width) {
        p.dx = -p.dx;
        p.selected = false;
      }
      if (p.y + p.dy > canvasHeight || p.y + p.dy < p.height) {
        p.dy = -p.dy;

        p.selected = false;
      }
    }
  };

  return (
    <div>
      <button
        className={toggle === true ? "start" : "toggle"}
        onClick={() => {
          requestAnimationFrame(animate);
          updateToggle(false);
        }}
      >
        <h1>Air Traffic Collision Scenario Instructions: </h1>
        <p>
          Use the corresponding number key to move a "plane" as it is
          approaching a collision. Simultaneously, attempt to correctly answer
          the mental math problems by pressing the corresponding arrow key. You
          have 9 seconds to answer each question before it disappears. The
          scenario will last for 90 seconds. Click anywhere to begin.
        </p>
        <p className="good-luck">Good luck!</p>
      </button>
      <canvas
        ref={canvasRef}
        width="1000"
        height="600"
        className={toggle === false ? "" : "toggle"}
      ></canvas>
    </div>
  );
}

export default Canvas;
