
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

    let path;

    if(document.contains("menteeForm"))
        path = "menteeForm"
    else
        if(document.contains("mentorForm")){
            path = "mentorForm";
            skills = document.path.skills.value.length;
            c_name = document.path.comapny_name.value.length;
            job_category = document.path.job_category.value.length;
        }

    const username = document.path.user_name.value;
    const password1 = document.path.password.value;
    const password2 = document.path.confirm_password.value;
    const address = document.path.adress.value;
    const zip = document.path.zipcode.value;
    const email1 = document.path.email.value;
    const email2 = document.path.confirm_email.value;
    const language = document.path.Language.value;
    const bio = document.path.bio.value;    

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