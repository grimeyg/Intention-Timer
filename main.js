var studyButton = document.querySelector("#study");
var medButton = document.querySelector("#meditate");
var exeButton = document.querySelector("#exercise");

studyButton.addEventListener("click", changeStudy) ;
// medButton.addEventListener("click",);
// exeButton.addEventListener("click",);

function changeStudy(){
  event.preventDefault(studyButton);
  studyButton.classList.add("change-green");
}
