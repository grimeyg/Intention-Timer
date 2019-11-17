const accomplishInput = document.querySelector(".accomplish");
const cardColor = document.querySelector(".color-bar");
const cardContainer = document.querySelector(".aside-section");
const currentActivity = document.querySelector(".current-activity");
const completedActivity = document.querySelector(".completed-activity");
const errorDescription = document.querySelector(".error-description");
const exeButton = document.querySelector(".exercise");
const funcMin = document.getElementById("min");
const funcSec = document.getElementById("sec");
const inputForm = document.querySelector(".input-form");
const logActivityButton = document.querySelector(".log-activity-button");
const medButton = document.querySelector(".meditate");
const minInput = document.getElementById("minute-input");
const newActivity = document.querySelector(".new-activity");
const newForm = document.querySelector(".new-form");
const newFormButton = document.querySelector(".new-form-button")
const noLogMessage = document.querySelector(".no-log-message");
const secInput = document.getElementById("second-input");
const studyButton = document.querySelector(".study");
const submitButton = document.querySelector(".submit-button");
const timerForm = document.querySelector(".timer-form");
const timerStart = document.querySelector(".activity-start");
const toAccomplish = document.querySelector(".to-accomplish");
const btnContainer = document.querySelector("#button-layout")


btnContainer.addEventListener("click", function() {
  let selectedColor = event.target.value;
  let selectedBtn = event.target;
    changeButton(selectedBtn,`${selectedColor}`)
});
//
// exeButton.addEventListener("click", function() {
//   changeButton(exeButton, "orange")
// });
// medButton.addEventListener("click", function() {
//   changeButton(medButton, "purple")
// });
// studyButton.addEventListener("click", function() {
//   changeButton(studyButton, "green")
// });
//
//

logActivityButton.addEventListener("click", logActivity);
newFormButton.addEventListener("click", createNewForm)
submitButton.addEventListener("click", changeForm);
timerStart.addEventListener("click", startCountdown);

function changeButton(button, color){
  event.preventDefault();
  if (button.classList.contains(`change-${color}`)) {
     button.classList.remove(`change-${color}`);
     timerStart.classList.remove(`${color}-border`);
} else {
    button.classList.add(`change-${color}`);
    timerStart.classList.add(`${color}-border`);
    if (color === "green"){
      medButton.classList.remove("change-purple");
      exeButton.classList.remove("change-orange");
      timerStart.classList.remove("purple-border", "orange-border");
    } else if (color === "orange") {
      studyButton.classList.remove("change-green");
      medButton.classList.remove("change-purple");
        timerStart.classList.remove("purple-border", "green-border");
    }else if (color === "purple") {
      studyButton.classList.remove("change-green");
      exeButton.classList.remove("change-orange");
        timerStart.classList.remove("green-border", "orange-border");
    }
  }
}

function changeForm() {
  if (minInput.value.length === 0) {
    minInput.value = 0;
  }
  if (secInput.value.length === 0) {
    secInput.value = 00;
  }
  if (accomplishInput.value === "") {
    event.preventDefault(submitButton);
    errorDescription.classList.remove("hide-item");
  } else {
    event.preventDefault(submitButton);
    inputForm.classList.add("hide-item");
    timerForm.classList.remove("hide-item");
    newActivity.classList.add("hide-item");
    currentActivity.classList.remove("hide-item");
    toAccomplish.innerText = accomplishInput.value;
    funcSec.innerHTML = secInput.value;
    funcMin.innerHTML = minInput.value;
    if (secInput.value < 10) {
      funcSec.innerHTML = "0" + funcSec.innerHTML;
    }
    if (minInput.value < 10) {
      funcMin.innerHTML = "0" + funcMin.innerHTML;
    }
  }
}

function startCountdown() {
  const countByOne = setInterval(timer, 1000);
  let seconds = secInput.value;
  let minutes = minInput.value;

  if (seconds < 10) {
  seconds = "0" + seconds;
  }
  if(minutes === undefined){
    minutes = "00"
  }
  if (minutes < 10) {
  minutes = "0" + minutes;
  }

  function timer() {
    funcMin.innerHTML = minutes;
    funcSec.innerHTML = seconds;
    seconds = seconds - 1;
    if (minutes > 0 && seconds === -1) {
      minutes --;
      seconds = 59;
    }
    if (minutes < 1 && seconds === -1) {
      minutes = "0";
      seconds = "0";
      timerStart.innerHTML = "COMPLETE!";
      logActivityButton.classList.remove("hidden-log-button");
      clearInterval(countByOne);
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  }
}

function logActivity () {
  let card, color;
  event.preventDefault();
  if (noLogMessage.classList.contains("no-log-message")) {
    noLogMessage.classList.add("hide-item");
  }
  if(timerStart.classList.contains("green-border")){
    card = "Study";
    color = "green";
  }
  if(timerStart.classList.contains("purple-border")){
    card = "Meditate";
      let color = "purple";
  }
  if(timerStart.classList.contains("orange-border")){
    card = "Exercise";
    color = "orange";
  }
  addCard(card,color);
  timerForm.classList.add("hide-item");
  currentActivity.classList.add("hide-item");
  completedActivity.classList.remove("hide-item");
  newForm.classList.remove("hide-item");
}

function addCard(card, color) {
  cardContainer.innerHTML += `
  <div class="logged-card">
    <div class="card-flex">
      <h3 class="card-margins">${card}</h3>
      <p class="card-margins">${minInput.value} MIN ${secInput.value} SECONDS</p>
      <p class="card-margins">${accomplishInput.value}</p>
    </div>
    <div class="color-bar ${color}-bar"></div>
  </div>`;
}

function createNewForm(color) {
  // add helper function
  event.preventDefault();
  completedActivity.classList.add("hide-item");
  exeButton.classList.remove("change-orange");
  inputForm.classList.remove("hide-item");
  inputForm.reset();
  newActivity.classList.remove("hide-item");
  newForm.classList.add("hide-item");
  medButton.classList.remove("change-purple");
  studyButton.classList.remove("change-green");
  timerStart.classList.remove("green-border", "purple-border", "orange-border");
  timerStart.innerHTML = "START";
  logActivityButton.classList.add("hidden-log-button");
}
