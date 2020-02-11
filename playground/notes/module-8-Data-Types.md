# Data Types

## Objects

- Everything is an object
- The order of properties does not matter in an object, do not rely on the order at which you put the properties into your object
- Stores a set a key(property)/value pair
- Object literal syntax:

```
const age = 100;
      const wes = {
        age,
        name: 'wes',
        properyToCheck: 'NEVER',
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

```
const wes = {
        age: 100,
        name: 'wesley',
}
```

- You can also make an immutable object that the values can never be changed on with `Object.freeze(wes)`

* Access properties with the dot notation: `wes.age`

* or the sqaure brackets: `wes['age']` (useful for when the propery of the object is stored in a variable or the key is a string)

* Method is a function that lives inside of an object. Method of an object.

* `this` is equal to the left of the `.`

```
this.name == wes.name

```

- Doesn't work on arrow functions as they don't use `this` keyword.

## Object References vs Values

## Maps

## Arrays
