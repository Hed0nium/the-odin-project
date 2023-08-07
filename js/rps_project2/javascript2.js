
let roundNumber = 0;
let computerScore = 0;
let playerScore = 0;
let playerSelection;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    computerSelection = choices[Math.floor(choices.length * Math.random())];
    return computerSelection;
}

function play(computerSelection, playerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        let roundWinner = "The round is a draw";
        console.log(roundWinner);
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The round is a draw";
    }
    if (computerSelection == "rock" && playerSelection == "paper") {
        let roundWinner = "The player wins the round";
        console.log(roundWinner);
        playerScore++;
        let playerScoreModify = document.querySelector(".player_score_placeholder");
        playerScoreModify.innerHTML = playerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The player wins the round";
        return playerScore;
    }
    if (computerSelection == "rock" && playerSelection == "scissors") {
        let roundWinner = "The computer wins the round";
        console.log(roundWinner);
        computerScore++;
        let computerScoreModify = document.querySelector(".computer_score_placeholder");
        computerScoreModify.innerHTML = computerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The computer wins the round";
        return computerScore;
    }
    if (computerSelection == "paper" && playerSelection == "rock") {
        let roundWinner = "The computer wins the round";
        console.log(roundWinner);
        computerScore++;
        let computerScoreModify = document.querySelector(".computer_score_placeholder");
        computerScoreModify.innerHTML = computerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The computer wins the round";
        return computerScore;
    }
    if (computerSelection == "paper" && playerSelection == "paper") {
        let roundWinner = "The round is a draw";
        console.log(roundWinner);
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The round is a draw";
    }
    if (computerSelection == "paper" && playerSelection == "scissors") {
        let roundWinner = "The player wins the round";
        console.log(roundWinner);
        playerScore++;
        let playerScoreModify = document.querySelector(".player_score_placeholder");
        playerScoreModify.innerHTML = playerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The player wins the round";
        return playerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "rock") {
        let roundWinner = "The player wins the round";
        console.log(roundWinner);
        playerScore++;
        let playerScoreModify = document.querySelector(".player_score_placeholder");
        playerScoreModify.innerHTML = playerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The player wins the round";
        return playerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "paper") {
        let roundWinner = "The computer wins the round";
        console.log(roundWinner);
        computerScore++;
        let computerScoreModify = document.querySelector(".computer_score_placeholder");
        computerScoreModify.innerHTML = computerScore;
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The computer wins the round";
        return computerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "scissors") {
        let roundWinner = "The round is a draw";
        console.log(roundWinner);
        let roundWinnerModify = document.querySelector(".round_winner_placeholder");
        roundWinnerModify.innerHTML = "The round is a draw";
    }
}

function roundIncrement() {
    roundNumber++;
    console.log("The round number is " + roundNumber);
    let roundNumberModify = document.querySelector(".round_number_placeholder");
    roundNumberModify.innerHTML = roundNumber;
    return roundNumber;
}

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', () => {
    playerSelection = choices[0];
    console.log("The player chose " + playerSelection);
    let playerChoiceModify = document.querySelector(".player_choice_placeholder");
    playerChoiceModify.innerHTML = playerSelection;
    getComputerChoice();
    console.log("The computer chose " + computerSelection);
    let computerChoiceModify = document.querySelector(".computer_choice_placeholder");
    computerChoiceModify.innerHTML = computerSelection
    play(computerSelection, playerSelection);
    roundIncrement();
});

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', () => {
    playerSelection = choices[1];
    console.log("The player chose " + playerSelection);
    let playerChoiceModify = document.querySelector(".player_choice_placeholder");
    playerChoiceModify.innerHTML = playerSelection;
    getComputerChoice();
    console.log("The computer chose " + computerSelection);
    let computerChoiceModify = document.querySelector(".computer_choice_placeholder");
    computerChoiceModify.innerHTML = computerSelection
    play(computerSelection, playerSelection);
    roundIncrement();
});

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', () => {
    playerSelection = choices[2];
    console.log("The player chose " + playerSelection);
    let playerChoiceModify = document.querySelector(".player_choice_placeholder");
    playerChoiceModify.innerHTML = playerSelection;
    getComputerChoice();
    console.log("The computer chose " + computerSelection);
    let computerChoiceModify = document.querySelector(".computer_choice_placeholder");
    computerChoiceModify.innerHTML = computerSelection;
    play(computerSelection, playerSelection);
    roundIncrement();
});

if (roundNumber = 5 && (playerScore > computerScore)) {
    console.log("The player won the match");
    let matchModify = document.querySelector(".match_winner_placeholder");
    matchModify.innerHTML = "The player won the match";
}

if (roundNumber = 5 && (playerScore < computerScore)) {
    console.log("The computer won the match");
    let matchModify = document.querySelector(".match_winner_placeholder");
    matchModify.innerHTML = "The computer won the match";
}

if (roundNumber = 5 && (playerScore === computerScore)) {
    console.log("The match was a draw");
    let matchModify = document.querySelector(".match_winner_placeholder");
    matchModify.innerHTML = "The match was a draw";
}
