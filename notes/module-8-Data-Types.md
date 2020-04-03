# Module 8 - Data Types

[Link to project](github.com/leannethng/beginner-javascript/tree/master/playground)

## Objects

- Everything is an object
- The order of properties does not matter in an object, do not rely on the order at which you put the properties into your object
- Stores a set a key(property)/value pair
- Object literal syntax:

```javascript
const age = 100;
const wes = {
  age,
  name: 'wes',
  propertyToCheck: 'NEVER',
  'cool-dude': true,
  'really cool': false,
  '777': true,
  dog: 'snicker',
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
};

wes.job = 'Web Developer';
wes.age = 50;
```

- Add comma-dangle, all browsers now support this.
- Using const but can change the values within an object, properties can change, but you can't overwrite the object itself, ie refine . Below would not be allowed as wes is already defined.

```javascript
const wes = {
  age: 100,
  name: 'wesley',
};
```

- You can also make an immutable object that the values can never be changed on with `Object.freeze(wes)`

* Access properties with the dot notation: `wes.age`

* or the square brackets: `wes['age']` (useful for when the property of the object is stored in a variable or the key is a string)

* Method is a function that lives inside of an object. Method of an object.

* `this` is equal to the left of the `.`

```javascript
this.name == wes.name;
```

- Doesn't work on arrow functions as they don't use `this` keyword.

## Object References vs Values

- When comparing objects, it is done with reference to the object itself not to the values inside of it.

- When objects and arrays are referenced /points to another object not copied it will update the original object.

`const person3 = person1;`

- You can take a copy is via spread, take everything in an object and spread it into a new object. They only do shallow copy's, 1 level deep.

`const person3 = { ...person1 }`

- taking a copy however only goes 1 level deep, this code below would update both the original person1 and the person3 objects.

```javascript
const person1 = {
  first: 'wes',
  last: 'bos',
  clothing: {
    shirts: 10,
    pants: 2,
  },
};

person3.clothing.shirts = 100;
```

- To do a full clone or copy, you can use something like lodash library. `_.CloneDeep`

- To use lodash you can use unpkg to get the latest lodash link to add in as a script tag at the top of your body.

- Merge objects by spreading in objects into a new variables, you can also mix and match and add in a new value. The order in which you spread matters as the later ones will overwrite if they are the same.

```javascript
const inventory = {
  ...meatInventory,
  ...veggieInventory,
  oyster: 10,
};
```

- If you pass an object into a function and you modify the object and array, the external object or array that is being reference will also update. Yuo may accidentally modify data without realizing. It may the case that you want to modify external data but copying may be better.

- This is unlike the behavior for numbers, booleans and strings.

## Maps

- Maps can be used to put any value into the `key` and `value`.
- Dictionary can be used to store metadata

- Can use a reference of an object as the key to store some additional data about the object.

- Map order is guaranteed, they will always stay in the order

- There is no literal

- Cannot set methods, they are simply for storing data

## Arrays

- It holds a list of items where the order matters.
- Each thing inside an array is an item and its position is called the index.
- The number of items index an array is called a length and each item can be any type.
- Array isn't its own type, it is an object. In the browser console type:
  `typeof names` returns `object`
- To find out if an array is actually an array type: `Array.isArray(names)` it will return true if it is an array.
- To access things inside an array use their index. Index starts at 0, they are zero based.

```javascript
// Access items
console.log(names[0]);

//  How many things in an array
console.log(names.length);

//  Access last item in an array
console.log(names[names.length - 1]);
```

### Mutable vs immutable

- Mutable methods perform mutations, when something changes the original version of it.

- Immutable methods do not change the original thing, they simply return a new array.

```javascript
//  Mutation methods
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBackwards = numbers.reverse();
console.log(numbersBackwards);
console.log(numbers);
```

- Try not to mutate the original

```javascript
  // Immutable methods
  .slice();
```

- Anytime you want to use a mutation method and you don't want to change the original, you need ot take a copy first, use spread to copy original array.

```javascript
const numbersReversed = [...numbers];
numbersReversed.reverse();
console.log(numbersReversed);
// Shorter
const numbersReversed = [...numbers].reverse();
```

### .push() and .unshift()

- Adding a new item to the end or beginning of an array, this will mutate the original

```javascript
// Mutable methods
names.push('baxter');
console.log(names);

names.unshift('lisa');
console.log(names);
```

- Can take a copy first then add the new item to the end, this way is quite common for React. you don't want ot push items into state, you want to take a copy and update state.

```javascript
// Immutable way to use mutable methods
const names2 = [...names, 'baxter'];
const names3 = ['lisa', ...names];
```

### .slice() and .splice()

- **\*slice** lets you take a portion of the original array, slice is immutable and **splice** is mutable.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// first number is starting point, 2nd is the count of how many from that point you want to delete.
numbers.splice(3, 6);
console.log(numbers);
```

- Probably want to use slice more often as it doesn't mutate the original

### Adding and removing items in the middle of an array

```javascript
// --- adding items to the middle
// want to add Diablo between animal crossing and WoW
const games = ['stardew', 'animal crossing', 'WoW', 'Monster Hunter'];
// first number is starting point, 2nd is count of how many, 2md does not index from 0
const newGames = [...games.slice(0, 2), 'diablo', ...games.slice(2)];

// --- removing items from the array
// want to remove 'WoW'

const newGames2 = [...newGames.slice(0, 3), ...newGames.slice(4)];

