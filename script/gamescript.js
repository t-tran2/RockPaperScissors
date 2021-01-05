function capitalize(str1) {
    let lwrCaseStr = str1.toLowerCase();
    let firstChar = lwrCaseStr.charAt(0);
    let capitalizedStr = firstChar.toUpperCase() + lwrCaseStr.substr(1);
    return capitalizedStr;
}
function computerPlay() {
    let computerChoice = "rock";
    let rndNum = Math.floor(Math.random() * 3);
    if (rndNum === 0) {
        computerChoice = "paper";
    } else if (rndNum === 1) {
        computerChoice = "scissors";
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    let lwrCasePlayerSelection = playerSelection.toLowerCase();
    let result;
    if (lwrCasePlayerSelection === "rock" && computerSelection === "scissors" || 
        lwrCasePlayerSelection === "paper" && computerSelection === "rock" || 
        lwrCasePlayerSelection === "scissors" && computerSelection === "paper") {
            result = "You win! " + capitalize(lwrCasePlayerSelection) + " beats " + capitalize(computerSelection);
    } else if (lwrCasePlayerSelection.localeCompare(computerSelection) === 0) {
        result = "Tie! You and the computer chose " + capitalize(lwrCasePlayerSelection);
    } 
    else {
        result = "You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
    }
    return result;
}

function updateScore(resultOfRound) {
    let playerScore = Number(document.querySelector("#player-score").textContent.slice(-1));
    let computerScore = Number(document.querySelector("#computer-score").textContent.slice(-1));
    if (resultOfRound.substr(0, 8).localeCompare("You win!") === 0) {
        playerScore++;
    } else if (resultOfRound.substr(0, 9).localeCompare("You lose!") === 0) {
        computerScore++;
    }
    document.querySelector("#player-score").textContent = "Player: " + playerScore;
    document.querySelector("#computer-score").textContent = "Computer: " + computerScore;
}
// Needs to be changed so it accounts for > 1 digit numbers.
function updateRound() {
    let roundNum = Number(document.querySelector("#round").textContent.slice(-1));
    roundNum++;
    document.querySelector("#round").textContent = document.querySelector("#round").textContent.slice(0, -1) + roundNum;
}

function displayWinner(resultOfRound) {
    let playerScore = Number(document.querySelector("#player-score").textContent.slice(-1));
    let computerScore = Number(document.querySelector("#computer-score").textContent.slice(-1));
    document.querySelector("#winner").textContent = document.querySelector("#round").textContent + ": " + resultOfRound;
    if (playerScore === 5) {
        document.querySelector("#winner").textContent = document.querySelector("#winner").textContent + "\r\nYou are the winner of the set!";
        document.querySelector("#round").textContent = document.querySelector("#round").textContent.slice(0, -1) + "0";
        document.querySelector("#player-score").textContent = document.querySelector("#player-score").textContent.slice(0, -1) + "0";
        document.querySelector("#computer-score").textContent = document.querySelector("#computer-score").textContent.slice(0, -1) + "0";
    } else if (computerScore === 5) {
        document.querySelector("#winner").textContent = document.querySelector("#winner").textContent + "\r\nThe computer is the winner of the set!"
        document.querySelector("#round").textContent = document.querySelector("#round").textContent.slice(0, -1) + "0";
        document.querySelector("#player-score").textContent = document.querySelector("#player-score").textContent.slice(0, -1) + "0";
        document.querySelector("#computer-score").textContent = document.querySelector("#computer-score").textContent.slice(0, -1) + "0";
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

let roundResult;

rockBtn.addEventListener('click', () => {
    roundResult = playRound("rock", computerPlay());
    updateScore(roundResult);
    updateRound();
    displayWinner(roundResult);
});
paperBtn.addEventListener('click', () => {
    roundResult = playRound("paper", computerPlay());
    updateScore(roundResult);
    updateRound();
    displayWinner(roundResult);
});
scissorBtn.addEventListener('click', () => {
    roundResult = playRound("scissors", computerPlay());
    updateScore(roundResult);
    updateRound();
    displayWinner(roundResult);
});