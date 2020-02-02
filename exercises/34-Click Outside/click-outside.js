// Defining Variables
// -- Target the button element in the DOM
const cardButton = document.querySelectorAll('.card button');
// -- Target the modal window in the Dom
const modalOuter = document.querySelector('.modal-outer');

// Functionality for event listeners
// -- Once button is clicked - unhide the modal window
function openModal() {
  console.log('it got clicked');
  modalOuter.classList.add('open');
}
// -- When the modal-outer is clicked - hide them both
function closeModal() {
  console.log('it is closed');
  modalOuter.classList.remove('open');
}

// Event Listeners
// -- Listen for when the buttons are clicked
cardButton.forEach(button => {
  button.addEventListener('click', openModal);
});

// -- Listen for when the modal window is visible
modalOuter.addEventListener('click', closeModal);
