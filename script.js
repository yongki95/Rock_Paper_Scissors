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

function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = "Draw"
    
    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            result = "You Lose! paper beats rock"
        } else if(computerSelection === "scissors"){
            result = "You Win! rock beats scissors";
        }
    }
    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(game(playerSelection, computerSelection));