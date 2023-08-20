/* When the user scrolls down, hide the du. When the user scrolls up, show the du */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("du").style.top = "0";
  } else {
    document.getElementById("du").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}