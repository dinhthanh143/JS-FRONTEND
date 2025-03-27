
let savedColor = JSON.parse(localStorage.getItem("savedColor"));
let body = document.getElementsByTagName("body")[0];
document.querySelectorAll(".btn").forEach((btn) => {
  btn.onclick = function () {
    changeColor(this.getAttribute("id"));
  localStorage.setItem("savedColor", JSON.stringify(savedColor));
  };
});
changeColor(savedColor)
function changeColor(color) {
  if (color === "red") {
    body.style.backgroundColor = "red";
    savedColor = "red"
  }
  if (color === "blue") {
    body.style.backgroundColor = "blue";
    savedColor = "blue"
  }
  if (color === "yellow") {
    body.style.backgroundColor = "yellow";
    savedColor = "yellow"
  }
  if (color === "purple") {
    body.style.backgroundColor = "purple";
    savedColor = "purple"
  }
}
