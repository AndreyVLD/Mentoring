
let buttonHome = document.querySelector("body");                 // selecting the body as the place where we track we input from user
let CountButtonHomeClicks = 0;                                   // total button clicks 

buttonHome.addEventListener("click", function() {                // clicks on pages 
  CountButtonHomeClicks += 1;                                    // if we click we count
  document.getElementById("clicksOnPage").innerHTML = CountButtonHomeClicks;             // we show the value of the number of cliks
});

var start;                                                     // var for the starting time

document.addEventListener("DOMContentLoaded", () => {
    start = new Date().getTime();                             // once the page is loaded we intialise the time variable
});

var keyCounter = 0;                                           // counter for the pressed keys

buttonHome.addEventListener("keyup", function() {                       // if a key up is register
    keyCounter +=1 ;                                                    // we increment the counter
    document.getElementById("keysOnPage").innerHTML = keyCounter;       // and show the value  
})

function showDiv() { 
    document.getElementById("hiddenDiv").style.display = 'block';           // once this function  is called we show the hidden div

    let skills = 0;                                                         // number of chars entered for the skills field
    let c_name = 0;                                                         // number of chars entered for the company name field            
    let job_category = 0;                                                   // number of chars entered for the job category field                        
    let path;                                                               // path field so we can choose between menteeSignup or mentorSignup    

    if(document.title == "Mentor"){                                         // if the current document is the Mentor signup
                                                                            // we have 3 more fields that we need to take into acount
        skills = document.getElementById("skills").value.length;
        c_name = document.getElementById("comapny_name").value.length;
        job_category = document.getElementById("job_category").value.length;
        path = "mentorForm";                                                // we take the input from the mentorForm
    }else{
        path = "menteeForm";                                               // we take the input from the menteeForm
    }

    const username = document.getElementById(path).user_name.value;          // fields from the forms
    const password1 = document.getElementById(path).password.value;
    const password2 = document.getElementById(path).confirm_password.value;
    const address = document.getElementById(path).adress.value;
    const zip = document.getElementById(path).zipcode.value;
    const email1 = document.getElementById(path).email.value;
    const email2 = document.getElementById(path).confirm_email.value;
    const language = document.getElementById(path).Language.value;
    const bio = document.getElementById(path).bio.value;    

   const totalCharacters = username.length + password1.length + password2.length +                // we add the length from each field to deduce the number of entered chars
                     address.length + zip.length + email1.length + email2.length +
                     language.length + bio.length + skills + c_name + job_category;
    
    const end = new Date().getTime();                                                            // we take the end time
    const totalTime = (end - start) / 1000;                                                      // the amount of time on page is the difference between end and start tims

    const minutes = totalTime / 60;
    const secs = totalTime % 60;

    // displaying the values

    document.getElementById("timeOnPage").innerHTML = Math.floor(minutes) + " minutes, " + Math.floor(secs) + " seconds";
    document.getElementById("charOnPage").innerHTML = totalCharacters;
}