function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//console.log(getComputerChoice());
function getHumanChoice() {
  const input = prompt("Choose: rock , paper or scissors!");
  return input.toLowerCase();
}
//console.log(getHumanChoice());
let humanChoice = 0;
  let computerChoice = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Stalemate😁 " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!😎 " + humanChoice + " beats " + computerChoice);
    return "human";
  } else {
    console.log("Computer wins😜 " + computerChoice + " beats " + humanChoice);
    return "computer";
  }
}

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playround() {
    let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result === "human") {
      ++humanScore;
    } else if (result === "computer") {
      ++computerScore;
    }
  }

  if (humanScore > computerScore) {
    console.log("You win the game! 🏆");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game! 💻");
  } else {
    console.log("It's a draw! 🤝");
  }

  console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
}
playround();