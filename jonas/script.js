'use strict';
// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold= document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');


//starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function (){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }


// rolling dice functionality
btnRoll.addEventListener('click', function(){
 if (playing){
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);
// display the dice 
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
 
//check for rolled 1 
  if(dice !== 1 ) {
// add dice to current score
    
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  
  }else{
    // switch to next player
    switchPlayer();
  }
 }
});

btnHold.addEventListener('click', function () {
  if(playing) {
  // console.log(totalScores[activePlayer]);
// add current score to active player totalScore
totalScores[activePlayer] += currentScore;// -> totalScores[1] = totalScores[1] + currentScore
document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
// check if score is >= 100
if(totalScores[activePlayer] >= 20) {
 // finish game if at 100
 playing = false;
 diceEl.classList.add('hidden');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
} else {
  switchPlayer();
}
  }
})

btnNew.addEventListener('click', function)