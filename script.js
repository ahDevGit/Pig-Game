'use strict';

/**Selecting Element */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/**Game Start Conditions */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

/**Rolling Dice Functionality */
btnRollDice.addEventListener('click', function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // check for tolld 1: if true, switch to next player

});