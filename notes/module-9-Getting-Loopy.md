# Module 9 - Getting Loopy

### .forEach()

```javascript
function logTopping(topping, index, array) {
  const prevTopping = array[index - 1];
  const nextTopping = array[index + 1];
  const lastTopping = index === array.length - 1;

  //  --- log the prev topping if there is one ---
  prevTopping ? console.log(prevTopping) : null;
  // if (prevTopping) {
  //   console.log(prevTopping);
  // };

  //  --- log the next topping if there is one ---
  nextTopping ? console.log(nextTopping) : null;
  // if (nextTopping) {
  //   console.log(nextTopping);
  // };

  //  --- if its the last topping in the array say goodbye ---
  // if (index === array.length - 1) { console.log(`Say goodbye`) }
  lastTopping ? console.log(`Say goodbye`) : null;
}

toppings.forEach(logTopping);
```

- .forEach() does return a value
- .forEach() does side effects, loop over the data and do something with each piece of data:
  - displaying that data on a page
  - logging a value
  - attaching an event listener for a click
- Side effects are when you are inside of a function and you reach outside of that function to do something else.

### .map()

- **map, filter and reduce** are other loops that:
  - take in data
  - do something with that data
  - then return the data which has been modified, massage or transformed in some way

### .filter()

### .reduce()
