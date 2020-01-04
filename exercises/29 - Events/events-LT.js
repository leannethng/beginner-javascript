const butts = document.querySelector(`.butts`);
const coolButton = document.querySelector(`.cool`);
const buyButtons = document.querySelectorAll('button.buy');

// get something, listen for something then do something
function handleClick() {
  console.log('it got clicked');
}

butts.addEventListener('click', handleClick);

coolButton.addEventListener('click', handleClick);

// to remove event listener it cant be with an anonymous function
// butts.removeEventListener('click', handleClick);

// Listen on muliple items

// Making a function - used our own name for attachListenerClick
// function attachListenerClick(buyButton) {
//   buyButton.addEventListener('click', buyItem);
//   console.log(buyButton);
// }

// console.log(buyButtons.length);

// function buyItem() {
//   console.log('Buying items');
// }
// // const button = buyButtons.length;

// // for (i = 0; i < button; i++) {
// //   buyButtons[i].addEventListener('click', buyItem);
// // }

// buyButtons.forEach(attachListenerClick);
// Event parameter is also commonly called e
function handleBuyButtonClick(event) {
  const button = event.target;
  console.log(button.textContent);
  console.log('You are buying it');
  console.log(event);
  console.log(event.target);
  console.log(parseFloat(event.target.dataset.price));
  // most cases it is best to reach for event.currentTarget
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Propagation - click on multiple things at the same time strong tag - button - window etc etc the event keeps going up the chain

  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

// mouse moved

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', function(e) {
  console.log('mouse moved');
  // 'This' keyword is equal to whatever is to the left of the dot
  // console.log(e.currentTarget);
  // might be good to not use 'this' in event listeners as with arrow functions 'this' is not scoped the same way. It is good but can also make it hard ot know what 'this' is
  console.log(this);
});
