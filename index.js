// Import stylesheets
import './style.css';

document.getElementById("meow").addEventListener("mouseover", mouseOver);
document.getElementById("meow").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("meow").style.color = "red";
}

function mouseOut() {
  document.getElementById("meow").style.color = "purple";  
}

