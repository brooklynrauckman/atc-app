var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#8080FF";
context.lineWidth = 3;
var collisions = 0;
var score = 0;

var plane0 = {
  x: Math.floor(Math.random() * (1000 + 1)),
  y: 20,
  height: 15,
  width: 15,
  dx: 1,
  dy: 1,
  angle: 1.22173,
  id: "1",
  status: true,
  selected: false,
};
var plane1 = {
  x: 980,
  y: Math.floor(Math.random() * (600 + 1)),
  height: 15,
  width: 15,
  dx: -1,
  dy: -1,
  angle: 1.5708,
  id: "2",
  status: true,
  selected: false,
};
var plane2 = {
  x: Math.floor(Math.random() * (1000 + 1)),
  y: 20,
  height: 15,
  width: 15,
  dx: 1.25,
  dy: 1.25,
  angle: 0.785398,
  id: "3",
  status: true,
  selected: false,
};
var plane3 = {
  x: 980,
  y: Math.floor(Math.random() * (600 + 1)),
  height: 15,
  width: 15,
  dx: -1.25,
  dy: -1.25,
  angle: 1.5708,
  id: "4",
  status: true,
  selected: false,
};
var plane4 = {
  x: 980,
  y: Math.floor(Math.random() * (600 + 1)),
  height: 15,
  width: 15,
  dx: -1.75,
  dy: -1.75,
  angle: 1.5708,
  id: "5",
  status: true,
  selected: false,
};
var plane5 = {
  x: Math.floor(Math.random() * (1000 + 1)),
  y: 580,
  height: 15,
  width: 15,
  dx: -1.75,
  dy: -1.75,
  angle: 1.0472,
  id: "6",
  status: true,
  selected: false,
};
var plane6 = {
  x: 20,
  y: Math.floor(Math.random() * (600 + 1)),
  height: 15,
  width: 15,
  dx: 1.5,
  dy: 1.5,
  angle: 1.5708,
  id: "7",
  status: true,
  selected: false,
};

var plane7 = {
  x: 20,
  y: Math.floor(Math.random() * (600 + 1)),
  height: 15,
  width: 15,
  dx: 0.5,
  dy: 0.5,
  angle: 1.5708,
  id: "8",
  status: true,
  selected: false,
};

var planes = [];

planes.push(plane0, plane1, plane2, plane3, plane4, plane5, plane6, plane7);

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < planes.length; i++) {
    var p = planes[i];
    if (p.status === true) {
      context.beginPath();
      context.rect(p.x, p.y, p.height, p.width, p.dx, p.dy);
      context.font = "16px Arial";
      context.fillText(p.id, p.x + p.width / 4, p.y - 2);
      context.closePath();
      context.fill();
    }
  }
}

function drawScore() {
  context.font = "16px Arial";
  context.fillText("Collisions: " + collisions, 8, 20);
  context.fillText("Score: " + score, 8, 40);
}

function remove1() {
  planes[0].selected = true;
}
function remove2() {
  planes[1].selected = true;
}
function remove3() {
  planes[2].selected = true;
}
function remove4() {
  planes[3].selected = true;
}
function remove5() {
  planes[4].selected = true;
}
function remove6() {
  planes[5].selected = true;
}
function remove7() {
  planes[6].selected = true;
}
function remove8() {
  planes[7].selected = true;
}

function collisionDetection() {
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
            if (c.selected === true || p.selected === true) {
              p.x += 200;
              score++;
              c.selected = false;
              p.selected = false;
            }
          }
        }
      }
    }
  }
}

var frameCount = 0;

function animate() {
  if (frameCount < 5000) {
    requestAnimationFrame(animate);
    frameCount++;
  }
  for (var i = 0; i < planes.length; i++) {
    var p = planes[i];
    p.x += p.dx * Math.sin(p.angle);
    p.y += p.dy * Math.cos(p.angle);
  }
  draw();
  collisionDetection();
  drawScore();
  for (var i = 0; i < planes.length; i++) {
    var p = planes[i];
    if (p.x + p.dx > canvas.width || p.x + p.dx < p.width) {
      p.dx = -p.dx;
      p.selected = false;
    }
    if (p.y + p.dy > canvas.height || p.y + p.dy < p.height) {
      p.dy = -p.dy;
      p.selected = false;
    }
  }
}
requestAnimationFrame(animate);
