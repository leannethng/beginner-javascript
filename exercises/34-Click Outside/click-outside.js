// --- Defining Variables ---
// Target the button element in the DOM
const cardButton = document.querySelectorAll('.card button');
// Target the modal windows in the Dom
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// --- Functionality for event listeners ---
// Once button is clicked - unhide the modal window
function openModal() {
  console.log('it got clicked');
  modalOuter.classList.add('open');
}
// When the modal-outer is clicked - hide them both
function closeModal() {
  console.log('it is closed');
  modalOuter.classList.remove('open');
}

// --- Event Listeners ---
//  ** Event Listener wrapped in forEach for looping **
// Listen for when the buttons are clicked
cardButton.forEach(button => {
  button.addEventListener('click', openModal);
});

//  ** Event Listener calling a function inside the listener function **
// Listen for when the modal window is visible
modalOuter.addEventListener('click', function(event) {
  // on click this checks isOutside is True or False
  // is the click NOT on the modal-inner - TRUE or FALSE
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);
  // If the click is NOT on the modal-inner then close the modal
  if (isOutside) {
    // Calling the closeModal function that was made above to do the action
    closeModal();
  }
});

// Event listener on the inner modal to test the close functionality
modalInner.addEventListener('click', function() {
  console.log("don't close");
});
