// ===== STATE =====
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const MAX_ROUNDS = 5;

// ===== DOM =====
const resultDiv = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".choices button");

// ===== COMPUTER =====
function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return "rock";
  if (random < 0.66) return "paper";
  return "scissors";
}

// ===== GAME LOGIC =====
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  roundsPlayed++;

  if (humanChoice === computerChoice) {
    resultDiv.textContent = `Tie! Both chose ${humanChoice}`;
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  updateScore();
  checkGameOver();
}

// ===== UI =====
function updateScore() {
  userScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}

function checkGameOver() {
  if (roundsPlayed === MAX_ROUNDS) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "🎉 You won the game!";
    } else if (computerScore > humanScore) {
      resultDiv.textContent = "💻 Computer wins the game!";
    } else {
      resultDiv.textContent = "🤝 It's a tie!";
    }

    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

// ===== EVENTS =====
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
