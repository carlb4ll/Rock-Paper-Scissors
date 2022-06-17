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

let computerSelection =
  gameOptions[Math.floor(Math.random() * gameOptions.length)];
let userInput = prompt("Choose Rock, Paper or Scissors?");
let playerSelection = userInput.toLowerCase();
let roundResult;

function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    roundResult = 0;
  } else if (
    computerSelection === gameOptions[0] &&
    playerSelection === gameOptions[2]
  ) {
    roundResult = 1;
  } else if (
    computerSelection === gameOptions[2] &&
    playerSelection === gameOptions[1]
  ) {
    roundResult = 3;
  } else {
    console.log("just testing");
  }
  console.log(gameResults[roundResult]);
}

playRound();

// Rock crushes scissors, you lose!
// Rock crushes scissors, you win!
// Scissors cuts paper, you lose!
// Scissors cuts paper, you win!
// Paper covers rock, you lose!
// Paper covers rock, you win!
