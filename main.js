setvar();

var q1 = "Who made this game?";
var a1 = "EX-Games";
var b1 = "Orteil";
var c1 = "Jon Duckett";
var d1 = "sethbling";
var q2 = "How many hearts does a unicorn have?";
var a2 = "8";
var b2 = "10";
var c2 = "-3";
var d2 = "I'M NOT A SCIENTIST!";
var q3 = "How many colors does the Huyan flag have?";

function setvar() {
var qu = document.getElementById('qu');
var an1 = document.getElementById('an1');
var an2 = document.getElementById('an2');
var an3 = document.getElementById('an3');
var an4 = document.getElementById('an4');
}

function qu1() {
  qu.textContent = q1
  an1.textContent = a1
  an2.textContent = b1
  an3.textContent = c1
  an4.textContent = d1
}
