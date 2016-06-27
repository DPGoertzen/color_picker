var colorArray = ['burlywood', 'burgundy', 'yellow', 'purple', 'green']
$(document).ready(function(){

function createBlock(array){
  var colorPicker = 0;
  var arraySize = array.length;
  var tempArray = array;
  var pickedColor = null;
  var winnerNumber = Math.floor(Math.random() * array.length);
  for(var i=0; i < arraySize; i++){

      colorPicker = Math.floor(Math.random() * array.length);

      console.log(i);
      $('article').append('<div></div>');
      $('article').find('div:last').addClass('color ' + tempArray[colorPicker]);
      tempArray.splice(colorPicker, 1);
  }
  // console.log($("article:nth-child( winnerNumber)").addClass('winner'));
  $("article").find("div:nth-child(" + winnerNumber + ")").addClass('winner');
  $(".winner").on("click", function(){
      $("main").append('<p>You\'re the winner!</p>');
  });
  $("div").on("click", function(){
    // console.log($(".color").hasClass("winner"));
    if($(this).hasClass("winner") == false){
      $("main").append('<p>You\'re the loser!</p>');
    }
  });

}

createBlock(colorArray);
    });
