// console.log('Im working!');

const p = document.querySelector('p');
const item2 = document.querySelector('.item2');
const imageItem2 = item2.querySelector('img');
console.log(p);
console.log(item2);
console.log(imageItem2);

const heading = document.querySelector('h2');
console.dir(heading);
console.log(heading.textContent);
console.log(heading.innerText);
// set the textContent
heading.textContent = 'Loola rules';
console.log(heading.textContent);
console.log(heading.innerText);
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
pizzaList.insertAdjacentText('beforeend', '🍕');
