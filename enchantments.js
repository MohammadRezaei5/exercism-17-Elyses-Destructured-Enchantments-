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
