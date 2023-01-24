function validateForm(){
    let uid = document.MenteeForm.user_name.value;
    let nam = document.MenteeForm.name.value;
    let pas = document.MenteeForm.password.value; let confPass = document.MenteeForm.confirm_password.value;
    let adr = document.MenteeForm.adress.value;
    let cutr = document.MenteeForm.country.value;
    let zip = document.MenteeForm.zipcode.value;

    let validUserName = validateUserName(uid);
    let validPassword =  validatePassword(pas, confPass);
    let validName = validateName(nam);
    let validAddres = validateAddres(adr);
    let validCountry = validateCountry(cutr);
    let validZip = validateZip(zip);



}

function validateZip(zip){
    let format = /^[0-9]{4}[A-Za-z]{2}$/;
    if(zip==""){
        incorrectInput("zipError","ZIP Code is required!");
        return false;
    }else if(!(format.test(zip))){
        incorrectInput("zipError", "ZIP Code has four numbers followed by two letters!");
        return false;
    }else{
        correctInput("zipError");
        return true;
    }
} 


function validateCountry(country){
    let format = /^[A-Za-z]*$/;
    if(country == ""){
        incorrectInput("countryError","Country is required!");
        return false;
    }
    else if(!(format.test(country))){
        incorrectInput("countryError","Country may only contain alphabet!");
        return false;
    }else{
        correctInput("countryError");
        return true;
    }
}


function validateAddres(addres){
    if(addres==""){
        hide("addressError");
    }else{
        unhide("addressError");
    }
    correctInput("addressError");
    return true;
}

function validateName(name){
    let format = /^[A-Za-z]*$/;
    if(name == ""){
        incorrectInput("nameError","Name is required!");
        return false;
    }else if(!(format.test(name))){
        incorrectInput("nameError","Name must contain only alphabet!")
        return false;
    }else{
        correctInput("nameError");
        return true;
    }
}

function validatePassword(password, confirmPassword){
    let size = /^\S{12,}$/;
    let format = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    if(password==""){
        hide("passConfError");
        incorrectInput("passError","Password is required!");
        return false;

    }else if(! size.test(password)){
        hide("passConfError");
        incorrectInput("passError","Password must be at least 12 characters long!");
        return false;

    }
    else if(! (format.test(password))){

        incorrectInput("passError","Password must containt at least: 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character!");
        hide("passConfError");
        return false;

    }else if(password != confirmPassword){
        unhide("passConfError");
        correctInput("passError");
        incorrectInput("passConfError","Passwords do not match!");
        return false;

    }else{
        unhide("passConfError");
        correctInput("passError");
        correctInput("passConfError");
        return true;

    }
}

function validateUserName(username){
    let size = /^\S{5,12}$/;
    let first = /^[A-Z]/;
    let last  = /[^A-Za-z]{1}$/;
    if(username==""){
        incorrectInput("unError","Username is required!");
        return false;
    }
    else if(! size.test(username)){
        incorrectInput("unError","Username must be of length 5 to 12!");
        return false;

    }else if(! (first.test(username) && last.test(username))){
        incorrectInput("unError","Username must start with capital letter and end with a number or special character!");
        return false;
    }
    else{
        correctInput("unError");
        return true;
    }

}

function correctInput(divN){
    document.getElementById(divN).innerHTML = "Looks good!";
    document.getElementById(divN).classList.remove('error');
    document.getElementById(divN).classList.add('correct');
    
}

function incorrectInput(divN, message){
    document.getElementById(divN).innerHTML = message;
    document.getElementById(divN).classList.remove('correct');
    document.getElementById(divN).classList.add('error');
}

function hide(divN){
    document.getElementById(divN).classList.remove('unhide');
    document.getElementById(divN).classList.add('hide');
}

function unhide(divN){
    document.getElementById(divN).classList.add('unhide');
    document.getElementById(divN).classList.remove('hide');
}

