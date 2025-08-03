// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Colors to rotate
const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#1A535C", "#FF9F1C"];
let index = 0;

// Animate navbar & footer colors
setInterval(() => {
  const color = colors[index];
  document.getElementById("navbar").style.backgroundColor = color;
  document.getElementById("footer").style.backgroundColor = color;
  index = (index + 1) % colors.length;
}, 5000);
