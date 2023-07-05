let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector(".ROCK");
let paper = document.querySelector(".PAPER");
let scissors = document.querySelector(".SCISSORS");
let board = document.querySelector('.the-running');
let thePlayerScore = document.querySelector("#ThePlayerscore");
let theComputerScore = document.querySelector('#theComputerScore');
thePlayerScore.textContent = ` ${playerScore}`;
theComputerScore.textContent = `${computerScore}`;

window.addEventListener('click', () => {
  thePlayerScore.textContent = ` ${playerScore}`;
  theComputerScore.textContent = ` ${computerScore}`;

  if (computerScore === 5 || playerScore === 5) {
    if (computerScore === 5) {
      board.textContent = "Computer wins this game";
      computerScore = 0;
      playerScore = 0;
    } else if (playerScore === 5) {
      board.textContent = "You win this game";
      computerScore = 0;
      playerScore = 0;
    }
  }
});

rock.addEventListener('click', () => playAround("ROCK"));
paper.addEventListener('click', () => playAround("PAPER"));
scissors.addEventListener('click', () => playAround("SCISSORS"));

function playAround(playerSelection) {
  let computerSelection;
  let theRandomNumber = (Math.floor(Math.random() * 10)) % 3;
  switch (theRandomNumber) {
    case 0:
      computerSelection = "ROCK";
      break;
    case 1:
      computerSelection = "PAPER";
      break;
    case 2:
      computerSelection = "SCISSORS";
      break;
  }

  if (computerSelection === playerSelection) {
    board.textContent = 'Draw';
  } else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
    computerScore++;
    board.textContent = 'Computer wins';
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
    playerScore++;
    board.textContent = 'You win';
  } else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
    computerScore++;
    board.textContent = 'Computer wins';
  } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
    playerScore++;
    board.textContent = 'You win';
  } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
    playerScore++;
    board.textContent = 'You win';
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
    computerScore++;
    board.textContent = 'Computer wins';
  }

  
}
