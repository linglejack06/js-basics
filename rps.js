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
        return 'Player wins! ' + playerChoice + ' beats ' + computerChoice;
    } else {
        return 'Computer wins! ' + computerChoise + ' beats ' + playerChoice;
    }
}