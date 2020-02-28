// Grab the dom elements we need ot work with
const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

const filters = {
  sarcastic(letter, index) {
    console.log(letter, index);
    return letter;
  },
  funky() {},
  unable() {},
};

// when text input has text ...
function transformText(text) {
  // take the text and loop over each letter
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = text;
}

// Display the text in the result paragraph

// based on which filter input is selected alter the text

// Handler to output the text
window.addEventListener('input', e => transformText(e.target.value));
