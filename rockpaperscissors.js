const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerSpan = document.getElementById("playerSpan");
const computerSpan = document.getElementById("computerSpan");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    let result = "";
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    resultDisplay.style.backgroundColor = "hsl(0, 0%, 95%)";
    resultDisplay.style.boxShadow = "rgba(0, 0, 0, 0.2) 4px 5px 5px";
    playerScoreDisplay.classList.remove("scoreDisplayStart");
    computerScoreDisplay.classList.remove("scoreDisplayStart");
    playerScoreDisplay.classList.add("scoreDisplayEnd");
    computerScoreDisplay.classList.add("scoreDisplayEnd");

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else {    
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "paper") ? "YOU LOSE" : "YOU WIN";
                break;
            case "paper":
                result = (computerChoice === "scissors") ? "YOU LOSE" : "YOU WIN";
                break;
            case "scissors":
                result = (computerChoice === "rock") ? "YOU LOSE" : "YOU WIN";
                break;
        }
    }

resultDisplay.classList.remove("yellowText", "redText", "blueText");
    if (result === "IT'S A TIE") {
        resultDisplay.classList.remove("resultDisplay");
        resultDisplay.classList.add("yellowText");
    }
    else if (result === "YOU LOSE") {
        resultDisplay.classList.remove("resultDisplay");
        resultDisplay.classList.add("redText");
        computerScore++;
    }
    else if (result === "YOU WIN") {
        resultDisplay.classList.remove("resultDisplay");
        resultDisplay.classList.add("blueText");
        playerScore++;
    }

playerDisplay.textContent = playerChoice;
computerDisplay.textContent = computerChoice;
resultDisplay.textContent = result;
playerSpan.textContent = playerScore;
computerSpan.textContent = computerScore;

}