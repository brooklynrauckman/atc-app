var east = [];
var north = [];

function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) {
    return true;
  }
  return false;
}

function component(width, height, color, x, y, id, type) {
  this.id = id;
  this.type = type;
  this.width = width;
  this.height = height;
  this.speed = 1;
  this.angle = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = color;
    ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
    ctx.restore();
  };
  this.newPos = function () {
    this.x += this.speed * Math.sin(this.angle);
    this.y -= this.speed * Math.cos(this.angle);
  };
  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = otherobj.x;
    var otherright = otherobj.x + otherobj.width;
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + otherobj.height;
    var crash = true;
    if (
      mybottom < othertop ||
      mytop > otherbottom ||
      myright < otherleft ||
      myleft > otherright
    ) {
      crash = false;
    }
    return crash;
  };
}

function updateGameArea() {
  var x, y;
  for (i = 0; i < north.length; i += 1) {
    for (i = 0; i < east.length; i += 1) {
      if (east[i].crashWith(north[i])) {
        console.log("Collision!");
      }
    }
  }
  myGameArea.clear();
  myGameArea.frameNo += 1;
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    y = Math.floor(Math.random() * (600 + 1));
    east.push(new component(15, 15, "green", 1020, y, "right"));
  }
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    y = Math.floor(Math.random() * (600 + 1));
    east.push(new component(15, 15, "yellow", -20, y, "left"));
  }
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    x = Math.floor(Math.random() * (1000 + 1));
    north.push(new component(15, 15, "red", x, 620, "bottom"));
  }
  if (myGameArea.frameNo == 1 || everyinterval(300)) {
    x = Math.floor(Math.random() * (1000 + 1));
    north.push(new component(15, 15, "blue", x, -20, "top"));
  }
  for (i = 0; i < east.length; i += 1) {
    if (east[i].id === "right") {
      east[i].x += -1;
    } else {
      east[i].x += 1;
    }
    east[i].update();
  }

  for (i = 0; i < north.length; i += 1) {
    if (north[i].id === "bottom") {
      north[i].y += -1;
    } else {
      north[i].y += 1;
    }
    north[i].update();
  }
}
