
 function getComputerChoice() {

  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  }

  else if (randomNumber < 0.66) {
    return "paper";
  }

    else {
    return "scissors";
  }
}

function getHumanChoice() {
  
  const userInput = prompt("Enter rock, paper, or scissors:");

  return userInput;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  console.log("You chose:", humanChoice);
  console.log("Computer chose:", computerChoice);

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    
    humanScore++;

    console.log("You win! " + humanChoice + " beats " + computerChoice);
  } 
  
  else {
    
    computerScore++;

    console.log("You lose! " + computerChoice + " beats " + humanChoice);
  }

  console.log("Score -> You:", humanScore, "Computer:", computerScore);
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    
    console.log("----- Round " + round + " -----");

    
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    
    playRound(humanChoice, computerChoice);
  }

  
  console.log("===== Final Score =====");
  console.log("You:", humanScore);
  console.log("Computer:", computerScore);

  
  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer wins.");
  } else {
    console.log("The game ends in a tie!");
  }
}


playGame();