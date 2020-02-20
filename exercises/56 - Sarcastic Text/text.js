// Grab the dom elements we need ot work with
const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

// when text input has text ...
function transformText() {
  result.innerText = textArea.value;
}

// Display the text in the result paragraph

// based on which filter input is selected alter the text

// Handler to output the text
window.addEventListener('input', transformText);
