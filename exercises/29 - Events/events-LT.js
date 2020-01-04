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
function attachListenerClick(buyButton) {
  buyButton.addEventListener('click', buyItem);
  console.log(buyButton);
}

console.log(buyButtons.length);

function buyItem() {
  console.log('Buying items');
}
// const button = buyButtons.length;

// for (i = 0; i < button; i++) {
//   buyButtons[i].addEventListener('click', buyItem);
// }

buyButtons.forEach(attachListenerClick);
