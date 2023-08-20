/* When the user scrolls down, hide the du. When the user scrolls up, show the du */



$(window).scroll(function(){
  if($(document).scrollTop() > 1200){
    $('.noe h1').css({'display': 'none'});
  }
});
