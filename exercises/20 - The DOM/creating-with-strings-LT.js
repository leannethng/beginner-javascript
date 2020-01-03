const item = document.querySelector('.item');

const src = 'https://picsum.photos/500';
const myHtml = `
<div> 
<h1>Hey how are ya! </h1>
<img src ="${src}">
</div>
`;
item.innerHTML = myHtml;
console.log(item.innerHTML);
