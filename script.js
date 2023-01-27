function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;
    if(randomNumber === 0) {
        choice = "Rock";
    } else if(randomNumber === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = "Draw"
    
    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            result = "You Lose! paper beats rock"
        } else if(computerSelection === "scissors"){
            result = "You Win! rock beats scissors";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            result = "You Lose! scissors beats paper";
        } else if(computerSelection === "rock") {
            result = "You Win! paper beats rock"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            result = "You Lose! rock beats scissors";
        } else if(computerSelection === "paper") {
            result = "You Win! scossors beats paper";
        }
    }
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));