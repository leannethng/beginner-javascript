// Defining all the variables
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
console.log(shakeButton);
// Define X and Y coordinate starting points
let x = 150;
let y = 100;
// Define how long the line is that is drawn
const lineLength = 60;

// setting up canvas draw
// Line Features
// ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = lineLength;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// add event listener for keys pressed
// when key pressed do a thing - draw a line in the direction
window.addEventListener('keydown', function(e) {
  console.log(e.key);
  ctx.beginPath(x, y);
  ctx.moveTo(x, y);
  switch (e.key) {
    case 'ArrowLeft':
      x += -lineLength;
      e.preventDefault();
      break;
    case 'ArrowRight':
      x += lineLength;
      e.preventDefault();
      break;
    case 'ArrowUp':
      y += -lineLength;
      e.preventDefault();
      break;
    case 'ArrowDown':
      y += lineLength;
      e.preventDefault();
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
});

// clear the canvas
//
shakeButton.addEventListener('click', function(e) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ctx.moveTo(150, 150);
  // ctx.lineTo(150, 150);

  ctx.restore();
});
