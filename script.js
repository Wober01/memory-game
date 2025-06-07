const symbols = ['🍎','🍌','🍇','🍉','🍓','🍒','🥝','🍍'];
let cards = [...symbols, ...symbols];
cards.sort(() => 0.5 - Math.random());

const board = document.getElementById('gameBoard');
let flippedCards = [];
let matchedCount = 0;

cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.dataset.index = index;
  card.innerText = '?';

  card.addEventListener('click', () => {
    if (flippedCards.length < 2 && !card.classList.contains('flipped') && !card.classList.contains('matched')) {
      card.innerText = symbol;
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const [first, second] = flippedCards;
        if (first.dataset.symbol === second.dataset.symbol) {
          first.classList.add('matched');
          second.classList.add('matched');
          matchedCount += 2;
          flippedCards = [];

          if (matchedCount === cards.length) {
            setTimeout(() => alert('🎉 You matched all cards!'), 100);
          }
        } else {
          setTimeout(() => {
            first.innerText = '?';
            second.innerText = '?';
            first.classList.remove('flipped');
            second.classList.remove('flipped');
            flippedCards = [];
          }, 1000);
        }
      }
    }
  });

  board.appendChild(card);
});
