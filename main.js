var studyButton = document.querySelector(".study");
var medButton = document.querySelector(".meditate");
var exeButton = document.querySelector(".exercise");
var submitButton = document.querySelector(".submit-button");
var newActivity = document.querySelector(".new-activity");
var currentActivity = document.querySelector(".current-activity");
var inputForm = document.querySelector(".input-form");
var timerForm = document.querySelector(".timer-form");
var timerStart = document.querySelector(".activity-start");
var accomplishInput = document.querySelector(".accomplish");
var errorDescription = document.querySelector(".error-description");
var toAccomplish = document.querySelector(".to-accomplish");
// timer
var secInput = document.getElementById("second-input");
var minInput = document.getElementById("minute-input");
// timer
var funcSec = document.getElementById("sec");
// min edit
var funcMin = document.getElementById("min");


studyButton.addEventListener("click", changeStudy);
medButton.addEventListener("click", changeMeditate);
exeButton.addEventListener("click", changeExercise);
submitButton.addEventListener("click", changeForm);
timerStart.addEventListener("click", startCountdown);


function startCountdown(){
var seconds = secInput.value;
setInterval( countOne, 1000);
// document.getElementById("timer").innerHTML= count + " secs";
// min edit that doesnt work
var minutes = minInput.value;
// setInterval( (countOne, 1000)*60);



  function countOne(){
    funcSec.innerHTML = seconds;
    seconds = seconds - 1;
    funcMin.innerHTML = minutes;
    if(seconds === -1){
      minutes --;
      seconds = 59;
      console.log("hi");
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes === -1){
      minutes = "00"
      seconds = "00"
      return timerStart.innerHTML = "COMPLETE!"
      //run alert
    }

    // funcMin.innerHTML = minutes;
  }
}



function changeForm() {
  if(accomplishInput.value === "") {
    event.preventDefault(submitButton);
    errorDescription.classList.remove("hide-error");
  }else {
    event.preventDefault(submitButton);
    inputForm.classList.add("hide-form");
    timerForm.classList.remove("hidden-timer");
    newActivity.classList.add("hide-form");
    currentActivity.classList.remove("hidden-timer");
    toAccomplish.innerText = accomplishInput.value;
    funcSec.innerHTML = secInput.value;
    console.log(funcSec.innerHTML);
    funcMin.innerHTML = minInput.value;
    if(secInput.value < 10){
      funcSec.innerHTML = "0" + funcSec.innerHTML;
    }
}
}

// function getTime(){
//   funcSec.innerHTML = secInput.value;
// }





function changeStudy(){
  event.preventDefault(studyButton);
  if(studyButton.classList.contains("change-green")){
    studyButton.classList.remove("change-green");
    timerStart.classList.remove("green-border");
} else{
    studyButton.classList.add("change-green");
    timerStart.classList.add("green-border");
}

medButton.classList.remove("change-purple");
exeButton.classList.remove("change-orange");
}

function changeMeditate(){
  event.preventDefault(medButton);
  if(medButton.classList.contains("change-purple")){
    medButton.classList.remove("change-purple");
    timerStart.classList.remove("purple-border");
} else{
    medButton.classList.add("change-purple");
    timerStart.classList.add("purple-border");
}
studyButton.classList.remove("change-green");
exeButton.classList.remove("change-orange");
}

function changeExercise(){
  event.preventDefault(exeButton);
  if(exeButton.classList.contains("change-orange")){
    exeButton.classList.remove("change-orange");
    timerStart.classList.remove("orange-border");
} else{
    exeButton.classList.add("change-orange");
    timerStart.classList.add("orange-border");
}
studyButton.classList.remove("change-green");
medButton.classList.remove("change-purple");
}
