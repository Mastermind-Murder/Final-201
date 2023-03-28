//This flips the cards

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});

let ourGame = new GamePlayCharacters();
ourGame.load();
console.log(ourGame);
