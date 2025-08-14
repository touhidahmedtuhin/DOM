const list = document.querySelector('#myList');
//console.log(list);
const itemToRemove = list.children[0];
//console.log(itemToRemove);
list.removeChild(itemToRemove);

//Remove a div
const div = document.querySelector('.divclass');
div.remove();

//Removing all the list item using replacechildren
const foodList = document.querySelector('#foodList');
foodList.replaceChildren();