console.log(newGames);
console.log(newGames2);
```

### Example of deleting an item in the middle of an array

- **Quite a common thing to do in React**

- Need to use .findIndex() similar to a loop, loop over every item until we find the value we want when it return true we get the index.

```javascript
// Delete example
const comments = [
  { text: 'cool beans', id: 123 },
  { text: 'awesome', id: 127 },
  { text: 'nice', id: 163 },
  { text: 'woooooo', id: 323 },
  { text: 'bamm', id: 143 },
];

function deleteComment(id, comments) {
  // Find the index of the item in the array we want to delete
  // Take the comments and useFind index to see if the comment id is equal to the id that has been passed in.
  const commentIndex = comments.findIndex(comment => comment.id === id);
  // return a new array without that item in it
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
}
// passing in an index and the comments array
const deleteMe = deleteComment(323, comments);
console.log(deleteMe);
```

### Turn an object into arrays

```javascript
// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const myEntries = Object.entries(meats);
console.log(myEntries);

const myKeys = Object.keys(meats);
console.log(myKeys);

const myValues = Object.values(meats);
console.log(myValues);

// Useful use cases
Object.values(meats).forEach(qty => {
  console.log(qty);
});

Object.entries(meats).forEach(entry => {
  // const key = entry[0];
  // const value = entry[1];
  // --- Destructuring inside ---
  const [key, value] = entry;
  console.log(key, value);
});

// Destructuring outside
Object.entries(meats).forEach(([key, value]) => {
  console.log(key, value);
});
```

### .join() to turn array into string

```javascript
// Display all bun types with " or " - use join()
const myBuns = buns.join(' or ');
console.log(myBuns);
```

### .find() | Object Destructuring | Arrow functions

```javascript
const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

// Arrow and destructuring
const burgers = feedback.find(({ comment }) => comment.includes('burger'));
console.log(burgers);

// Just destructuring
const burgers = feedback.find(function({ comment }) {
  return comment.includes('burger');
});
console.log(burgers);
```

Turning it into a reusable function:

```javascript
function findMyWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word);
  };
}
// -- destructured ---
// function findMyWord(word) {
//     return function ({comment}) {
//       return comment.includes(word);
//     }
//   }

const burgFinder = findMyWord('burg');
const smoothieFinder = findMyWord('Smoothie');
const burgRating = feedback.find(findMyWord);
console.log(burgRating);
```

[Mozilla - Destructuring Hacks](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)

### for of

```javascript
      for (const { comment: c } of feedback) {
        // console.log(feedback[1].comment);
        console.log(c);

```

### .filter()

```javascript
//Reusable function
function showRatingsAbove(ratingAbove) {
  return function(singleFeedback) {
    return singleFeedback.rating > ratingAbove;
  };
}

const goodReviews = feedback.filter(showRatingsAbove(3));
// destructuring - original solution
const myRating = feedback.filter(({ rating }) => rating > 2);
```

[filter and find - Stack Overflow](https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-of-property)

- `find()` looks for the first instance of the thing you are searching for.
- `filter()` creates a new array with all the results that pass the test.

### Accessing Values from an object

```javascript
const isThereEnoughMeat = Object.values(meats).some(
  meatValue => meatValue > 10
);
console.log(isThereEnoughMeat);
```

### .sort()

.sort() can take in a compareFunction. In the mozilla docs this is described as a function that can take in parameters a & b. Subtracting b from a will return either 0, less than 1 or greater than 1.

[.sort() - Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

[How does sort function work in JavaScript, along with compare function - Stack overflow](https://stackoverflow.com/questions/6567941/how-does-sort-function-work-in-javascript-along-with-compare-function)

> The "compare" function must take two arguments, often referred to as a and b. Then you make the compare function return 0, greater than 0, or less than 0, based on these values, a and b.

> - Return greater than 0 if a is greater than b
> - Return 0 if a equals b
> - Return less than 0 if a is less than b

> With these three return values, and only two arguments, it is possible to write a compare function that can sort any type of input data type, or complex data structures.

> Then, when you call sort(), with your custom compare function, the compare function is called on pairs in your to-be-sorted list, to determine the proper ordering.

```javascript
function compare(a, b) {
  return a - b;
}
```

> Simply subtracting b from a will always return greater than zero if a is larger than b, 0 if they are equal, or less than zero if a is less than b. So it meets the requirements for a compare function.

> Now lets suppose this is our list of numbers to sort:

```javascript
var numbers = [1, 5, 3.14];
```

> When you call numbers.sort(compare), internally it will actually execute:

```javascript
compare(1, 5); // Returns -4, a is less than b
compare(1, 3.14); // Return -2.14, a is less than b
compare(5, 3.14); // returns 1.86, a is greater than b
```

> If you've ever done manual sorting or alphabetizing, you've done precisely the same thing, probably without realizing it. Even though you may have dozens or hundreds of items to compare, you're constantly comparing only two numbers (or author's last names, or whatever) at a time. Going through or short list of three numbers again, you'd start by comparing the first two numbers:

> - Is 1 greater than or less than 5? Less than, so put these two numbers in our list: 1,5
> - Is 3.14 greater than or less than 1? Greater than, so it goes after 1 in the new list
> - Is 3.14 greater than or less than 5 in our new list? Less than, so it goes before 5. Our new list is now [1,3.14,5]

> Because you can provide your own compare() function, it is possible to sort arbitrarily complex data, not just numbers.

### Sorting an object by one parameter

```javascript
function comparePrices(a, b) {
  const aPrice = a[1];
  const bPrice = b[1];
  // debugger;
  console.log(a, b);
  return aPrice - bPrice;
}

const sortPrices = Object.entries(prices).sort(comparePrices);
console.table(sortPrices);
console.table(Object.fromEntries(sortPrices));
```
