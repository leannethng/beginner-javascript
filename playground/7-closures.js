// function outer() {
//   const outerVar = 'Hey I am the outer Var!';
//   function inner() {
//     const innerVar = 'Hey I am the inner Var!';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }
// const innerFn = outer();
// innerFn();

// function createGreeting(greeting = '') {
//   const myGreet = greeting.toUpperCase();
//   return function(name) {
//     return `${myGreet} ${name}`;
//   };
// }

// const sayHello = createGreeting('Hello');
// const sayHey = createGreeting('Hai');

// console.log(sayHello('wes'));
// console.log(sayHello('loola'));
// console.log(sayHey('wes'));

// function createGame(gameType) {
//   let score = 0;
//   return function win() {
//     score++;
//     return `Your score is ${score} for game of ${gameType}`;
//   };
// }

// const hockeyGame = createGame('Hockey');

function showName(firstName, lastName) {
  const nameIntro = 'Your name is';
  // this inner function has access to the outer function's variables, including the parameter
  return function makeFullName(nameIntro) {
    return `${nameIntro} ${firstName} ${lastName}`;
  };
  // This return is the same as the return full name above
  // return makeFullName;
}

const mj = showName('Michael', 'Jackson'); // Your name is Michael Jackson

const myName = mj('my name is');
const yourName = mj('Your name is');
const ourName = mj('Our name is');

console.log(myName);
console.log(yourName);
console.log(ourName);
