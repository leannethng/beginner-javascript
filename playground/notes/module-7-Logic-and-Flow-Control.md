# Logic and Flow Control

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
