$(document).ready(function() {

  const oneCardSpace = document.querySelector(".readingResult");

  $('.oneCardButton').click(function(){
      const cardOptions = window.cards;
      let chosenCard = Math.floor(Math.random() * cardOptions.length);
      console.log(cardOptions[chosenCard]);
    })
})
