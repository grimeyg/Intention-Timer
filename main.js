var studyButton = document.querySelector("#study");
var medButton = document.querySelector("#meditate");
var exeButton = document.querySelector("#exercise");
// var submitForm = document.querySelector("#submit-form");
var time


studyButton.addEventListener("click", changeStudy) ;
medButton.addEventListener("click", changeMeditate);
exeButton.addEventListener("click", changeExercise);


function changeStudy(){
event.preventDefault(studyButton);
if(studyButton.classList.contains("change-green")){
   studyButton.classList.remove("change-green");
} else{
  studyButton.classList.add("change-green");
}
medButton.classList.remove("change-purple");
exeButton.classList.remove("change-orange");
}

function changeMeditate(){
event.preventDefault(medButton);
if(medButton.classList.contains("change-purple")){
   medButton.classList.remove("change-purple")
} else{
  medButton.classList.add("change-purple");
}
studyButton.classList.remove("change-green");
exeButton.classList.remove("change-orange");
}

function changeExercise(){
event.preventDefault(exeButton);
if(exeButton.classList.contains("change-orange")){
   exeButton.classList.remove("change-orange")
} else{
  exeButton.classList.add("change-orange");
}
studyButton.classList.remove("change-green");
medButton.classList.remove("change-purple");
}
