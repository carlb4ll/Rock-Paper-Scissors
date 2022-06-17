// Rock Paper Scissors Console Game

// Requirements

//Rock crushes scissors, scissors cuts paper, and paper covers rock.

//Functions - computerPlay - computer choosing a random string Rock, Paper or Scissors returna value called computer selection
//User input case-insensitive string that reurns player selection
//playRound plays a single round
//game play 5 rounds

const gameOptions = ["rock", "paper", "scissors"];

const gameResults = [
  "it's a tie, you both choose the same",
  "Rock crushes scissors, you lose!",
  "Rock crushes scissors, you win!",
  "Scissors cuts paper, you lose!",
  "Scissors cuts paper, you win!",
  "Paper covers rock, you lose!",
  "Paper covers rock, you win!",
];

let roundResult;
let playerScore = 0;
let computerScore = 0;

function computerSelection() {
  computerPlay = gameOptions[Math.floor(Math.random() * gameOptions.length)];
  return computerPlay;
}

function playerSelection() {
  userPlay = (prompt("Choose: Rock, Paper or Scissors?") || "").toLowerCase();
  return userPlay;
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    roundResult = 0;
  } else if (
    computerSelection === gameOptions[0] &&
    playerSelection === gameOptions[2]
  ) {
    roundResult = 1;
    computerScore += 1;
  } else if (
    computerSelection === gameOptions[2] &&
    playerSelection === gameOptions[1]
  ) {
    roundResult = 3;
    computerScore += 1;
  } else if (
    computerSelection === gameOptions[1] &&
    playerSelection === gameOptions[0]
  ) {
    roundResult = 5;
    computerScore += 1;
  } else if (
    playerSelection === gameOptions[0] &&
    computerSelection === gameOptions[2]
  ) {
    roundResult = 2;
    playerScore += 1;
  } else if (
    playerSelection === gameOptions[2] &&
    computerSelection === gameOptions[1]
  ) {
    roundResult = 4;
    playerScore += 1;
  } else if (
    playerSelection === gameOptions[1] &&
    computerSelection === gameOptions[0]
  ) {
    roundResult = 6;
    playerScore += 1;
  } else {
    console.log("You didn't enter an option");
    return;
  }

  console.log(gameResults[roundResult]);
  console.log(`The computer score is: ${computerScore}`);
  console.log(`Your score is: ${playerScore}`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(computerSelection(), playerSelection());
    console.log(`The computer chose: ${computerPlay}`);
    console.log(`You chose: ${userPlay}`);
  }
  console.log(winCondition());
}

function winCondition() {
  if (computerScore > playerScore) {
    return "Computer Wins";
  } else if (playerScore > computerScore) {
    return "You win";
  } else {
    return "its a tie";
  }
}

game();

// Rock crushes scissors, you lose!
// Rock crushes scissors, you win!
// Scissors cuts paper, you lose!
// Scissors cuts paper, you win!
// Paper covers rock, you lose!
// Paper covers rock, you win!
