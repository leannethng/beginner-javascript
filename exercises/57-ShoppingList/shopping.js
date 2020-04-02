const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

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
  displayItems();
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      item => `<li class="shopping-item">
     <input type="checkbox">
     <span class = itemName>${item.name}</span>
     <button aria-label="Remove ${item.name}">&times;</button>
     </li>`
    )
    .join('');
  list.innerHTML = html;
  console.log(html);
}

shoppingForm.addEventListener('submit', handleSubmit);
