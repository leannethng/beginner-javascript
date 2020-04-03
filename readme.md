# Vanilla JS Projects

Each of these projects have been built using assets from Beginner JavaScript Course by Wes Bos. My strategy with these projects is to use the requirements to tackle each project myself first before watching the solution. Below are my notes, learnings and finished projects.

[Notes](https://github.com/leannethng/beginner-javascript/tree/master/notes/)

## Project List:

[Etch-a-Sketch](#Etch-a-Sketch)

[Modal Window](#Modal-Window)

[Scroll to Accept](#Scroll-to-Accept)

[Tabs](#Tabs)

---

## Etch-a-Sketch

[Codepen Demo](https://codepen.io/leannethng/pen/dyPBggo)

[Project Code](https://github.com/leannethng/beginner-javascript/tree/master/exercises/33-Etch-a-Sketch)

 <img src="https://github.com/leannethng/beginner-javascript/blob/e46ff9f07a33542fdfd4209c9288341b917c5cac/exercises/33%20-%20Etch-a-Sketch/Etch-a-Sketch.gif" width='500'/>
 
 **Useful links I used:** 
 * [Canvas documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
 * [Arrow KeyPress](https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript)
 * [Clearing Canvas for re-drawing](https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing)
 * [Canvas createLinearGradient()](https://www.w3schools.com/tags/canvas_createlineargradient.asp)
 
 
 **Learnt:** 
 - Canvas 
 - Event Listeners 
 - Destructuring objects 
 - Key press events 
 - Switch statements

---

## Modal Window

[Codepen Demo](https://codepen.io/leannethng/pen/bGNXJOb)

[Project Code](https://github.com/leannethng/beginner-javascript/tree/master/exercises/34-Click-Outside)

**Useful links I used to solve this:**

- [Element.closest docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
- [.closest Tutorial](https://allthingssmitty.com/2019/03/25/using-closest-to-return-the-correct-dom-element/)
- [Loop to listen to multiple elements](https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)

**Learnt:**

- Traversing the DOM
- Click Events and Event Listeners
  - Click outside technique
- Looping with .forEach() to add event listeners to multiple elements
- `.closest` traverses up the DOM tree
- `.queryselector` traverses down the DOM tree

**Extra functionality:**

- Added a button to the modal window that can be clicked to close the modal.

**Notes:**

While making this I decided to add extra functionality and felt for the user experience it would make sense to have a button on the modal that could be pressed to close the modal as well as the click outside functionality.

When adding the button directly to the HTML I found it was getting removed as .innerHTML was replacing the contents inside the inner modal div. I tried switching to use `Element.insertAdjacentHTML()` however I realized we do want the functionality to replace the current contents with the new image and title etc instead of appending and adding.

I then created the button in the JS and that seems to work as intended.

---

## Scroll to Accept

[Codepen Demo](https://codepen.io/leannethng/pen/wvawmEy)

[Project Code](https://github.com/leannethng/beginner-javascript/tree/master/exercises/35-Scroll-To-Accept)

**Useful links I used to solve this:**

- [Determine if div is scrolled to bottom](https://stackoverflow.com/questions/876115/how-can-i-determine-if-a-div-is-scrolled-to-the-bottom)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

**Learnt:**

- `IntersectionObserver` to watch for visibility of an element or object
- Wrapping code into functions

**Notes:**

My initial tactic for this project was to use the `if (terms.scrollHeight - terms.clientHeight === terms.scrollTop)..` method of figuring out if you are at the bottom of the page. From watching the example I learnt about the `IntersectionObserver()` this seems like a nice solution as you can stop watching after the event you wanted has happened.

---

## Tabs

[Codepen Demo](https://codepen.io/leannethng/pen/PoqodoK)

[Project Code](https://github.com/leannethng/beginner-javascript/tree/master/exercises/36-Tabs)

**Useful links I used:**

- [Hidden attribute docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)
- [ARIA: Tab Role Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
- [.setAttribute() MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
- [Codrops tab style inspiration](https://tympanus.net/Development/TabStylesInspiration/)

**Learnt:**

- Using `hidden` attribute
- Aria tab role
- DOM tree, moving back up the tree to look down on multiple elements
- `.find()` and turning a `nodeList` into an `array`

**Notes:**

[I wrote up a lot of notes on this project here](https://github.com/leannethng/beginner-javascript/tree/master/notes/module-6-tabs-project.md)

---

## Shopping Form

[Project Code](https://github.com/leannethng/beginner-javascript/tree/master/exercises/57-ShoppingList)

**Useful links I used to solve this:**

-

**Learnt:**

-

**Notes:**

---

Course Materials: [Beginner JavaScript](https://BeginnerJavaScript.com)
