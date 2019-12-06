let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate a random number between 0 and 9
function generateTarget () {
  let randomNumber = Math.floor(Math.random()*10);
  return randomNumber;
};

// compare the absolute difference between each guess to the target number
function compareGuesses (userGuess, computerGuess, targetNumber) {

function getAbsoluteDistance(a, b) {
    return Math.abs(a - b);
  };
  
  if (getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)) {
    return true;
  } else {
    return false;
  }
};

// update the score count
function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};

// update the round number
function advanceRound() {
  currentRoundNumber++;
};