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

const chooseCard = () => {
  let chosenCard = Math.floor(Math.random() * newReadingArray.length);
  cardsToShow.push(newReadingArray[chosenCard]);
  newReadingArray.splice(chosenCard, 1);
}

const addCard = (destination, card, title, index) => {
  const reversed = isReversed();
  let definition = card.definition;
  let name = card.name;
  if (reversed) {
    definition = card.reversed;
    name = card.name + " - Reversed";
  }
  const currentCard = $(`<div>
    <p class="cardNumber">${index + 1}</p>
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

  $(destination).append(currentCard);

    currentCard.on('click', function(event) {
      const currentTarget = $(this).children("img");
      const isReversed = currentTarget.data("card-is-reversed");
      let reversedClass = "";
      if(isReversed) {
        reversedClass = "reversed";
      }
      currentTarget.replaceWith(`<div class="outerHover">
        <img src="${currentTarget.data("card-image")}" class="${reversedClass}">
        <div class="revealOnHover">
          <h2>${currentTarget.data("title")}</h2>
          <h3>${currentTarget.data("card-name")} </h3>
          <p>${currentTarget.data("card-message")}</p>
          <p>${currentTarget.data("card-definition")}
        </div>
        </div>`);
    })
    return currentCard;
}

const addCards = (cards, words) => {
  cards.forEach((card, index) => {
    const title = words[index];
    const destination = `[data-index="${index}"]`;
    addCard(destination, card, title, index);
  })
}


const readingResultOneCard = (card) => {
  revealHidden();
  $(".readingResult").append(`
    <div class="row">
      <div class="col-4 offset-4" data-index="0"></div>
    </div>
    `)
  addCards([card], [""]);
}

const readingResultThreeCards = (cardsToShow) => {
  revealHidden();
  $(".readingResult").append(`
    <div class="row">
      <div class="col-4" data-index="0"></div>
      <div class="col-4" data-index="1"></div>
      <div class="col-4" data-index="2"></div>
    </div>
    `)
  const words = ["Past", "Present", "Future"];
  addCards(cardsToShow, words);
}


const readingResultHorseshoe = (cardsToShow) => {
  revealHidden();
    $(".readingResult").append(`
      <div class="row">
        <div class="col-4" data-index="0"></div>
        <div class="col-4 offset-4" data-index="6"></div>
      </div>
      <div class="row">
        <div class="col-4" data-index="1"></div>
        <div class="col-4 offset-4" data-index="5"></div>
      </div>
      <div class="row">
        <div class="col-4" data-index="2"></div>
        <div class="col-4" data-index="3"></div>
        <div class="col-4" data-index="4"></div>
      </div>
    `)
    const wordsHorseshoe = ["Past", "Present", "Hidden Influence", "About You", "The Influence of Others", "Suggested Action", "The Final Outcome"];
    addCards(cardsToShow, wordsHorseshoe);
  }

  const readingResultCelticCross = (cardsToShow) => {
    revealHidden();
    $(".readingResult").append(`
      <div class="celticCrossContainer">
        <div class="row">
          <div class="col-3 offset-3" data-index="4"></div>
          <div class="col-3 offset-3" data-index="9"></div>
        </div>
        <div class="row">
          <div class="col-3" data-index="2"></div>
          <div class="col-3" data-index="0">
            <div class="awkward" data-index="1"></div>
          </div>
          <div class="col-3" data-index="3"></div>
          <div class="col-3" data-index="8"></div>
        </div>
        <div class="row">
          <div class="col-3 offset-3" data-index="5"></div>
          <div class="col-3 offset-3" data-index="7"></div>
        </div>
        <div class="row">
          <div class="col-3 offset-9" data-index="6"></div>
        </div>
      </div>
    `)
    const wordsCeltic = ["The Present or The Self", "The Problem", "The Past", "The Future", "Your Focus", "Unconscious Hidden Influence", "Your Self Beliefs", "How Others See You", "Your Secret Desire", "Outcome"];
    addCards(cardsToShow, wordsCeltic);
  }

  $('.readingButton').click(function(){
      $('.clearMe').empty();
      cardsToShow.splice(0, cardsToShow.length);
      readingSelection = $('.readingSelection').val();
      if (readingSelection === "select") {
        alert("You must choose a reading!");
        return;
      } else if (readingSelection === "oneCard") {
        let chosenCard = Math.floor(Math.random() * cardOptions.length);
        readingResultOneCard(cardOptions[chosenCard]);
      } else if (readingSelection === "threeCard") {
        for (let i=0; i < 3; i++) {
          chooseCard();
        }
        readingResultThreeCards(cardsToShow);
      } else if (readingSelection === "horseshoe") {
        for (let i=0; i < 7; i++) {
          chooseCard();
        }
        readingResultHorseshoe(cardsToShow);
      } else if (readingSelection === "celticCross") {
        for (let i = 0; i < 10; i ++) {
          chooseCard();
        }
        readingResultCelticCross(cardsToShow);
      }
    })
})
