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
