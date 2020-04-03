# Shopping cart, local storage, event delegation

- Make a submit handler - Typically we don't need to use the default submit, just listen for the 'submit' event, use other JS to listen

- In the console you can right click and set the form as a global variable to access it.

- `console.dir` shows you all the variable you can use with it.

- because we have the input with an id called `item` we can use `e.currentTarget.item.value` to grab the input.

- Every time we have a list of item, it is best to give each a unique id so that they can be easily accessible.

- The button has an X with is the multiply sign `&times`, to help ith accessibility, add in an aria-label with `<button aria-label="Remove ${item.name}">&times;</button>` as that is what the screen reader will say.

- `list.dispatchEvent(new CustomEvent('itemsUpdated'));` creates a new event inside the handleSubmit function that can be used in a `addEventListener`

- This listens for the dispatchEvent in the handleSubmit function and then triggers the displayItem event rather than have it trigger directly from the handleSubmit function

```
list.addEventListener('itemsUpdated', displayItems);
```

## Event delegation

When you try to listen for events on items that you are creating with JS, you need to use event delegation.
Instead of listening for clicks on this that don't exist yet/ haven't been created in the DOM yet, listen for clicks on things that we do know are then then it can check for a lower item
