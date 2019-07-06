$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;

function initializeApp(){
  $('.card').click(handleCardClick)
}

function handleCardClick(event){
  $(event.currentTarget).children('.side1').addClass('hidden');

  if (firstCardClicked === null){
    firstCardClicked = $(event.currentTarget);
  } else {
    secondCardClicked = $(event.currentTarget);
  }

  if (firstCardClicked.find('*').css('background-image') === secondCardClicked.find('*').css('background-image')){
    console.log("images match");
  }

}
