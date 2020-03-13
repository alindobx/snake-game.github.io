let canvas;
let ctx;
let snakeHead_X = 75;
let snakeBody_X = 0;
let runInterval;
const framePerSecond = 10;

// foundation of Snake Game
canvas = document.getElementById("canvasBoard");
ctx = canvas.getContext("2d");

//view
const view = {
  drawGameBoard: ()=>{
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  },
  snakeHead : () => {
    snakeHead_X = snakeHead_X + 25;
    ctx.fillStyle = "brown";
    ctx.fillRect(snakeHead_X, 100, 25, 25);
  },
  snakeBody : () => {
    snakeBody_X = snakeBody_X + 25;
    ctx.fillStyle = "red";
    ctx.fillRect(snakeBody_X, 100, 77, 25);
  },
  apple: () => {

  }
};

//controller
const controller = {
  //keyPressControls - determines cordinates of direction of snake when event keys are
  //press
  keyPressControls: e => {
    e.keyCode === 37
      ? console.log(e.which, "the left arrow was pressed")
      : null;
    e.keyCode === 38
        ? console.log(e.which, "the up arrow was pressed")
        : null;
    e.keyCode === 39
        ? console.log(e.which, "the right arrow was pressed")
        : null;
    e.keyCode === 40
        ? console.log(e.which, "the down arrow was pressed")
        : null;
  }
};

//event handlers
document.addEventListener("keydown", (e) =>{
    controller.keyPressControls(e);
});
// start the Game
init();
//function to start the Game
function init() {
  view.drawGameBoard();
  runInterval = setInterval(() => {
    view.drawGameBoard();
    view.snakeHead();
    view.snakeBody();
  }, 1000 / framePerSecond);
}













