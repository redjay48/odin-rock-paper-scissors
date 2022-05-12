const buttons = document.querySelectorAll('.button');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const draw = document.querySelector('.draw');
const playerList = playerScore.getElementsByTagName('li');
const computerList = computerScore.getElementsByTagName('li');
const drawList =  draw.getElementsByTagName('li');
const result = document.querySelector('.result');


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


// // function getMatchResult(computerSelection, userSelection) {
// //     if (computerSelection === userSelection) {
// //         return `It's a draw!`;
// //     } else if (computerSelection === 'rock' && userSelection === 'scissors') {
// //         return `You lose!! Rock beats Scissors`;
// //     } else if (computerSelection === 'paper' && userSelection === 'rock') {
// //         return `You lose!! Paper beats Rock`;
// //     } else if (computerSelection === 'scissors' && userSelection === 'paper') {
// //         return `You lose!! Scissors beats Paper`;
// //     } else if (userSelection === 'rock' && computerSelection === 'scissors') {
// //         return `You win!! Rock beats Scissors`;
// //     } else if (userSelection === 'paper' && computerSelection === 'rock') {
// //         return `You win!! Paper beats Rock`;
// //     } else if (userSelection === 'scissors' && computerSelection === 'paper') {
// //         return `You win!! Scissors beats Rock`;
// //     } else if (userSelection === undefined) {
// //         return `You lose!! invalid input`;
// //     }
// // }


// // function playGame() {
// //     let userScore = 0;
// //     let computerScore = 0;
// //     for (let i = 0; i< 5;i++) {
// //         let string = getMatchResult(computerPlay(), userPlay());
// //         if (string.charAt(4) === 'w') {
// //             userScore ++;
// //         } else if (string.charAt(4) === 'l') {
// //             computerScore ++;
// //         } 
// //     }
// //     let drawCount = 5 -(computerScore + userScore);
// //     if (userScore > computerScore) {
// //         return `You Win! Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
// //     } else if (userScore < computerScore) {
// //         return `You Lose! Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
// //     } else if (userScore === computerScore) {
// //         return `It's a draw! No one wins. Here are the Scores: You: ${userScore} Computer: ${computerScore} Draw Matches: ${drawCount}`;
// //     }
// // }






buttons.forEach(button => {
    button.addEventListener('click', Play)
});

function Play(e) {
    let userInput = e.target.id;
    let computerInput = computerPlay();
    let pCount = document.createElement('li');
    let cCount = document.createElement('li');
    let dCount = document.createElement('li');
    let para = document.createElement('p');
    // let pScore = 0;
    // let cScore = 0;
    // let dScore = 0;
    cCount.textContent = 0;
        pCount.textContent = 0;
        dCount.textContent = 0;
    if (computerInput === 'rock' && userInput === 'scissors' || computerInput === 'paper' && userInput === 'rock' || computerInput === 'scissors' && userInput === 'paper') {
        cCount.textContent = 1;
    }
    else if (userInput === 'rock' && computerInput === 'scissors' || userInput === 'paper' && computerInput === 'rock' || userInput === 'scissors' && computerInput === 'paper') {
        // pScore++;
        pCount.textContent = 1;
    }
    else {
        // dScore++;
        dCount.textContent = 1;
    }
    // pCount.textContent = pScore;
    // cCount.textContent = cScore;
    // dCount.textContent = dScore;
    let playerTotal = 0;
    let computerTotal = 0;
    let drawTotal = 0;
    
    for (li of playerList) {
 
        playerTotal = playerTotal + parseInt(li.textContent);
        if (playerTotal === 5) {
            para.textContent = `Player Wins!!!`;
            // alert(`Player Wins!!!`);       
        }
    }
    for (li of computerList) {
 
        computerTotal = computerTotal + parseInt(li.textContent);
        if (computerTotal === 5) {
            para.textContent = `Computer Wins!!!`;
            // alert(`Computer Wins!!!`);
        }
    }
    for (li of drawList) {
 
        drawTotal = drawTotal + parseInt(li.textContent);
        if (drawTotal === 5) {
            para.textContent = `It's a draw! Play again!`;
            // alert(`It's a draw! Play again!`); 
        }
    }
    result.appendChild(para);
    playerScore.appendChild(pCount);
    computerScore.appendChild(cCount);
    draw.appendChild(dCount);


}