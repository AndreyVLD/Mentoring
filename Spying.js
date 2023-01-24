
let buttonHome = document.querySelector("body");
let CountButtonHomeClicks = 0;

buttonHome.addEventListener("click", function() {
  CountButtonHomeClicks += 1;
  document.getElementById("clicksOnPage").innerHTML = CountButtonHomeClicks;
});

var start;

document.addEventListener("DOMContentLoaded", () => {
    start = new Date().getTime();
});

var keyCounter = 0;

buttonHome.addEventListener("keyup", function() {
    keyCounter +=1 ;
    document.getElementById("keysOnPage").innerHTML = keyCounter;
})

function showDiv() {
    document.getElementById("hiddenDiv").style.display = 'block';
    
    const end = new Date().getTime();
    const totalTime = (end - start) / 1000;

    const minutes = totalTime / 60;
    const secs = totalTime % 60;

    document.getElementById("timeOnPage").innerHTML = Math.floor(minutes) + " minutes, " + Math.floor(secs) + " seconds";
}