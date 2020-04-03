# Module 7 - Logic and Flow Control

[Link to project](github.com/leannethng/beginner-javascript/tree/master/playground)

## BEDMAS

- 1: Brackets
- 1.1: Parenthesis
- 2: Exponents
- 3: Division
- 4: Multiplication
- 5: Addition
- 6: Subtraction

```
  const age = 10 * 5 - 2; // 48
  const age2 = 10 * (5 - 2); // 30

  function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
  }

  const total = calculateBill(100) + (calculateBill(20) - calculateBill(15));

  console.log(total);
  <!-- 134.4 -->

```

## Flow Control - If Statements, Function Returns, Truthy, Falsy

- Sluggify code - see `8-if-statments.html` file

```
      function sluggify(sentence, lowercase) {
        if (lowercase) {
          return sentence.replace(/\s/g, "-").toLowerCase();
        }
        //else
        return sentence.replace(/\s/g, "-");
      }


      // drier way
      function sluggify(sentence, lowercase) {
        let slug = sentence.replace(/\s/g, "-");
        if (lowercase) {
          return slug.toLowerCase();
        }
        //else
        return slug;
      }


      const phrase1 = sluggify("Hello, I like beans!", true);
```

> [Meaning of regex /\s/g](https://stackoverflow.com/questions/5365428/how-does-s-g-replace-spaces-with-other-characters/5365433) - It's a regular expression where the \s means "match whitespace" and the g is a flag which means "global", i.e. match all whitespace, not just the first.

- regex start and ends with `/`, the `\s` mean whitespace, `g` means global

* `!==` bang mean doesn't equals

### truthy and falsy

**Truthy Values**

- All numbers except 0
- full string
- a string of "0"

**Falsy Values**

- 0
- undefined variable
- Variable set to null
- a variable set to NaN i.e `"hello" - 10`
- empty string

## Coercion, Ternaries and conditional Abuse

```
if (dog) {
   console.log('you have a dog');
 }
```

if condition is true return 'you have a dog', this can be fliped with a bang.

     ```
      if (!dog) {
      console.log('you don't have a dog');
       }
    ```

Double bang means true, don't need ot use that often if you understand truthy and falsy.
`if (!!dog) { console.log('you have a dog'); }`

[Bang Bang](https://medium.com/better-programming/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054)

### Shorthand if statement with ternarys

```
  const count = 5;
  const word = count === 1 ? 'item' : 'items';
  const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
  console.log(sentence);

```

- Instead of if statement:

```
  const count = 5;
  let word;
  if (count === 1) {
    word = 'item';
  } else {
    word = 'items';
  }

```

- You can use `null` as the second parameter if you don't need anything else to happen. You always need to have a false case

```
    function showAdminBar() {
      console.log('Showing admin bar');
    }

    const isAdmin = false;
    isAdmin ? showAdminBar() : null;
```

- And And trick

```
    function check1() {
      console.log('Running check 1');
      return true;
    }
    function check2() {
      console.log('Running check 2');
      return false;
    }
    function check3() {
      console.log('Running check 3');
      return true;
    }

    if (check1() && check2() && check3()) {
      console.log('all checks passed');
    } else {
      console.log('Some checks failed');
    }

```

Short circuiting meand hop out the code if one comes back as false, no need to keep checking.

- Can use `&&` as a kind of check, if `isAdmin` is false it won't continue to show the admin

```
isAdmin && showAdminBar();
```

## Case Switch and animating a turtle

- Grabbing a css value in JS

These are common ways to grab named css attributes

```
  turtle.style.background = 'red';
  turtle.style['background'] = 'red';

```

As we are using css custom properties, we need to use `setAttribute` [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

```
  turtle.setAttribute('style', `--x: ${x}px; --y: ${y}px;`);

```

## Intervals and timers

- Timeout - after 5 secs
- Intervals - every 5 secs

```
setTimeout(callback, milliseconds)
```

JavaScript lines up the code to be run then keeps going. Asyncronous code.

```
      function buzzer() {
        console.log('ENNGGGGGGG');
      }

      console.log('Starting');
      setTimeout(buzzer, 500);
      console.log('finishing');
```

- SetInterval() runs after time given then keeps running.

- If we want it to start immediately we need to write a custom function for that

```
      function buzzer() {
        console.log('ENNGGGGGGG');
      }

      function setImmediateInterval(funcToRun, ms) {
        // right away call that function
        funcToRun();
        // run a regular interval
        return setInterval(funcToRun, ms);
      }

      setImmediateInterval(buzzer, 2000);
      function sayHi() {
        console.log('Heyyy');
      }
```

- Clearing timers - Save reference to the timer in a variable so we can stop it

```
      function destroy() {
        document.body.innerHTML = `<p>DESTROYED</p>`;
      }

      const bombTimer = setTimeout(destroy, 5000);

      window.addEventListener('click', function() {
        console.log('You clicked! You saved the world');
        // ???? How do i stop
        clearTimeout(bombTimer); // STOP THE TIMER FROM RUNNING
      });

```
