const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const rulesBtn = document.getElementById("rulesBtn");
const rulesPopup = document.getElementById("rulesPopup");
const closeRules = document.getElementById("closeRules");

let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

const options = ["rock", "paper", "scissors"];
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * 3)];
    playRound(playerChoice, computerChoice);
  });
});

function playRound(playerChoice, computerChoice) {
  let result = "";

  if (playerChoice === computerChoice) {
    result = "TIE";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    result = "YOU WIN";
  } else {
    computerScore++;
    result = "YOU LOSE";
  }

  updateScores();

  // Save to localStorage
  localStorage.setItem("result", result);
  localStorage.setItem("playerChoice", playerChoice);
  localStorage.setItem("pcChoice", computerChoice);

  // Redirect
  window.location.href = "result.html";
}

function updateScores() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}

// Rules popup
rulesBtn.addEventListener("click", () =>
  rulesPopup.classList.remove("hidden")
);
closeRules.addEventListener("click", () =>
  rulesPopup.classList.add("hidden")
);
