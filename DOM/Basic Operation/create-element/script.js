//Creating a paragraph 
const p = document.createElement('p');
p.innerText = 'This a paragraph create by dom manipulation';
document.body.appendChild(p);

//Creating a button 
const btn = document.createElement('button');
btn.innerText = 'Click Me!';
document.body.appendChild(btn);

//Creating a h2
const h2 = document.createElement('h2');
h2.innerText = 'This a h2 crate by dom manipulation';
document.body.appendChild(h2);

//Creating an input tag

// Create a label for the input
const label = document.createElement('label');
label.innerText = 'Goooogle: ';
label.htmlFor = 'searchInput';

// Create the input
const input = document.createElement('input');
input.id = 'searchInput';
input.placeholder = 'Search...';

// Append label and input to the body
document.body.appendChild(label);
document.body.appendChild(input);