function zebraPattern() {
  console.log('Button was clicked..');

  const items = document.querySelectorAll('ul#cars li');
  console.log(items);

  items.forEach((item) => {
    console.log(item);
    console.log(item.textContent);
  });
} 
