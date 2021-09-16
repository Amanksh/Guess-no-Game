'use strict';

let number = Math.floor(Math.random() * 20 + 1);
console.log(`$ first no ${number}`);
let highscore = 0;

let score = 20;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};
// Again button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔!';
    displayMsg('No Number ⛔');
  }

  // When player wins the game
  else if (guess == number) {
    // document.querySelector('.message').textContent = 'Right answeer 🔥';
    displayMsg('Right answeer 🔥');

    document.querySelector('.score').textContent = 10;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number && score > 0) {
    let str = guess > number ? 'Too high' : 'Too low';
    // document.querySelector('.message').textContent = str;
    displayMsg(str);
    score--;
  }

  // // when ans is too low
  // else if (guess < number && score > 0) {
  //   document.querySelector('.message').textContent = 'Too Low! 📈';
  //   score--;
  // }

  // // when ans is too high
  // else if (guess > number && score > 0) {
  //   document.querySelector('.message').textContent = 'Too high! 📈';
  //   score--;
  // }

  if (score == 0) {
    // document.querySelector('.message').textContent = 'You lost the game 😣';
    displayMsg('You lost the game 😣');
  }

  document.querySelector('.score').textContent = score;
  console.log(score);
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing ..';
  displayMsg('Start guessing ..');
  document.querySelector('.guess').value = '';
  number = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  console.log(`second no ${number}`);
});
