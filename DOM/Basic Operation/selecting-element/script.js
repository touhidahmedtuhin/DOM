//getElementById 

const msg = document.getElementById('message');
console.log(msg);
//if there are multiple id the it will print the first id element;

//getElementBysName()
const nameElm = document.getElementsByName('language');
console.log(nameElm);

//geElementsByTagName()
let heading = document.getElementsByTagName('h1');
console.log(heading);
//getElementByClassName()
const className = document.getElementsByClassName('message')
console.log(className);

//another example
const cont = document.getElementById('container');
const message = cont.getElementsByClassName('msg');
console.log(message);

//querySelector()
const messageAgain = document.querySelector('.msg');
console.log(messageAgain);
//querySelectorAll()
const msgAll = document.querySelectorAll('.msg');
console.log(msgAll);
//another example
const cont2 = document.getElementById('container');
const msg2 =  cont2.querySelectorAll('.msg')
console.log(msg2);










