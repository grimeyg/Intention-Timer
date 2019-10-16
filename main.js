var accomplishInput = document.querySelector(".accomplish");
var cardColor = document.querySelector(".color-bar");
var cardContainer = document.querySelector(".aside-section");
var currentActivity = document.querySelector(".current-activity");
var errorDescription = document.querySelector(".error-description");
var exeButton = document.querySelector(".exercise");
var funcMin = document.getElementById("min");
var funcSec = document.getElementById("sec");
var inputForm = document.querySelector(".input-form");
var logActivityButton = document.querySelector(".log-activity-button");
var medButton = document.querySelector(".meditate");
var minInput = document.getElementById("minute-input");
var newActivity = document.querySelector(".new-activity");
var noLogMessage = document.querySelector(".no-log-message");
var secInput = document.getElementById("second-input");
var studyButton = document.querySelector(".study");
var submitButton = document.querySelector(".submit-button");
var timerForm = document.querySelector(".timer-form");
var timerStart = document.querySelector(".activity-start");
var toAccomplish = document.querySelector(".to-accomplish");

studyButton.addEventListener("click", function() {
  changeButton(studyButton, "green")
});

medButton.addEventListener("click", function() {
  changeButton(medButton, "purple")
});

exeButton.addEventListener("click", function() {
  changeButton(exeButton, "orange")
});

submitButton.addEventListener("click", changeForm);

timerStart.addEventListener("click", startCountdown);

logActivityButton.addEventListener("click", logActivity);

function changeButton(button, color) {
  // console.log(event, button, color);
  event.preventDefault();
  if (button.classList.contains(`change-${color}`)) {
     button.classList.remove(`change-${color}`);
     timerStart.classList.remove(`${color}-border`);
} else {
    button.classList.add(`change-${color}`);
    timerStart.classList.add(`${color}-border`);
  }
  if (color === "green"){
    medButton.classList.remove("change-purple");
    exeButton.classList.remove("change-orange");
  } else if (color === "orange") {
    studyButton.classList.remove("change-green");
    medButton.classList.remove("change-purple");
  }else if (color === "purple") {
    studyButton.classList.remove("change-green");
    exeButton.classList.remove("change-orange");
  }
}

function changeForm() {
  if (minInput.value.length == 0) {
    minInput.value = 0;
  }
  if (secInput.value.length == 0) {
    secInput.value = 00;
  }
  if (accomplishInput.value === "") {
    event.preventDefault(submitButton);
    errorDescription.classList.remove("hide-error");
  } else {
    event.preventDefault(submitButton);
    inputForm.classList.add("hide-form");
    timerForm.classList.remove("hidden-timer");
    newActivity.classList.add("hide-form");
    currentActivity.classList.remove("hidden-timer");
    toAccomplish.innerText = accomplishInput.value;
    funcSec.innerHTML = secInput.value;
    console.log(funcSec.innerHTML);
    funcMin.innerHTML = minInput.value;
    if (secInput.value < 10) {
      funcSec.innerHTML = "0" + funcSec.innerHTML;

    }
}
}

function startCountdown() {
  var seconds = secInput.value;
  setInterval(countOne, 1000);
  var minutes = minInput.value;
  if (seconds < 10) {
  seconds = "0" + seconds;
  }
  function countOne() {
    funcSec.innerHTML = seconds;
    seconds = seconds - 1;
    funcMin.innerHTML = minutes;
    if (minutes > 0 && seconds === -1) {
      minutes --;
      seconds = 59;
      console.log("hi");
    }
    if (seconds === -1) {
      minutes = "0"
      seconds = "0"
      timerStart.innerHTML = "COMPLETE!";
      logActivityButton.classList.remove("hidden-log-button");
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }
}

function logActivity() {
  event.preventDefault();
  if (noLogMessage.classList.contains("no-log-message")) {
    noLogMessage.classList.add("hide-form");
  }
  if (timerStart.classList.contains("green-border")) {
    var card = "Study";
    var color = "green";
  }
  if (timerStart.classList.contains("purple-border")) {
      var card = "Meditate";
      var color = "purple";
  }
  if (timerStart.classList.contains("orange-border")) {
      var card = "Exercise";
      var color = "orange";
  }

  addCard(card,color);
}

function addCard(card, color) {
  console.log('you tried adding a card');
  cardContainer.innerHTML += `
  <div class="logged-card">
    <div class="card-flex">
      <h3 class="card-margins">${card}</h3>
      <div class="color-bar ${color}-bar"></div>
    </div>
    <p class="card-margins">${minInput.value} MIN ${secInput.value} SECONDS</p>
    <p class="card-margins">${accomplishInput.value}</p>
  </div>`;
}
