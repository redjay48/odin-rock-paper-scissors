function computerPlay() {
    let num = Math.floor((Math.random() * 3) + 1);
    if (num === 1) {
        return 'rock';
    } else if (num === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function userPlay() {
    let userInput = prompt('Your move', '').toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return undefined;
    }

}


function getMatchResult(computerSelection, userSelection) {
    if (computerSelection === userSelection) {
        return `It's a draw!`;
    } else if (computerSelection === 'rock' && userSelection === 'scissors') {
        return `You lose!! Rock beats Scissors`;
    } else if (computerSelection === 'paper' && userSelection === 'rock') {
        return `You lose!! Paper beats Rock`;
    } else if (computerSelection === 'scissors' && userSelection === 'paper') {
        return `You lose!! Scissors beats Paper`;
    } else if (userSelection === 'rock' && computerSelection === 'scissors') {
        return `You win!! Rock beats Scissors`;
    } else if (userSelection === 'paper' && computerSelection === 'rock') {
        return `You win!! Paper beats Rock`;
    } else if (userSelection === 'scissors' && computerSelection === 'paper') {
        return `You win!! Scissors beats Rock`;
    } else if (userSelection === undefined) {
        return `You lose!! invalid input`;
    }
}


function playGame() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i< 5;i++) {
        let string = getMatchResult(computerPlay(), userPlay());
        if (string.charAt(4) === 'w') {
            userScore ++;
        } else if (string.charAt(4) === 'l') {
            computerScore ++;
        } 
    }
    let drawCount = 5 -(computerScore + userScore);
    if (userScore > computerScore) {
        return `You Win! Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
    } else if (userScore < computerScore) {
        return `You Lose! Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
    } else if (userScore === computerScore) {
        return `It's a draw! No one wins. Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
    }
}