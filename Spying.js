
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

    let skills = 0;
    let c_name = 0;
    let job_category = 0;

    skills = document.getElementById("skills").value.length;
    c_name = document.getElementById("comapny_name").value.length;
    job_category = document.getElementById("job_category").job_category.value.length;

    const username = document.user_name.value;
    const password1 = document.password.value;
    const password2 = document.confirm_password.value;
    const address = document.adress.value;
    const zip = document.zipcode.value;
    const email1 = document.email.value;
    const email2 = document.confirm_email.value;
    const language = document.Language.value;
    const bio = document.bio.value;    

    const totalCharacters = username.length + password1.length + password2.length +
                        address.length + zip.length + email1.length + email2.length +
                        language.length + bio.length + skills + c_name + job_category;
    
    const end = new Date().getTime();
    const totalTime = (end - start) / 1000;

    const minutes = totalTime / 60;
    const secs = totalTime % 60;

    document.getElementById("timeOnPage").innerHTML = Math.floor(minutes) + " minutes, " + Math.floor(secs) + " seconds";
    document.getElementById("charOnPage").innerHTML = totalCharacters;
}