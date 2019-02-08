var pro1 = document.getElementById("project1");
var pro2 = document.getElementById("project2");
var pro3 = document.getElementById("project3");
var mess = document.getElementById("current-project");

function makeAlert() {
  alert("This is Project Page");
}
function changeColor(x) {
  x.style.borderColor = "red";
}

function normalColor(x) {
  x.style.borderColor = "white";
}

function makeMessenger(number) {
  if (number === 1) {
    mess.innerHTML = "You are seeing project 1";
  }
  if (number === 2) {
    mess.innerHTML = "You are seeing project 2";
  }
  if (number === 3) {
    mess.innerHTML = "You are seeing project 3";
  }
}
