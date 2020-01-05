const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
console.log(shakeButton);

ctx.lineWidth = 50;
// ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// setting up canvas draw
ctx.beginPath(10, 500);
ctx.moveTo(10, 500);
ctx.lineTo(10, 500);
ctx.stroke();

// add event listener for keys pressed
// when key pressed do a thing - draw a line in the direction
