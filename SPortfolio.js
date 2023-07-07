/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/* add a statement that makes it so when the browser size reaches a certain size the links are displayed as flex*/
function myFunction() {
  var x = document.getElementById("Links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.getElementById("target-me").open = true;

const details = document.querySelector("details");
details.setAttribute("open", "");

/*id="target-me"*/
/*
function myFunction() {
  var x = document.getElementById("Links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  if (@media only screen and (min-width: 992px))
}


var w = document.documentElement.clientWidth || window.innerWidth;
var x = document.getElementById("Links");
if (w >= 768 && x.style.display === "none") {
  x.style.display = "flex";
} else {
  x.style.display = "none";
}
*/
var x = document.getElementById("Links");
if (x.style.display === "none") 
{
  x.style.display = "flex";
}