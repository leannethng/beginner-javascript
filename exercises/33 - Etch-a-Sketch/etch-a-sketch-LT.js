const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
console.log(shakeButton);
let x = 150;
let y = 100;

ctx.lineWidth = 50;
// ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// setting up canvas draw
ctx.beginPath(x, y);
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
      x += -10;
      e.preventDefault();
      ß;
      break;
    case 'ArrowRight':
      x += 10;
      e.preventDefault();
      break;
    case 'ArrowUp':
      y += -10;
      e.preventDefault();
      break;
    case 'ArrowDown':
      y += 10;
      e.preventDefault();
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
});
