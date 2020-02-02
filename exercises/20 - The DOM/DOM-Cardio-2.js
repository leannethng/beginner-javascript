// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
const body = document.querySelector('body');
body.appendChild(div);

// -------------------------------------
// make an unordered list
const unorderedList = document.createElement('ul');
// add three list items with the words "one, two three" in them

const stringArray = ['One', 'Two', 'Three'];

let newListItem;
for (let i = 0; i < stringArray.length; i++) {
  newListItem = document.createElement('li');
  newListItem.textContent = stringArray[i];
  unorderedList.appendChild(newListItem);
}

// put that list into the above wrapper
div.appendChild(unorderedList);

// -------------------------------------
// create an image
// const image = document.createElement('img');
// set the source to an image
// set the width to 250
const myImage = new Image(250);
myImage.src = 'https://picsum.photos/500';
div.appendChild(myImage);

// add a class of cute
myImage.classList.add('cute');

// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';

// Append that image to the wrapper
div.appendChild(myImage);

// -------------------------------------

// with HTML string, make a div, with two paragraphs inside of it
const paragraphs = `
  <div>
    <p>Cute </p>
    <p>Cute </p>
  </div>
`;

// put this div before the unordered list from above

const myUL = div.querySelector('ul');
console.log(myUL);

myUL.insertAdjacentHTML('beforebegin', paragraphs);

// add a class to the second paragraph called warning
const paragraphsDiv = div.querySelector('div');

paragraphsDiv.children[1].classList.add('warning');

// remove the first paragraph
paragraphsDiv.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 100;
  const playerCard = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
  </div>
`;
  return playerCard;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// Have that function make 4 cards
// eslint-disable-next-line prefer-const
let aPlayerCard = generatePlayerCard('Bobby', 31, 52);
aPlayerCard += generatePlayerCard('scott', 12, 150);
aPlayerCard += generatePlayerCard('kait', 12, 150);
aPlayerCard += generatePlayerCard('snickers', 12, 150);
// // append those cards to the div
// cardsDiv.appendChild(aPlayerCard);

// // put the div into the DOM just before the wrapper element
// div.insertAdjacentHTML('beforebegin', cardsDiv);

cardsDiv.innerHTML = aPlayerCard;
div.insertAdjacentElement('beforebegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));

const scope = 'global scope';
function checkscope() {
  const scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}
const x = checkscope()();
console.log(x);
