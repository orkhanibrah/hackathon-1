let body = document.querySelector("body");
let btn = document.querySelector("button");
let hidden = document.getElementById("hiddenWord");
let wrongLetter = document.getElementById("wrongLetter");
let hangMan = document.querySelectorAll(".figure");
let restOfChance = document.querySelector('.chanceNumber')

let hiddenText = [];
let wrongLetterArr = [];
let searchWord;
let counter = 1;

function startGame() {
restOfChance.textContent = 'Let\'s Start'
  hiddenText = [];
  wrongLetterArr = [];
  wrongLetter.textContent = "";
  body.style.background = "#331153";
  counter = 1;
  hangMan.forEach((figure) => (figure.style.visibility = "hidden"));

  let words = [
    "example",
    "dance",
    "tomorrow",
    "elephant",
    "internet",
    "solution",
    "rainbow",
    "mountain",
    "disproportionate",
    "language",
    "unintentionally",
    "surprise",
    "festival",
    "daughter",
    "midnight",
    "summer",
    "summer",
  ];

  let getRandom = Math.floor(Math.random() * words.length);

  randomWord = words[getRandom];
  console.log(randomWord);
  searchWord = randomWord.split("");

  hidden.textContent = " _ ".repeat(searchWord.length);
  document.addEventListener("keypress", keyPressLetter);
}

function keyPressLetter(e) {
  if (counter < 11) {
    if (!searchWord.includes(e.key.toLowerCase())) {
      wrongLetterArr.push(e.key.toLowerCase());
      wrongLetter.textContent = wrongLetterArr.join(", ");
      body.style.background = "red";
      hangMan[counter - 1].style.visibility = "visible";
      let restChance = 10 - counter
      let chance;
      restChance = 10 - counter
     chance;
      console.log(counter);
      if (restChance > 1) {
        chance = "chances"
      } else {
        chance ="chance"
      }
      restOfChance.textContent = `Attention ! You have ${restChance} ${chance} left`
      counter++;
    } else {
      for (let i = 0; i < searchWord.length; i++) {
        if (searchWord[i] === e.key.toLowerCase()) {
          hiddenText[i] = e.key.toLowerCase();
          body.style.background = "green";
        }
        if (!hiddenText[i]) {
          hiddenText[i] = "_";
        }
      }

      hidden.textContent = hiddenText.join(" ");

      if (hiddenText.join("") === randomWord) {
        endGame("win");
      }
    }
  }

  if (counter === 11) {
    endGame("lose");
  }
}

function endGame(endOfPartie) {
  if (endOfPartie === "lose") {
    alert("YOU LOSE");
  } else if (endOfPartie === "win") {
    alert("YOU WIN ");
  }
  startGame();
}

btn.addEventListener("click", startGame);
