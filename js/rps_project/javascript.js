
// Create an array for the Rock, Paper and Scissors choices that will be available for the player

const choices = ["rock", "paper", "scissors"];

// The player is prompted to input a valid integer for how many rounds they want to play against the computer in the Rock, Paper and Scissors match

let rounds = parseInt(prompt("How many rounds of Rock, Paper and Scissors do you want to play?: "), 10);

if (isNaN(rounds)) {
    throw new Error("You didn't input an integer for the amount of rounds");
}

// Defining variables that will be used at the very end to determine who won the whole match of Rock, Paper and Scissors

let computerScore = 0;
let playerScore = 0;

// Defining a function that will randomly assign the computer's choice from the previously created Rock, Paper and Scissors array

function getComputerChoice() {
    computerSelection = choices[Math.floor(choices.length * Math.random())];
    return computerSelection;
}

// Defining a function that will prompt the user to make a valid choice from the previously created Rock, Paper and Scissors array

function getPlayerChoice() {
    playerSelection = (prompt("Choose Rock, Paper or Scissors: ").toLowerCase());
    if (!playerSelection.includes("rock") && !playerSelection.includes("paper") && !playerSelection.includes("scissors")) {
        throw new Error("You didn't input a valid Rock, Paper or Scissors choice")
    }
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    return playerSelection;
}

// Defining function that will play the round of Rock, Paper and Scissors with the player's choice and the computer's randomly generated choice. The function will also output who won the round and give a point to the computer if it won or give a point to the player if they won or no points if the round was a draw

function play(computerSelection, playerSelection) {

    if (computerSelection == "rock" && playerSelection == "rock") {
        let winner = "The round is a draw";
        console.log(winner);
    }
    if (computerSelection == "rock" && playerSelection == "paper") {
        let winner = "The player wins the round";
        playerScore++;
        console.log(winner);
        return playerScore;
    }
    if (computerSelection == "rock" && playerSelection == "scissors") {
        let winner = "The computer wins the round";
        computerScore++;
        console.log(winner);
        return computerScore;
    }
    if (computerSelection == "paper" && playerSelection == "rock") {
        let winner = "The computer wins the round";
        computerScore++;
        console.log(winner);
        return computerScore;
    }
    if (computerSelection == "paper" && playerSelection == "paper") {
        let winner = "The round is a draw";
        console.log(winner);
    }
    if (computerSelection == "paper" && playerSelection == "scissors") {
        let winner = "The player wins the round";
        playerScore++;
        console.log(winner);
        return playerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "rock") {
        let winner = "The player wins the round";
        playerScore++;
        console.log(winner);
        return playerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "paper") {
        let winner = "The computer wins the round";
        computerScore++;
        console.log(winner);
        return computerScore;
    }
    if (computerSelection == "scissors" && playerSelection == "scissors") {
        let winner = "The round is a draw";
        console.log(winner);
    }
}

// Defining and executing a function that will loop through all three of the previously defined functions. Essentially it will loop through the functions until it reaches the amount of Rock, Paper and Scissors rounds that was specified by the player previously

function game() {
    for (i=1; i<=rounds; i++) {
        getComputerChoice()
        getPlayerChoice()
        play(computerSelection, playerSelection)
    }
}

game()

// Finally comparing the playerScore and computerScore totals to determine who won the whole match of Rock, Paper and Scissors

if (playerScore > computerScore) {
    console.log("The player won the match");
} else if (playerScore < computerScore) {
    console.log("The computer won the match");
} else {
    console.log("The match was a draw");
}
