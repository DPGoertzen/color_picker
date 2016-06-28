// Peer Color Picker Project by Justin Doty and Donovan Goertzen
// 6/27/16

// The following array can be added to for additional colors,
// however you will need to style the new colors in stylesheet.css
var colorArray = ['burlywood', 'red', 'yellow', 'purple', 'green', 'orange', 'brown', 'magenta']


$(document).ready(function(){

function createBlock(array){
  var colorPicker = 0;
  var arraySize = array.length;
  var tempArray = array;
  var pickedColor = null;
  var winnerNumber = Math.floor(Math.random() * array.length);
  for(var i=0; i < arraySize; i++){
      // each time through the loop, select a new random element of the array
      colorPicker = Math.floor(Math.random() * array.length);

      $('article').append('<div></div>');

      // find the last (i.e. the newest) div and add the color template and
      // the element of the array that was randomized by colorPicker
      $('article').find('div:last').addClass('color ' + tempArray[colorPicker]);
      // remove the picked color from the array, so every color appears once.
      tempArray.splice(colorPicker, 1);
  }
  // Find a random div element and make it the winner class
  $("article").find("div:nth-child(" + winnerNumber + ")").addClass('winner');
  // If the circle with the winner class is picked, output a win message
  $(".winner").on("click", function(){
      $("p, h1").remove();
      // to accomplish pro mode, the easiest thing to do is change our
      // style from the "color" class to the "black" class. They are identical
      // except the background color of black supercedes all other colors
      // by virtue of its position in the stylesheet.
      $(".winner").removeClass("color").addClass("black");
      // after two seconds, switch back to the way things were before.
      setTimeout(function(){$(".winner").removeClass("black").addClass("color");}, 2000);
      $("body").prepend('<h1>Winner! Hit command+R to play again!</h1>')
      $("main").append('<p>You\'re the winner!</p>');
  });
  // If a non-winner class is picked, give a loser message.
  $("div").on("click", function(){
    if($(this).hasClass("winner") == false){
      $("p").remove();
      $("main").append('<p>You\'re the loser, keep guessing!</p>');
    }
  });

}
// begin function
createBlock(colorArray);
    });
