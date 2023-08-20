/* When the user scrolls down, hide the du. When the user scrolls up, show the du */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("du").style.top = "1500px";
  } else {
    document.getElementById("du").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}