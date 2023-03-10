//look back

// const deck = [5, 9, 7, 1, 8];

function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

// console.log(getFirstCard(deck));

///---///

// const deck = [3, 2, 10, 6, 7];

function getSecondCard(deck) {
  const [, secondCard, , ,] = deck;
  return secondCard;
}

// console.log(getSecondCard(deck));

///---///

// const deck = [10, 7, 3, 8, 5];

function swapTopTwoCards(deck) {
  [deck[1], deck[0]] = [deck[0], deck[1]];
  return deck;
}
// console.log(swapTopTwoCards(deck));

///---///

// const deck = [2, 5, 4, 9, 3];

function discardTopCard(deck) {
  const [firstCard, ...rest] = deck;
  return [firstCard, [...rest]];
}

// console.log(discardTopCard(deck));

///---///

// const FACE_CARDS = ["jack", "queen", "king"];

// const deck = [5, 4, 7, 10];

function insertFaceCards(deck) {
  const [firstCard, ...nextCards] = deck;
  return [firstCard, ...FACE_CARDS, ...nextCards];
}

// console.log(insertFaceCards(deck));
