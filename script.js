let result;


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

function game() {
    let lose_count = 0;
    let win_count = 0;
    let draw_count = 0;
    let total_count = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        
        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            result = playRound(button.id, computerSelection);

            if(result.includes("Win") === true) {
                win_count = win_count + 1;
            } else if (result.includes("Lose") === true) {
                lose_count = lose_count + 1;
            } else {
                draw_count++;
            }


            const container = document.querySelector(".container");
            const div = document.createElement('div');
            const text = document.createTextNode(`Here is your result: ${result}`);
            
            div.appendChild(text);
            
            container.appendChild(div); 

            total_count = lose_count + win_count + draw_count;


            if (total_count === 5) {
                if(win_count > lose_count) {
                    setTimeout(function() {alert("You Win The Game");}, 0.5);
                } else if(win_count < lose_count) {
                    setTimeout(function() {alert("You Lose The Game");}, 0.5);
                } else {
                    setTimeout(function() {alert("Draw");}, 0.5);
                }

                window.location.reload();
            }
        });

    });


    
};

game();








