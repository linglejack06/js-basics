let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('.gameBtn');
buttons.forEach(button => {
    button.addEventListener('click', playRound);
});
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}
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
function getPlayerChoice(e) {
    let choice = e.target.textContent;
    return choice.toLowerCase();
}
function getWinner(e) {
    let playerChoice = getPlayerChoice(e);
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}
function playRound(e) {
    let winner = getWinner(e);
    let roundWin = document.querySelector('h2');
    let score = document.getElementById('score');
    switch(winner) {
        case 'player':
            if (playerScore === 4) {
                score.innerHTML = 'Winner: Player';
                roundWin.innerHTML = 'Player Wins';
                disableButtons();
                break;
            }
            playerScore++;
            score.innerHTML = `Score ${playerScore}-${computerScore}`;
            roundWin.innerHTML= 'Player Wins Round';
            break;
        case 'computer':
            if (computerScore === 4) {
                score.innerHTML = 'Winner: Computer';
                roundWin.innerHTML = 'Computer Wins';
                disableButtons();
                break;
            }
            computerScore++;
            score.textContent = `Score ${playerScore}-${computerScore}`;
            roundWin.innerHTML = 'Computer Wins Round';
            break;
        case 'tie':
            score.innerHTML = `Score ${playerScore}-${computerScore}`;
            roundWin.innerHTML = "It's a tie!";
            break;
    };
};