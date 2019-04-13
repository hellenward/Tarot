$(document).ready(function() {

const isReversed = () =>{
  return Math.floor(Math.random() * 2) === 1;
}

const revealHidden = () => {
  return $('.hidden').removeClass('hidden');
}

  const readingResultOneCard = (card) => {
    revealHidden();
    if (!isReversed()) {
      $(".readingResult").append(`<div>
        <img src="${card.image}">
        <h3>${card.name}</h3>
        <p>${card.definition}</p>
        </div>`)
    } else {
      $(".readingResult").append(`<div>
        <img src="${card.image}" class="reversed">
        <h3>${card.name} - Reversed</h3>
        <p>${card.reversed}</p>
        </div>`)
    }
  }

  const readingResultThreeCards = (cardsToShow) => {
    revealHidden();
    cardsToShow.forEach(function(card) {
      if(!isReversed()) {
        $(".readingResult").append(`<div>
          <img src="${card.image}">
          <h3>${card.name}</h3>
          <p>${card.definition}</p>
          </div>`)
      } else {
        $(".readingResult").append(`<div>
          <img src="${card.image}" class="reversed">
          <h3>${card.name} - Reversed</h3>
          <p>${card.reversed}</p>
          </div>`)
      }

    })
  }

  $('.readingButton').click(function(){
      $('.clearMe').empty();
      const cardOptions = window.cards;
      readingSelection = $('.readingSelection').val();
      if (readingSelection === "select") {
        alert("You must choose a reading!");
        return;
      } else if (readingSelection === "oneCard") {
        let chosenCard = Math.floor(Math.random() * cardOptions.length);
        readingResultOneCard(cardOptions[chosenCard]);
      } else {
        const newReadingArray = cardOptions.slice();
        const cardsToShow = [];
        for (let i=0; i < 3; i++) {
          let chosenCard = Math.floor(Math.random() * newReadingArray.length);
          cardsToShow.push(newReadingArray[chosenCard]);
          newReadingArray.splice(chosenCard, 1);
        }
        readingResultThreeCards(cardsToShow);
      }
    })
})
