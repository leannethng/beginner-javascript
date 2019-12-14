console.log(`it works`);

// function definition

function calculateBill(bill, taxRate) {
  // this is the functon body
  console.log(`this is running`);
  const total = bill * (1 + taxRate);
  //   console.log(total);
  return total;
}

// function call or **run**

const loolaTotal = 500;
const loolaTaxRate = 0.3;
const myTotal = calculateBill(loolaTotal, loolaTaxRate);

console.log(myTotal);

// console.log(`Your total is $${myTotal}`);

// or
// console.log(`Your total is $${calculateBill()}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo(`Loola`);
console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}
function yell(name = `silly goose`) {
  return `HEY ${name.toUpperCase()}`;
}

const yellDoc = yell(doctorize(`Loola`));

console.log(yellDoc);
