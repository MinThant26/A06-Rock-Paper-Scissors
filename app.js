const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const playerDisplay = document.querySelector('.player');
    const computerDisplay = document.querySelector('.computer');
    const winDisplay = document.querySelector('.winCondition');

    playerDisplay.textContent = playerChoice;
    computerDisplay.textContent = computerChoice;

    checkWinCondition(playerChoice, computerChoice, winDisplay)
    console.log(computerChoice);
}
function checkWinCondition(player, computer, winDisplay){
    let result = "";

    if(player === computer){
        winDisplay.textContent = "IT'S A TIE!";
    }
    else{
        switch(player){
            case "rock":
                result = (computer === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computer === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computer === "paper") ? "You Win!" : "You Lose!";
                break;
        }

        winDisplay.textContent = result;
    }
}