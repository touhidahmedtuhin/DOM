//Creating a heading for this mini project
const heading = document.createElement("h1");
heading.innerText = "Highlight a text";
heading.style.fontFamily = "'Roboto', sans-serif";
document.body.appendChild(heading);

//Creating a button
const btn = document.createElement("button");
btn.innerText = "Click Me!";

// Button styling
btn.style.padding = "10px 20px";
btn.style.fontFamily = "'Roboto', sans-serif";
btn.style.fontSize = "14px";
btn.style.fontWeight = "500";
btn.style.color = "#ffffff";
btn.style.backgroundColor = "#4CAF50";
btn.style.border = "none";
btn.style.borderRadius = "4px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
btn.style.transition = "all 0.3s ease";

// Hover effects using JavaScript
btn.onmouseenter = () => {
  btn.style.backgroundColor = "#45a049"; // Darker green
  btn.style.transform = "translateY(-2px)";
  btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
};

btn.onmouseleave = () => {
  btn.style.backgroundColor = "#4CAF50";
  btn.style.transform = "translateY(0)";
  btn.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
};

// Click effect
btn.onmousedown = () => {
  btn.style.transform = "translateY(1px)";
  btn.style.boxShadow = "0 1px 2px rgba(0,0,0,0.2)";
};

btn.onmouseup = () => {
  btn.style.transform = "translateY(-2px)";
  btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
};

document.body.appendChild(btn);

//Create a div with some text on it
const div = document.createElement("div");
div.innerText =
  "This text will be highlight when you click the button.You can also hide this text.";
// Basic Layout Styling
div.style.width = "250px";
div.style.minHeight = "100px"; 
div.style.padding = "12px"; 
div.style.margin = "10px 0"; 
div.style.fontFamily = "'Roboto', sans-serif";
div.style.fontSize = "14px";
div.style.borderRadius = "6px"; 
div.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
div.style.transition = "all 0.3s ease";

// Initial State (Hidden + No Highlight)
div.style.display = "none";
div.style.backgroundColor = "#f8f9fa"; 
div.style.color = "#333"; 
div.style.border = "1px solid #ddd"; 
document.body.appendChild(div);

// Add onclick function
btn.onclick = function () {
  console.log("Button has clicked..");
  //div.classList.toggle("my-class");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
