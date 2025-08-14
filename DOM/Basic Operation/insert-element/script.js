//insertBefore
const h3 = document.createElement('h3');
h3.innerText ='This is a h3 heading just before paragraph.';
h3.id = 'h3';
const pElem = document.querySelector('p');
document.body.insertBefore(h3,pElem);

//add h2 before h3
const h2 = document.createElement('h2');
h2.innerText = 'This is a h2 heading just before h3 heading.'

const h3Heading = document.querySelector('#h3');
document.body.insertBefore(h2,h3Heading);

//adding a span tag after paragraph tag useing insertBefore 

const span = document.createElement('span');
span.innerText = 'This a span tag.';
const h3Elem = document.querySelector('#h3');
document.body.insertBefore(span, h3Elem.nextElementSibling);