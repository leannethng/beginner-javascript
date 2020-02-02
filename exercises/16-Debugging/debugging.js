const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.cool);
  console.log(person.country);
  console.groupEnd(`${person.name}`);
});

// Console Methods

// console.log, console.error, console.warn, console.table, console.count, consle.group, console.groupCollapsed

// Callstack

// Grabbing Elements
// Sellect element on a web page you want to inspect. type in $0 into the console and it will type out the element that is selected. You can then type $0.value to see the value of that thing,

// Breakpoints

// Pop a debegger; into code to step through code

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
