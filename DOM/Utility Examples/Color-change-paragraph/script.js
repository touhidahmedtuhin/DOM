function colorPara() {
  console.log("Color activation is working...");

  let highlight = document.querySelectorAll("#info");

  highlight.forEach((element) => {
    element.style.backgroundColor = "yellow";
    console.log(element)
  });
}