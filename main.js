const moves = ["rock", "paper", "scissors"];

function computerMove () {
    return moves[Math.floor(Math.random()*moves.length)];
}

function getPlayerMove () {
    let playerInput = prompt("Enter move ('rock', 'paper', or 'scissors'): ").toLowerCase().trim();
    while (!(playerInput === "rock" || playerInput === 'paper' || playerInput === 'scissors')) {
        playerInput = prompt(`Invalid input: ${playerInput}. Enter move ('rock', 'paper', or 'scissors'): `).toLowerCase().trim();
    }

    return playerInput;
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === "rock") {
        playerMoveDisplay.innerText = "🪨";
        if (computerMove === "rock"){
            computerMoveDisplay.innerText = "🪨";
            return "tie"
        }
        if (computerMove === "paper") {
            computerMoveDisplay.innerText = "📜";
            computerScore++;
            return "computer wins"
        }
        else {
            computerMoveDisplay.innerText = "✂️";
            playerScore++;
            return "player wins"
        }
    }
    if (playerMove === "paper") {
        playerMoveDisplay.innerText = "📜";
        if (computerMove === "rock"){
            computerMoveDisplay.innerText = "🪨";
            playerScore++;
            return "player wins"
        }
        if (computerMove === "paper") {
            computerMoveDisplay.innerText = "📜";
            return "tie"
        }
        else {
            computerMoveDisplay.innerText = "✂️";
            computerScore++;
            return "computer wins"
        }
    }
    if (playerMove === "scissors") {
        playerMoveDisplay.innerText = "✂️";
        if (computerMove === "rock"){
            computerMoveDisplay.innerText = "🪨";
            computerScore++;
            return "computer wins"
        }
        if (computerMove === "paper") {
            computerMoveDisplay.innerText = "📜";
            playerScore++;
            return "player wins"
        }
        else {
            computerMoveDisplay.innerText = "✂️";
            return "tie"
        }
    }
}

var playerScore = 0;
var computerScore = 0;

playerMoveDisplay = document.getElementById("player-move");
computerMoveDisplay = document.getElementById("computer-move");

function playRound (playerMove, computerMove) {
    determineWinner(playerMove, computerMove)
    // update scoreboard
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
}

const rockBtn = document.getElementById("rock-button");
rockBtn.addEventListener("click", function(){
    playRound("rock", computerMove())
});

const paperBtn = document.getElementById("paper-button");
paperBtn.addEventListener("click", function(){
    playRound("paper", computerMove())
});

const scissorBtn = document.getElementById("scissor-button");
scissorBtn.addEventListener("click", function(){
    playRound("scissor", computerMove())
});