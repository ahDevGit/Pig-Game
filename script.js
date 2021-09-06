'use strict';

/**Selecting Element */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

/**Game Start Conditions */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

/**Rolling Dice Functionality */
btnRollDice.addEventListener('click', function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check the dice value if its not 1
  if (dice !== 1) {
    //Add Dice value to current score
    currentScore += dice;
    current0El.textContent = currentScore; // TODO: Change Later
  } else {
    // Switch to Next Player
  }
});