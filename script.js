$(document).ready(function() {

  const readingResultOneCard = (card) => {
    const isReversed = Math.floor(Math.random() * 2);

    if (isReversed === 0) {
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

  $('.oneCardButton').click(function(){
      $('.clearMe').empty();
      const cardOptions = window.cards;
      let chosenCard = Math.floor(Math.random() * cardOptions.length);
      readingResultOneCard(cardOptions[chosenCard]);
    })
})
