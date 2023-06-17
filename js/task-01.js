const list = document.querySelector('#categories')
console.log('Number of categories: ', list.children.length)
const items = list.querySelectorAll('li.item');

items.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children;
  console.log('Category:', title);
  console.log('Elements:', elements.length);
});