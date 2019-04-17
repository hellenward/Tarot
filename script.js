$(document).ready(function() {

const cardOptions = window.cards;
const newReadingArray = cardOptions.slice();
const cardsToShow = [];

const isReversed = () =>{
  return Math.floor(Math.random() * 2) === 1;
}

const revealHidden = () => {
  return $('.hidden').removeClass('hidden');
}

  const readingResultOneCard = (card) => {
    revealHidden();
    $(".readingResult").append(`<div>
      <img src="Cards/CardBack.jpg" class="pre-revealed">
      </div>`)

    $(".pre-revealed").click(function() {
      if (!isReversed()) {
        $(".pre-revealed").remove();
        $(".readingResult").append(`<div>
          <img src="${card.image}">
          <h3>${card.name}</h3>
          <h4>${card.message}</h4>
          <p>${card.definition}</p>
          </div>`)
        } else {
        $(".pre-revealed").remove();
          $(".readingResult").append(`<div>
            <img src="${card.image}">
            <h3>${card.name} - Reversed</h3>
            <h4>${card.message}</h4>
            <p>${card.reversed}</p>
            </div>`)
        }
    })
  }

  const readingResultThreeCards = (cardsToShow) => {
    revealHidden();
    const words = ["Past", "Present", "Future"];
    cardsToShow.forEach(function(card, index) {
      const title = words[index];
      if(!isReversed()) {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}">
          <h3>${card.name}</h3>
          <p>${card.definition}</p>
          </div>`)
      } else {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}" class="reversed">
          <h3>${card.name} - Reversed</h3>
          <p>${card.reversed}</p>
          </div>`)
      }
    })
  }

  const readingResultHorseshoe = (cardsToShow) => {
    revealHidden();
    const wordsHorseshoe = ["Past", "Present", "Hidden Influence", "About You", "The Influence of Others", "Suggested Action", "The Final Outcome"];
    cardsToShow.forEach(function(card, index) {
      const title = wordsHorseshoe[index];
      if(!isReversed()) {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}">
          <h3>${card.name}</h3>
          <p>${card.definition}</p>
          </div>`)
      } else {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}" class="reversed">
          <h3>${card.name} - Reversed</h3>
          <p>${card.reversed}</p>
          </div>`)
        }
    })
  }

  const readingResultCelticCross = (cardsToShow) => {
    revealHidden();
    const wordsCeltic = ["The Present or The Self", "The Problem", "The Past", "The Future", "Your Focus", "Unconscious Hidden Influence", "Your Self Beliefs", "How Others See You", "Your Secret Desire", "Outcome"];
    cardsToShow.forEach(function(card, index) {
      const title = wordsCeltic[index];
      if(!isReversed()) {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}">
          <h3>${card.name}</h3>
          <p>${card.definition}</p>
          </div>`)
      } else {
        $(".readingResult").append(`<div>
          <h2>${title}</h2>
          <img src="${card.image}" class="reversed">
          <h3>${card.name} - Reversed</h3>
          <p>${card.reversed}</p>
          </div>`)
        }
    })
  }

  $('.readingButton').click(function(){
      $('.clearMe').empty();
      readingSelection = $('.readingSelection').val();
      if (readingSelection === "select") {
        alert("You must choose a reading!");
        return;
      } else if (readingSelection === "oneCard") {
        let chosenCard = Math.floor(Math.random() * cardOptions.length);
        readingResultOneCard(cardOptions[chosenCard]);
      } else if (readingSelection === "threeCard") {
        for (let i=0; i < 3; i++) {
          let chosenCard = Math.floor(Math.random() * newReadingArray.length);
          cardsToShow.push(newReadingArray[chosenCard]);
          newReadingArray.splice(chosenCard, 1);
        }
        readingResultThreeCards(cardsToShow);
      } else if (readingSelection === "horseshoe") {
        for (let i=0; i < 7; i++) {
          let chosenCard = Math.floor(Math.random() * newReadingArray.length);
          cardsToShow.push(newReadingArray[chosenCard]);
          newReadingArray.splice(chosenCard, 1);
        }
        readingResultHorseshoe(cardsToShow);
      } else if (readingSelection === "celticCross") {
        for (let i = 0; i < 10; i ++) {
          let chosenCard = Math.floor(Math.random() * newReadingArray.length);
          cardsToShow.push(newReadingArray[chosenCard]);
          newReadingArray.splice(chosenCard, 1);
        }
        readingResultCelticCross(cardsToShow);
      }
    })
})
