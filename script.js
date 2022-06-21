function computerPlay() {
    const play = ['rock', 'paper', 'scissors'];
    return play[Math.floor(Math.random() * 3)];
}

function game() {
    for (var i = 0; i < 5; i++) {

        function playRound(playerSelection, computerSelection) {
            if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
                return "You win! Rock beats Scissors!"
            } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
                return "You lose! Paper beats Rock!"
             } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
                return "You lose! Rock beats Scissors!"
             } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
                return "You win! Scissors beats Paper!"
             } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
                return "You win! Paper beats Rock!"
             } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
                return "You lose! Scissors beats paper!"
             } else if (playerSelection.toLowerCase() == computerSelection) {
                return "Damn it's a tie!"
             } else {
                return "Please enter a valid weapon dumbass! Rock, Paper, or Scissors only"
             }
    }

    const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}
}
game();