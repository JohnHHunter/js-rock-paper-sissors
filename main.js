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

function playRound (playerMove, computerMove) {
    alert (`Computer plays: ${computerMove}`)
    if (playerMove === "rock") {
        if (computerMove === "rock"){
            return "tie"
        }
        if (computerMove === "paper") {
            return "computer wins"
        }
        else {
            return "player wins"
        }
    }
    if (playerMove === "paper") {
        if (computerMove === "rock"){
            return "player wins"
        }
        if (computerMove === "paper") {
            return "tie"
        }
        else {
            return "computer wins"
        }
    }
    if (playerMove === "scissors") {
        if (computerMove === "rock"){
            return "computer wins"
        }
        if (computerMove === "paper") {
            return "player wins"
        }
        else {
            return "tie"
        }
    }
}

alert(playRound(getPlayerMove(), computerMove()));
