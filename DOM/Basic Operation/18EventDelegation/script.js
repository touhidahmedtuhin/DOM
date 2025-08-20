const myList = document.querySelector('#list');

myList.addEventListener('click',(e)=>{
  let target = e.target.tagName;
  let tagText = e.target.textContent;
  if(target === 'LI'){
    console.log('You click:',tagText);
  }
});