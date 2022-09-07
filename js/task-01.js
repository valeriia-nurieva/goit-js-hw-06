const listEl = document.querySelector('#categories');
const listItemEl = listEl.querySelectorAll('.item');

console.log('Number of categories: ', listItemEl.length);
console.log('');

listItemEl.forEach(function (listItem) {
    console.log('Category: ', listItem.firstElementChild.textContent);
    console.log('Elements: ', listItem.lastElementChild.children.length);
    console.log('');
});








