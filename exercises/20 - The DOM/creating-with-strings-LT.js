const item = document.querySelector('.item');

const src = 'https://picsum.photos/500';
const myHtml = `
<div class="wrapper"> 
<h1>Hey how are ya! </h1>
<img src ="${src}">
</div>
`;
// item.innerHTML = myHtml;
// console.log(item.innerHTML);

// const itemImage = document.querySelector('.wrapper img');

// itemImage.classList.add('round');

// console.log(itemImage);

// turn a string into a dom element
const myFragment = document.createRange().createContextualFragment(myHtml);

console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);
