'use strict';

//INIT VARIABLES
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//playAgainButton not enabled

document.querySelector('.again').textContent = ''; //default Play Again button text

let playAgainButton = () => {
  document.getElementsByClassName(
    'playAgain'
  ).innerHtml = `<button class="btn again">Play Again!</button>`;
};

let setMessage = message => {
  document.querySelector('.message').textContent = message;
};

let userGuess = (x, y) => {
  score;
  highScore;
  let newScore = (document.querySelector('.score').textContent = score);
  if (x === y) {
    score++;
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    setMessage('You Win!');
    newScore;
    document.querySelector('.again').textContent = 'Play Again!';
    console.log(highScore, score);
    if (highScore < score) {
      document.querySelector('.highscore').textContent = score - 1;
    }
  } else if (x !== y) {
    score--;
    setMessage(x > y ? 'Too High!' : 'Too Low!');

    newScore;
    if (score < 0) {
      setMessage('Game Over! You Lose.');
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.again').textContent = 'Play Again!';
    }
  }
};

//RESTART GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
});

//START GAME
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  setMessage('');
  if (!guess) {
    setMessage('Input A Number!');
  } else {
    userGuess(guess, randomNumber);
    console.log(guess, randomNumber);
  }
});
