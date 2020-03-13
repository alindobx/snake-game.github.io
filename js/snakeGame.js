const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let snakeHead_X = 50;


function init() {
    //canvas credentials
    view.drawGameBoard();
    setInterval(drawSnakeHead,100);
}
// draw snake Head

const view = {

  drawGameBoard: () => {

    for (let i = 0; i < canvas.width; i++) {
      for (let j = 0; j < canvas.width; j++) {
        if (i % 2 === j % 2) {
          //first color
          context.fillStyle = "#3DBE01";
          context.fillRect(63 * i, 63 * j, 63, 63);
        } else {
          //second color
          context.fillStyle = "#2C8C00";
          context.fillRect(63 * i, 63 * j, 63, 63);
        }
      }
    }
  }
};
init();

// Snake Head
function drawSnakeHead() {
  snakeHead_X = snakeHead_X + 5;
  console.log(snakeHead_X);
  context.fillStyle = "white";
  context.fillRect(snakeHead_X,200,25,25)
}






