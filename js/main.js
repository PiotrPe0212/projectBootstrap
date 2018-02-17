document.addEventListener("DOMContentLoaded", function () {
window.onscroll = function() {myFunction()};
});

function myFunction() {
    var navbar = document.getElementById("navi");

    console.log("a");
    console.log(window.pageYOffset);
  if (window.pageYOffset >= 80) {
      console.log("b");
       navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)";}
  else {
   navbar.style.backgroundColor = "transparent";
  }
}