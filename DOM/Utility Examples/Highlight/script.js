function filterlist() {
  const  inputElm = document.getElementById('searchInput');
  const input = inputElm.value ;

  const items = document.querySelectorAll('ul#itemlist li');
  items.forEach((item) => {
 item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
  })
};