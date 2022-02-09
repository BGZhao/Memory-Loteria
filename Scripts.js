const cards = document.querySelectorAll('.memory-card');
const deck = document.querySelector('.deck');
const ul = document.createDocumentFragment();
const cardsList = [];

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let resetbutton = document.querySelector('#restart');


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 32);
    card.style.order = randomPos;
  });
})();
  

cards.forEach(card => card.addEventListener('click', flipCard))

resetbutton.addEventListener('click', () => location.reload()) ;
console.log(resetbutton)

 /*
const moves= document.querySelector('moves');
 let movesCounter = 0;
 moves.textContent= movesCounter + 'Moves';

 if(hasFlippedCard === 2){
   movesCounter++;
   moves.textContent = movesCounter === 1 ? 1 + 'Move' : movesCounter + 'Moves';
   guitarScore('.guitars','inline-block');
   checkForMatch();
 }

function guitarScore(name, display, color) {
  const guitars= document.querySelector(name).children;
  const comment = document.querySelector('.comment');
  if (movesCounter > 12 && movesCounter < 20) {
      guitars[2].style.color = 'black';
      guitars[2].style.display = display;
      comment.textContent = 'You Lose!!';
  } else if (movesCounter >= 20) {
      guitars[1].style.color = 'black';
      guitars[1].style.display = display;
      guitars[2].style.display = display;
      comment.textContent = 'You are average!';
  } else if (movesCounter <= 12) {
    guitars[1].style.display = 'inline-block';
    guitars[2].style.display = 'inline-block';
    guitars[2].style.color = color || 'rgba(212, 26, 73, 0.836);';
    guitars[1].style.color = color || 'rgba(212, 26, 73, 0.836);';
      comment.textContent = 'Loteria!!!';
  }
*/