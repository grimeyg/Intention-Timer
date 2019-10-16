var timer = document.querySelector(".clock")
timer.html(counter);
// var timeLeft =

function keepTime(){
counter++
timer.html(counter);
}
setInterval(keepTime, 1000)
