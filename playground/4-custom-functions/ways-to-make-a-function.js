// Regular function
// function doctorize(firstName){
//     return `Dr. ${firstName}`
// }

// // anonomus function
// function (firstName){
//     return `Dr. ${firstName}`
// }

// // function expression
// const doctorize = function (firstName){
//     return `Dr. ${firstName}`
// }

// Fuctions declared with the function key words are hoisted, ie the run at the top
// Functions declared with const or variables are not hoisted, hoisting could be an interview question but isn't really used.

// Arrow function

// function inchesToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// function inchesToCM(inches) {
//   return inches * 2.54;
// }

// // Anon function
// const inchesToCM = function(inches) {
//     return inches * 2.54;
//   };

//   // This is an arrow function
// const inchesToCM = (inches) => inches * 2.54;

// //   Implict return - no return keyword. if you only have one keyworkd, you can get rid of the () too

// const inchesToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

// arrow practice

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// This is an arrow function but nothing wrong with doing a regular function, dont do arrow function by default, it will become clear as to when to use
const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - immdiately invoked function expression

// () around a function make it run first. the (); at the end makes it run immediately
(function() {
  console.log(`Running the anon function`);
  return `You are cool`;
})();

// Methods!!! a function that lives inside of an object

// `log` is a function that lives inside the object `console` - log is thereforea called a method

// const loola = {
//     name: `loola monster`,
//     sayHi: function sayHi() {
//       console.log(`Hi loola`);
//       return `Hi loola`;
//     },
//   };

// const loola = {
//     name: `loola monster`,
//     sayHi: function() {
//       console.log(`Hi loola`);
//       return `Hi loola`;
//     },
//   };

// disabled.eslint

const loola = {
  name: `loola monster`,
  //   method
  // eslint-disable-next-line object-shorthand
  sayHi: function() {
    console.log(`Hi loola`);
    return `Hi loola`;
  },
  //   short hand method
  yellHi() {
    console.log(`HELOOO loola`);
  },
  // Arrow function
  whisperHi: () => {
    console.log(`hi loola i am a mouse`);
  },
};

// enabled.eslint

// callback functions
// click call back

const button = document.querySelector(`.clickMe`);

button.addEventListener('click', loola.whisperHi);
