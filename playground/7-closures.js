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

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hai');

console.log(sayHello('wes'));
console.log(sayHello('loola'));
console.log(sayHey('wes'));

function createGame(gameType) {
  let score = 0;
  return function win() {
    score++;
    return `Your score is ${score} for game of ${gameType}`;
  };
}

const hockeyGame = createGame('Hockey');
