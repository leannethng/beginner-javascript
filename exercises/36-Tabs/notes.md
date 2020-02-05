Initial thoughts:

- Started by looking at the HTML and CSS structure to see what parts I can use with JavaScript.
- The tabs are buttons
- The info the tabs will display are all created however the two that are not the active page are hidden and use `hidden` HTML Attribute.
- This seems that I could add and remove this attribute to show and hide the info depending on if its tab is selected or not.
- [Hidden attribute docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden)
- `role="tab"` and `aria-selected` attributes are used in the HTML, on investigating this I found this link which explains how to use both for creating tabs [ARIA: Tab Role Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
- The HTML I have doesn't include `tabindex`. From reading the MDN docs for accessibility purposes it would be best practice to add these in.
  > For controlling tab key functionality for elements with the role tab, it is recommended to set all non-active elements to tabindex=-1, and to set the active element to tabindex=0.
- I will look into adding this after the base functionality has been made.

First steps:

- Write up the sudo code in the .js file.

// 1. Grab the buttons using their `[role="tab"]`. This is the common id that can look for all 3 at once

// 1. Grab the info divs using their `[role="tabpanel"]`

// 3. Functions that run after the event listener triggers.

// Button - When a button is pressed set the `aria-selected` on that button to `true` and the others to `false`

// Divs - When a button is pressed ensure the related div has the attribute `hidden` removed and that the other divs have `hidden` added

// Finding related div could be done by matching the button `id` with the div `aria-labelledby` need to figure out how to do this matching.

// 2. Listen for clicks - probably need to do the forEach loop over the buttons
