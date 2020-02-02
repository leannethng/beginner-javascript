// Defining all the variables
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Define how long the line is that is drawn
const LINE_WIDTH = 50;
const MOVE_AMOUNT = 50;
let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

const { width, height } = canvas;

// create random x and y points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineCap = 'round';
ctx.lineWidth = LINE_WIDTH;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Draw function
// destructured to just pass in .key with {key}
function draw({ key }) {
  // increment the hue
  hue += 3;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move our x and y values depending on what the user did
  switch (key) {
    case 'ArrowLeft':
      x += -MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowUp':
      y += -MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// when key pressed do a thing - draw a line in the direction
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    // To pass in to options
    draw({ key: e.key });
  }
}

// clear the canvas
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      console.log('done the shake');
      canvas.classList.remove('shake');
    },
    // This removes the event listener after it is run so it doesnt compound
    { once: true }
  );
}

// add event listener for keys pressed and clearing canvas
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
