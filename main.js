<<<<<<< HEAD
var studyButton = document.querySelector("#study");
var medButton = document.querySelector("#meditate");
var exeButton = document.querySelector("#exercise");
// var submitForm = document.querySelector("#submit-form");
var time
=======
var studyButton = document.querySelector(".study");
var medButton = document.querySelector(".meditate");
var exeButton = document.querySelector(".exercise");
var submitButton = document.querySelector(".submit-button");
var inputForm = document.querySelector(".inputForm")
var timerForm = document.querySelector(".timerForm")
var timerStart = document.querySelector(".activityStart")
>>>>>>> 3fa87e22ddd150fe48b71966b92fc1c9bd336dbf


studyButton.addEventListener("click", changeStudy);
medButton.addEventListener("click", changeMeditate);
exeButton.addEventListener("click", changeExercise);
submitButton.addEventListener("click", changeForm);



function changeForm() {
  event.preventDefault(submitButton);
  inputForm.classList.add("hideForm");
  timerForm.classList.remove("hiddenTimer");
 //  if(studyButton.classList.contains("change-green")){
 //   timerStart.classList.add("green-border");
 // }else if (medButton.classList.contains("change-purple"){
 //    timerStart.classList.border = "2px solid purple";
 //  }else if (exeButton.classList.contains("change-orange"){
 //    timerStart.classList.border = "2px solid orange";
 //  }else{null;
 //  }
}

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
   medButton.classList.remove("change-purple")
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
   exeButton.classList.remove("change-orange")
   timerStart.classList.remove("orange-border");
} else{
  exeButton.classList.add("change-orange");
  timerStart.classList.add("orange-border");
}
studyButton.classList.remove("change-green");
medButton.classList.remove("change-purple");
}
