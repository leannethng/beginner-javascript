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

- When comparing objects, it is done with reference to the object itself not to the values inside of it.

- When objects and arrays are referenced /points to another object not copied it will update the original object.

`const person3 = person1;`

- You can take a copy is via spread, take everything in an object and spread it into a new object. They only do shallow copys, 1 level deep.

`const person3 = { ...person1 }`

- taking a copy however only goes 1 level deep, this code below would update both the origial person1 and the person3 objects.

```
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

```
  const inventory = {
  ...meatInventory,
  ...veggieInventory,
  oyster: 10,
  };
```

- If you pass an object into a function and you modify the object and array, the external object or array that is being reference will also update. Yuo may accidentally modify data without realizing. It may the case that you want to modify external data but copying may be better.

- This is unlike the behavior for numbers, booleans and strings.

## Maps

## Arrays
