$(document).ready(initializeApp);

var firstCardClicked = null;
var secondCardClicked = null;
var matches = 0;
var maxMatches = 9;
var attempts = 0;
var gamesPlayed;

function initializeApp(){
  $('.card').on('click', handleCardClick);
}

function flipCardsBack(){
  setTimeout(function(){
    $(firstCardClicked).children('.side1').removeClass('hidden');
    $(secondCardClicked).children('.side1').removeClass('hidden');
    $('.card').on('click', handleCardClick);
    firstCardClicked = null;
    secondCardClicked = null;
     }, 1500);
}

function calculateAccuracy() {
    var accuracy = Math.round((matches/attempts) * 100) + "%";
    return accuracy;
}

function displayStats(){
  $('.attempts_num').text(attempts);
  $('.accuracy_num').text(calculateAccuracy());
}


function handleCardClick(event){
  $(event.currentTarget).children('.side1').addClass('hidden');

  if (firstCardClicked === null){
    firstCardClicked = $(event.currentTarget);
  } else {
    secondCardClicked = $(event.currentTarget);

    if (firstCardClicked.find('*').css('background-image') === secondCardClicked.find('*').css('background-image')) {
      matches ++;
      firstCardClicked = null;
      secondCardClicked = null;
    } else {
      $('.card').off('click', handleCardClick);
      flipCardsBack();
    }
    attempts++;
    displayStats();
    console.log(attempts);
  }
}
