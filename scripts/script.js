function game() {
    const games = 5;
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < games; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round == 'wins') {
            console.log('You won this round, ' + playerSelection + ' beats ' + computerSelection + '.');
            playerWins++;
        } else if (round == 'loses') {
            console.log('You lost this round, ' + playerSelection + ' loses to ' + computerSelection + '.');
            computerWins++;
        } else {
            console.log('You tied, ' + playerSelection + ' ties with ' + computerSelection + '.');
        }
    }
    if (playerWins > computerWins) {
        console.log('');
        console.log('Congratulations! You beat the computer ' + playerWins + ' to ' + computerWins + '!');
    } else if (playerWins < computerWins) {
        console.log('');
        console.log('Ouch! You lost to the computer ' + playerWins + ' to ' + computerWins + '.');
    } else {
        console.log('');
        console.log('Look at that, you and the computer tied at ' + playerWins + ' a piece!');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            return 'wins';
        } else if (computerSelection == 'paper') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'wins';
        } else if (computerSelection == 'scissors') {
            return 'loses';
        } else {
            return 'ties';
        }
    }

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper') {
            return 'wins';
        } else if (computerSelection == 'rock') {
            return 'loses'
        } else {
            return 'ties';
        }
    }
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    let compPlay = ['rock', 'paper', 'scissors'];
    return compPlay[computerSelection];
}

function userPlay() {
    let answer = prompt('Rock, Paper, Scissors?');
    answer = answer.toLowerCase();
    while (!(answer == 'rock' || answer == 'paper' || answer == 'scissors')) {
        answer = prompt('Please type either rock, paper, or scissors');
        answer = answer.toLowerCase();
    } 
    return answer;
}
