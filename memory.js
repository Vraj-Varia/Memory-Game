const gameBoard = document.getElementById("game-board");

const icons = ["🍎", "🍌", "🍒", "🍇", "🍉", "🍋", "🥭", "🍓"];
const cardsArray = [...icons, ...icons];
cardsArray.sort(() => Math.random() - 0.5);
let flippedCards = [];
let matchedCards = [];

let message = document.getElementById('message');

function createCards() {
  cardsArray.forEach((icon) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.icon = icon;
    card.innerHTML = "❓";
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.innerHTML = this.dataset.icon;
    this.classList.add("flipped");
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.icon === card2.dataset.icon) {
    matchedCards.push(card1, card2);
  } else {
    card1.innerHTML = "❓";
    card2.innerHTML = "❓";
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
  }

  flippedCards = [];

  if (matchedCards.length === cardsArray.length) {
    message.innerHTML = `<h1>player won!!</h1>`;
  } else {
    message.innerHTML = `<h1>player not won!!</h1>`;
  }
}

createCards();
