const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  // console.log('submitted!!!');
  // console.log(e.currentTarget.item.value)
  const name = e.currentTarget.item.value;
  //  if its empty then don't submit it
  if (!name) {
    return;
  }
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  //  Push the items into our state
  items.push(item);
  console.log(`there are now ${items.length} items in your state`);

  // clear the form
  e.target.reset();

  // Ideally don't run the function below for rendering the html, it tightly couples the handle submit with the rendering which can cause issues and be clunky. We will need ot display the items multiple times so would need to call it a lot. In larger apps, you may need to do a few more things after this. So to avoid duplication we need to make custom events that tells anyone else who needs to know that items have been updated.
  // displayItems();
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
     <input value = "${item.id}" type="checkbox" ${
        item.complete ? 'checked' : ''
      }>
     <span class = itemName>${item.name}</span>
     <button aria-label="Remove ${item.name}" value = "${
        item.id
      }">&times;</button>
     </li>`
    )
    .join('');
  list.innerHTML = html;
  // console.log(html);
}
// Adding items to Local Storage
function mirrorToLocalStorage() {
  console.info('saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from local storage');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // console.log('Deleting item', id);
  // update the items array without this one
  items = items.filter(item => item.id !== id);
  // console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  console.log('marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  console.log(itemRef);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
// This listens for the dispatchEvent in the handleSubmit function and then triggers the displayItem event rather than have it trigger directly from the handleSubmit function
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event delegation, listen for click on the list UL but then delegate the click over to the button if that is what is clicked
list.addEventListener('click', function(e) {
  // console.log(e.target, e.currentTarget);
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type = "checkbox"]')) {
    markAsComplete(id);
  }
});
// Runs on page load
restoreFromLocalStorage();
