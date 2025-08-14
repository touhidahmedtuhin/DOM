const h3Elem = document.querySelector('h3');
console.log(h3Elem.innerHTML);
h3Elem.innerHTML= '<i>Hey!</i> How are you doing.';

//security risk using innerHtml . XSS .If you want to use innerHtml then use DOMPurify .

const divElem = document.querySelector('div');
console.log(`InnerText: ${divElem.innerText}`);
console.log(`textContent: ${divElem.textContent}`);


 