const tabs = document.querySelector('.tabs');

// 1. Grab the tab buttons using their `[role="tab"]`. This is the common id that can look for all 3 at once
const tabButton = tabs.querySelectorAll(`[role="tab"]`);

// 1. Grab the tab panel using their `[role="tabpanel"]`
const tabPanels = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

console.log(tabPanels.parentNode);

// 3. Functions that run after the event listener triggers.
function openPanel(e) {
  // capture current tab button pressed
  const currentTab = e.currentTarget;
  console.log(currentTab);

  // Tab Button - When a tab button is pressed set everything to false then set the selected one to `true`
  tabButton.forEach(button => {
    button.setAttribute('aria-selected', false);
  });
  currentTab.setAttribute('aria-selected', true);

  // Tab Panels - When a tab button is pressed hide all tab panels the ensure the selected tab panel has the attribute `hidden` removed
  tabPanels.forEach(panel => {
    panel.setAttribute('hidden', true);
  });

  // Finding related tab panel could be done by matching the tab button `id` with the tab panel `aria-labelledby` need to figure out how to do this matching.

  // METHOD 1 - Shorthand
  /*
  tabs
    .querySelector(`[aria-labelledby=${currentTab.getAttribute('id')}]`)
    .removeAttribute('hidden');
  */

  // METHOD 1.1 - Longer version

  const { id } = e.currentTarget;
  /*
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.removeAttribute('hidden');
  */

  // METHOD 2 - Find() in the array of tabPanels
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.removeAttribute('hidden');

  console.log(tabPanel);
}

// 2. Listen for clicks - probably need to do the forEach loop over the tab buttons

tabButton.forEach(button => {
  button.addEventListener('click', openPanel);
});
