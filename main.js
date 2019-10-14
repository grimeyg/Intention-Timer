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
var min = document.getElementById("minute-input");
// timer
var funcSec = document.getElementById("sec");


studyButton.addEventListener("click", function (){
  changeButton(studyButton, "green")
});
medButton.addEventListener("click", function (){
  changeButton(medButton, "purple")
});
exeButton.addEventListener("click", function(){
  changeButton(exeButton, "orange")
});
submitButton.addEventListener("click", changeForm);
timerStart.addEventListener("click", startCountdown);


function changeButton(button, color){
  // console.log(event, button, color);
  event.preventDefault();
  if(button.classList.contains(`change-${color}`)){
     button.classList.remove(`change-${color}`);
     timerStart.classList.remove(`${color}-border`);
} else{
    button.classList.add(`change-${color}`);
    timerStart.classList.add(`${color}-border`);
  }
  if (color === "green"){
    medButton.classList.remove("change-purple");
    exeButton.classList.remove("change-orange");
  }else if(color === "orange"){
    studyButton.classList.remove("change-green");
    medButton.classList.remove("change-purple");
  }else if(color === "purple"){
    studyButton.classList.remove("change-green");
    exeButton.classList.remove("change-orange");
  }
}


function startCountdown(){
var seconds = secInput.value;
setInterval( countOne, 1000);
// document.getElementById("timer").innerHTML= count + " secs";
function countOne(){
 seconds = seconds - 1;
 funcSec.innerHTML = seconds;
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
  }
}




//
// function changeStudy(){
//   event.preventDefault(studyButton);
//   if(studyButton.classList.contains("change-green")){
//     studyButton.classList.remove("change-green");
//     timerStart.classList.remove("green-border");
// } else{
//     studyButton.classList.add("change-green");
//     timerStart.classList.add("green-border");
// }
//
// medButton.classList.remove("change-purple");
// exeButton.classList.remove("change-orange");
// }
//
// function changeMeditate(){
//   event.preventDefault(medButton);
//   if(medButton.classList.contains("change-purple")){
//     medButton.classList.remove("change-purple");
//     timerStart.classList.remove("purple-border");
// } else{
//     medButton.classList.add("change-purple");
//     timerStart.classList.add("purple-border");
// }
// studyButton.classList.remove("change-green");
// exeButton.classList.remove("change-orange");
// }
//
// function changeExercise(){
//   event.preventDefault(exeButton);
//   if(exeButton.classList.contains("change-orange")){
//     exeButton.classList.remove("change-orange");
//     timerStart.classList.remove("orange-border");
// } else{
//     exeButton.classList.add("change-orange");
//     timerStart.classList.add("orange-border");
// }
// studyButton.classList.remove("change-green");
// medButton.classList.remove("change-purple");
// }
