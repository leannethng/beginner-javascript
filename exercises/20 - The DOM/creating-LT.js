console.log(`it works!`);

const myParagraph = document.createElement('p');
myParagraph.textContent = 'Im a P';

const myDiv = document.createElement('div');
myDiv.classList.add('special');

myDiv.appendChild(myParagraph);
document.body.appendChild(myDiv);

const heading = document.createElement('h1');
heading.textContent = 'Im a heading';

myParagraph.insertAdjacentElement('beforebegin', heading);

const unorderedList = document.createElement('ul');
const listItem = document.createElement('li');

listItem.textContent = 'i am a item in a list';
unorderedList.appendChild(listItem);
myDiv.appendChild(unorderedList);

const li1 = listItem.cloneNode(true);
li1.textContent = 'one';
console.log(li1);
unorderedList.insertAdjacentElement('afterbegin', li1);
