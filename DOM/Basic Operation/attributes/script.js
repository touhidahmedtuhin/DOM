//Get attribute : an image 
const imgElem = document.querySelector('img');
console.log(imgElem.getAttribute('src'));
console.log(imgElem.getAttribute('alt'));
imgElem.style.width='500px';
imgElem.style.height='500px';

//Remove attribut :
//  this is use when html img have height attribute
//imgElem.removeAttribute();
//to remove in js we can use 
imgElem.style.removeProperty('height');


//Set Attribute : an image
const setElem = document.querySelector('img');
setElem.setAttribute('src','https://plus.unsplash.com/premium_photo-1661331911412-330f2e99cf53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
console.log(setElem.getAttribute('src'));


console.log(setElem.hasAttribute('src')); //true
console.log(imgElem.hasAttribute('src')); //true
console.log(setElem.hasAttribute('alt')); //true


