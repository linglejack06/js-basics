function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 2) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getPlayerChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie!';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let winner = getWinner(getPlayerChoice(), getComputerChoice());
        console.log(winner);
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'computer') {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log('Player Wins: ' + playerScore + '-' + computerScore);
    } else if (computerScore > playerScore) {
        console.log('Computer Wins: ' + computerScore + '-' + playerScore);
    } else {
        console.log('tie: ' + playerScore + '-' + computerScore);
    }
}
game()