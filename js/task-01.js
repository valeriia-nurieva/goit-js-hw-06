const listEl = document.querySelector('#categories');

const listItemEl = listEl.querySelectorAll('.item');

console.log(`Number of categories: ${listItemEl.length}`);

console.log('Category: ', listItemEl[0].firstElementChild.textContent);
console.log('Elements: ', listItemEl[0].children[1].children.length);

console.log('Category: ', listItemEl[1].firstElementChild.textContent);
console.log('Elements: ', listItemEl[1].children[1].children.length);

console.log('Category: ', listItemEl[2].firstElementChild.textContent);
console.log('Elements: ', listItemEl[2].children[1].children.length);









