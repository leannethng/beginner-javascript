// 1. Grab the buttons using their `[role="tab"]`. This is the common id that can look for all 3 at once

// 1. Grab the info divs using their `[role="tabpanel"]`
// 3. Functions that run after the event listener triggers.

// Button - When a button is pressed set the `aria-selected` on that button to `true` and the others to `false`

// Divs - When a button is pressed ensure the related div has the attribute `hidden` removed and that the other divs have `hidden` added

// Finding related div could be done by matching the button `id` with the div `aria-labelledby` need to figure out how to do this matching.

// 2. Listen for clicks - probably need to do the forEach loop over the buttons
