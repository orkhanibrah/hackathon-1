let btnNewGame = document.getElementById("newGame");
let table = document.getElementById("table");
let timerSecond = document.getElementById("second");
let timerMinute = document.getElementById("minute");
let numBtn = document.getElementById("nextNum");
let inputCheck = document.querySelectorAll('input[type="checkbox"]');
let easy = document.getElementById("easy");
let amateur = document.getElementById("amateur");
let expert = document.getElementById("expert");
let counter = 1;
let second = 0;
let minute = 0;
let start;
let time = 0;
let arrNumber = [];
let arrRandom = [];

inputCheck.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      inputCheck.forEach((otherInput) => {
        if (otherInput !== input) {
          otherInput.checked = false;
        }
      });
    }
  });
});

function randomNumberTable() {
    arrNumber = []
    arrRandom = []
  table.innerHTML = "";
  timerSecond.textContent = "";
  timerMinute.textContent = "";
  second = 0;
  minute = 0;
  clearInterval(start); 
  counter = 1;
  numBtn.textContent = counter;
 


  if (easy.checked) {
    arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    table.style.gridTemplateColumns = "repeat(4, 1fr)";
    table.style.gridTemplateColumns = "repeat(4, 1fr)";
  }
  if (amateur.checked) {
    arrNumber = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ];
    table.style.gridTemplateColumns = "repeat(5, 1fr)";
    table.style.gridTemplateColumns = "repeat(5, 1fr)";
  }
  if (expert.checked) {
    arrNumber = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    ];
    table.style.gridTemplateColumns = "repeat(6, 1fr)";
    table.style.gridTemplateColumns = "repeat(6, 1fr)";
  }

  while (arrNumber.length > 0) {
    let randomIndex = Math.floor(Math.random() * arrNumber.length);
    let randomNumber = arrNumber.splice(randomIndex, 1);
    if (!arrRandom.includes(randomNumber)) {
      arrRandom.push(randomNumber);

      let divNumber = document.createElement("div");
      divNumber.textContent = randomNumber;
      table.appendChild(divNumber);

      divNumber.addEventListener("click", function () {
        deleteNumber(divNumber);
      });

    }
  }
}

function deleteNumber(divNumber) {
  if (parseInt(divNumber.textContent) === counter) {
    divNumber.style.background = "none";
    divNumber.textContent = "";
    counter++;
    numBtn.textContent = counter;
  }
  if (counter === 2) {
    startTimer();
  }
  if (counter > arrRandom.length) {
    clearInterval(start);
    alert("YOU WIN ! Time elapsed: " + getTime());
    counter = 1;
  }
}

function timer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }

  if (second < 10) {
    timerSecond.textContent = "0" + second;
  } else {
    timerSecond.textContent = second;
  }
  if (minute < 10) {
    timerMinute.textContent = "0" + minute + ":";
  } else {
    timerMinute.textContent = minute + ":";
  }

  time = minute * 60 + second;
}

function startTimer() {
  start = setInterval(() => timer(), 1000);
}

function getTime() {
  let minuteTime;
  let secondTime;

  if (minute < 10) {
    minuteTime = "0" + minute;
  } else {
    minuteTime = minute;
  }

  if (second < 10) {
    secondTime = "0" + second;
  } else {
    secondTime = second;
  }

  return minuteTime + ":" + secondTime;
}

btnNewGame.addEventListener("click", randomNumberTable);
