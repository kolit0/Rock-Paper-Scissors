let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  switch (random){
  case 0:
    return "ROCK"
  case 1:
    return "PAPER"
  case 2:
    return "SCISSORS"
  }
}

function playRound(playerSelectionUp, computerSelection) {
  if (playerSelectionUp === computerSelection) {
      roundWinner = 'TIE!'
  }
if (
      (playerSelectionUp === "ROCK" && computerSelection === "SCISSORS")||
      (playerSelectionUp === "PAPER" && computerSelection === "ROCK")||
      (playerSelectionUp === "SCISSORS" && computerSelection === "PAPER")
    ) {
      playerScore++
      roundWinner = 'You Win!'
  }
if (
          (computerSelection === "ROCK" && playerSelectionUp === "SCISSORS")||
          (computerSelection === "PAPER" && playerSelectionUp === "ROCK")||
          (computerSelection === "SCISSORS" && playerSelectionUp === "PAPER")
      ) {
      computerScore++
      roundWinner = 'You lose!'
      }
}

const playerSelection = prompt("Rock, Paper or Scissors?");
const playerSelectionUp = playerSelection.toUpperCase();
const computerSelection = getComputerChoice();
