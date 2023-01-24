
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

    const username = document.menteeForm.name.value;
    const password1 = document.menteeForm.password.value;
    const password2 = document.menteeForm.confirm_password.value;
    const address = document.menteeForm.address.value;
    const zip = document.menteeForm.zipcode.value;
    const email1 = document.menteeForm.email.value;
    const email2 = document.menteeForm.confirm_email.value;
    const language = document.menteeForm.Language.value;
    const bio = document.menteeForm.bio.value;    

    const totalCharacters = username.length + password1.length + password2.length +
                        address.length + zip.length + email1.length + email2.length +
                        language.length + bio.length;
    
    const end = new Date().getTime();
    const totalTime = (end - start) / 1000;

    const minutes = totalTime / 60;
    const secs = totalTime % 60;

    document.getElementById("timeOnPage").innerHTML = Math.floor(minutes) + " minutes, " + Math.floor(secs) + " seconds";
}