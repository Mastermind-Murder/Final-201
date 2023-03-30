'use strict';

let container = document.getElementById('image-container');
function quiz() {
  let entrance = prompt('Welcome to the Murder And Mayhem, Are you ready to solve the unsolved mystery that await you?').toLowerCase();
  if ( entrance === 'yes') {
    alert('Welcome to the game of Murder and Mystery!');
    let image = document.createElement('img');
    image.src = 'images/murderanimate.gif';
    container.appendChild(image);
    setTimeout(()=>{
      container.removeChild(image);
    },3000);
  } else {
    alert('We do not blame you for being scared to enter!');
  }
}
quiz();

