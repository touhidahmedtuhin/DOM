let input = document.querySelector("#inputKey");

function showKey(e) {
  let show = document.querySelector("#display");
  show.textContent = `key press : ${e.target.value}`;
  show.style.fontFamily = "Helvetica";
}
input.addEventListener("keypress", showKey);
