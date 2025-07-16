let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Stalemate 😁 Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! 😎 ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer wins 😜 ${computerChoice} beats ${humanChoice}`;
  }
}

function updateUI(message) {
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  resultDiv.textContent = message;
  scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "🎉 You won the game!" : "💻 Computer won the game!";
    scoreDiv.textContent += `\n${winner}`;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rock").addEventListener("click", () => {
    const result = playRound("rock", getComputerChoice());
    updateUI(result);
  });

  document.getElementById("paper").addEventListener("click", () => {
    const result = playRound("paper", getComputerChoice());
    updateUI(result);
  });

  document.getElementById("scissors").addEventListener("click", () => {
    const result = playRound("scissors", getComputerChoice());
    updateUI(result);
  });
});
