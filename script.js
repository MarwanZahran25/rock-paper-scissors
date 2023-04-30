function getPlayerChoice(){
    let playerChoice = prompt("please choose Rock,paper os scissors");
    return playerChoice.toUpperCase;
}
function getComputerChoice(){
   let computerChoice;
    let theRandomNumber = (math.random()*10)%3;
   switch (theRandomNumber){
        case 0 :
            computerChoice = ROCK;
            break;
        case 1 :
            computerChoice = PAPER;
            break;
        case 2 :
            computerChoice = SCISSORS;
            break;
   }
   return computerChoice;

}

function playAround (computerSelection,playerSelection){
    if (computerSelection == playerSelection){
        return "DRAW"
    }
    else if (computerSelection == "ROCK" && playerSelection=="SCISSORS"){
        return "COMPUTER"
    }
    else if (computerSelection == "ROCK" && playerSelection=="PAPER"){
        return "PLAYER"
    }
    else if (computerSelection == "PAPER" && playerSelection=="ROCK"){
        return "COMPUTER"
    }
    else if (computerSelection == "PAPER" && playerSelection=="SCISSORS"){
        return "PLAYER"
    }
    else if (computerSelection == "SCISSORS" && playerSelection=="ROCK"){
        return "PLAYER"
    }
    else if ((computerSelection == "SCISSORS" && playerSelection=="PAPER")){
        return "COMPUTER"
    }



}
playAround("PAPER","PAPER")
console.log(playAround("PAPER","PAPER"))