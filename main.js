const moves = ["Rock", "Paper", "Scissors"]

function computerMove () {
    return moves[Math.floor(Math.random()*moves.length)]
}

console.log(computerMove());
console.log(computerMove());
console.log(computerMove());