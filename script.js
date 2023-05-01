playerScore=0;
computerScore=0;
function getPlayerChoice(){
    let playerChoice = prompt("please choose Rock,paper or scissors");
    return playerChoice.toUpperCase();
}
function getComputerChoice(){
   let computerChoice;
    let theRandomNumber = (Math.floor(Math.random()*10))%3;
   switch (theRandomNumber){
        case 0 :
            computerChoice = "ROCK";
            break;
        case 1 :
            computerChoice = "PAPER";
            break;
        case 2 :
            computerChoice = "SCISSORS";
            break;
   }
   return computerChoice;

}

function playAround (computerSelection,playerSelection){
    if (computerSelection == playerSelection){
      playerScore++;
      computerScore++;
      console.log(`that is very intersting you both choose ${playerSelection} which makes it a draw`)
        return "DRAW"

    }
    else if (computerSelection == "ROCK" && playerSelection=="SCISSORS"){
       computerScore++
        console.log(`You lose ${computerSelection} beats ${playerSelection}`)
       return "COMPUTER"
        
    }
    else if (computerSelection == "ROCK" && playerSelection=="PAPER"){
       playerScore++;
       console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return "PLAYER"
        
        
    }
    else if (computerSelection == "PAPER" && playerSelection=="ROCK"){
       computerScore++;
       console.log(`You lose ${computerSelection} beats ${playerSelection}`)
        return "COMPUTER"
        
    }
    else if (computerSelection == "PAPER" && playerSelection=="SCISSORS"){
       playerScore++;
       console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return "PLAYER"
        
    }
    else if (computerSelection == "SCISSORS" && playerSelection=="ROCK"){
        playerScore++;
        console.log(`You win ${playerSelection} beats ${computerSelection}`)
        return "PLAYER"
        
    }
    else if ((computerSelection == "SCISSORS" && playerSelection=="PAPER")){
        computerScore++;
        console.log(`You lose ${computerSelection} beats ${playerSelection}`)
        return "COMPUTER"
        
    }
}
function game(){

    let playerChoice = getPlayerChoice();
    
    playAround(getComputerChoice(),playerChoice);
    playAround(getComputerChoice(),playerChoice);
    playAround(getComputerChoice(),playerChoice);
    playAround(getComputerChoice(),playerChoice);
    playAround(getComputerChoice(),playerChoice);
  

}

game();


if (playerScore==computerScore){
        console.log(`draw`)
    }
else if (playerScore>computerScore){
        console.log(`player wins with score of  ${playerScore} aganist computers ${computerScore}`)
    }
else if (playerScore<computerScore){
        console.log(`computer wins with score of ${computerScore} aganist player's ${playerScore}`)
    }