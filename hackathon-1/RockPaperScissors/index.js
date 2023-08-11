let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let choice = document.querySelectorAll(".fa-regular");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");
let finalResult = document.getElementById("result");
let player;
let computer;

function init() {
  for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener("click", function () {
      playerChoice.innerHTML = choice[i].outerHTML;
      player = choice[i].id;
      let random = choice[Math.floor(Math.random() * choice.length)];

      computerChoice.innerHTML = random.outerHTML;
      computer = random.id;

      result(player, computer);
    });
  }
}

function result(player, computer) {
  if (player === computer) {
    finalResult.textContent = "EGALITY";
  } else if (
    (player === "scissors" && computer === "rock") ||
    (player === "paper" && computer === "scissors") ||
    (player === "rock" && computer === "paper")
  ) {
    finalResult.textContent = "YOU LOSE";
  } else {
    finalResult.textContent = "YOU WIN";
  }
}
