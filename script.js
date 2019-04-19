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

const addCard = (card, title) => {
  const reversed = isReversed();
  let definition = card.definition;
  let name = card.name;
  if (reversed) {
    definition = card.reversed;
    name = card.name + " - Reversed";
  }
  const currentCard = $(`<div class="col-4">
    <img src="Cards/CardBack.jpg"
      class="pre-revealed"
      data-title="${title}"
      data-card-name="${name}"
      data-card-definition="${definition}"
      data-card-is-reversed="${reversed}"
      data-card-image="${card.image}"
      data-card-message="${card.message}"
    >
    </div>`);

  $(".readingResult").append(currentCard);

    currentCard.on('click', (event) => {
      const currentTarget = $(event.currentTarget).children("img");
      const isReversed = currentTarget.data("card-is-reversed");
      let reversedClass = "";
      if(isReversed) {
        reversedClass = "reversed";
      }
      currentTarget.replaceWith(`<div>
        <h2>${currentTarget.data("title")}</h2>
        <img src="${currentTarget.data("card-image")}" class="${reversedClass}">
        <h3>${currentTarget.data("card-name")} </h3>
        <p>${currentTarget.data("card-message")}</p>
        <p>${currentTarget.data("card-definition")}
        </div>`);
    })
}


const readingResultOneCard = (card) => {
  revealHidden();
  addCard(card, "");
}

  const readingResultThreeCards = (cardsToShow) => {
    revealHidden();
    const words = ["Past", "Present", "Future"];
    cardsToShow.forEach(function(card, index) {
      const title = words[index];
      addCard(card, title);
    });
  }


  const readingResultHorseshoe = (cardsToShow) => {
    revealHidden();
    const wordsHorseshoe = ["Past", "Present", "Hidden Influence", "About You", "The Influence of Others", "Suggested Action", "The Final Outcome"];
    cardsToShow.forEach((card, index) => {
      const title = wordsHorseshoe[index];
      addCard(card, title);
    })
  }

  const readingResultCelticCross = (cardsToShow) => {
    revealHidden();
    const wordsCeltic = ["The Present or The Self", "The Problem", "The Past", "The Future", "Your Focus", "Unconscious Hidden Influence", "Your Self Beliefs", "How Others See You", "Your Secret Desire", "Outcome"];
    cardsToShow.forEach((card, index) => {
      const title = wordsCeltic[index];
      addCard(card,title);
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
