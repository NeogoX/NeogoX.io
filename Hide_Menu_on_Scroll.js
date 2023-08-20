function inViewport( element ){
  
  // Get the elements position relative to the viewport

  var bb = element.getBoundingClientRect();
  
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite

  return !(bb.top > innerHeight || bb.bottom < 0);
  
}

var myElement = document.querySelector( 'div' );

// Listen for the scroll event

document.addEventListener( 'scroll', event => {
 
  // Check the viewport status

  if( inViewport( myElement ) ){
    
    myElement.style.opacity = 1;
    
  } else {
    
    myElement.style.opacity = '';
    
  }
  
})