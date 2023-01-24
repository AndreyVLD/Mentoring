function validateForm(){
    let uid = document.MenteeForm.user_name.value;
    let nam = document.MenteeForm.name.value;
    let pas = document.MenteeForm.password.value; let confPass = document.MenteeForm.confirm_password.value;
    let adr = document.MenteeForm.adress.value;
    let cutr = document.MenteeForm.country.value;
    let zip = document.MenteeForm.zipcode.value;
    let mail = document.MenteeForm.email.value; let cmail = document.MenteeForm.confirm_email.value;
    let sex = document.MenteeForm.sex_option.value; 
    let lang = document.MenteeForm.Language.value;
    let bio = document.MenteeForm.bio.value;

    let validUserName = validateUserName(uid,false);
    let validPassword =  validatePassword(pas, confPass,false);
    let validName = validateName(nam,false);
    let validAddres = validateAddres(adr,false);
    let validCountry = validateCountry(cutr,false);
    let validZip = validateZip(zip,false);
    let validEmail = validateEmail(mail,cmail,false);
    let validSex = validateSex(sex,false);
    let validLanguage = validateLanguage(lang,false);
    let validBio =  validateBio(bio,false);

    if(validUserName && validPassword && validName && validAddres && validCountry
        && validZip && validEmail && validSex && validLanguage && validBio )
        {
            alert("Your input stated by the alert:" 
             + "\nUsername: " + uid
             + "\nPassword: " + pas
             +  "\nName: "+ nam
             + "\nCountry: " + cutr
             + "\nAddress: " + adr
             + "\nZIP Code: " +zip
             + "\nEmail: " + mail
             + "\nSex: " + sex
             + "\nLanguage: " + lang
             + "\nBio: " + bio);
        }
}

function validateFormMentor(){
    let uid = document.MentorForm.user_name.value;
    let nam = document.MentorForm.name.value;
    let pas = document.MentorForm.password.value; let confPass = document.MentorForm.confirm_password.value;
    let adr = document.MentorForm.adress.value;
    let cutr = document.MentorForm.country.value;
    let zip = document.MentorForm.zipcode.value;
    let mail = document.MentorForm.email.value; let cmail = document.MentorForm.confirm_email.value;
    let sex = document.MentorForm.sex_option.value; 
    let lang = document.MentorForm.Language.value;
    let bio = document.MentorForm.bio.value;
    let jbc = document.MentorForm.job_category.value;
    let skl = document.MentorForm.skills.value;
    let cmp = document.MentorForm.company_name.value;

    let validUserName = validateUserName(uid,true);
    let validPassword =  validatePassword(pas, confPass,true);
    let validName = validateName(nam,true);
    let validAddres = validateAddres(adr,true);
    let validCountry = validateCountry(cutr,true);
    let validZip = validateZip(zip,true);
    let validEmail = validateEmail(mail,cmail,true);
    let validSex = validateSex(sex,true);
    let validLanguage = validateLanguage(lang,true);
    let validBio =  validateBio(bio,true);
    let validJob = validateJob(jbc,true);
    let validSkill = validateSkill(skl,true);
    let validCompany = validateComapny(cmp,true);

    if(validUserName && validPassword && validName && validAddres && validCountry
        && validZip && validEmail && validSex && validLanguage && validBio 
        && validJob && validSkill && validCompany)
        {
            alert("Your input stated by the alert:" 
             + "\nUsername: " + uid
             + "\nPassword: " + pas
             +  "\nName: "+ nam
             + "\nCountry: " + cutr
             + "\nAddress: " + adr
             + "\nZIP Code: " +zip
             + "\nEmail: " + mail
             + "\nSex: " + sex
             + "\nLanguage: " + lang
             + "\nBio: " + bio
             + "\nJob: " + jbc
             + "\nSkills: " + skl
             + "\nCompany: " + cmp);
        }
}

function validateComapny(company,isMentor){
    if(company == ""){
        incorrectInput("companyError","Company field is required!", isMentor)
        return false;
    }else{
        correctInput("companyError",isMentor);
        return true;
    }
}

function validateSkill(skills,isMentor){
    let format = true;                                      // /^[A-Za-z,]*$/
    for(let i = 0; i < skills.length; i++)
        if(skills.charAt(i)!= ',' && (skills.charAt(i)<'A' || skills.charAt(i)>'z' || (skills.charAt(i) > 'Z' && skills. charAt(i)<'a' ))){
            format = false;
        }

    if(skills == ""){
        hide("skillError",isMentor);
        return true;
    }else if(!(format)){
        unhide("skillError",isMentor);
        incorrectInput("skillError","The skills must be separated by commas with no space!",isMentor);
        return false;
    }else{
        unhide("skillError",isMentor);
        correctInput("skillError",isMentor);
        return true;
    }
}

function validateJob(job, isMentor){
    let format = true;                                        // /^[A-Za-z]*$/;

    for(let i = 0; i<job.length; i++)
        if(job.charAt(i) < 'A' || job.charAt(i) > 'z' || (job.charAt(i) > 'Z' && job. charAt(i)<'a' ) )
            format = false;

    if(job == ""){
        incorrectInput("jobError","Job field is required!",isMentor);
        return false;
    }else if(!(format)){
        incorrectInput("jobError","Job may only contain letters!",isMentor);
        return false;
    }{
        correctInput("jobError",isMentor);
        return true;
    }
}

function validateBio(bio,isMentor){
    if(bio == ""){
        hide("bioError",isMentor);
    }else{
        unhide("bioError",isMentor);
    }
    correctInput("bioError",isMentor);
    return true;
}


function validateLanguage(language, isMentor){
    let format = true;                                   // /^[A-Za-z]*$/;

    for(let i = 0; i<language.length; i++)
        if(language.charAt(i) < 'A' || language.charAt(i) > 'z' || (language.charAt(i) > 'Z' && language. charAt(i)<'a' ))
            format = false;

    if(language == ""){
        incorrectInput("languageError","Language is required!",isMentor);
        return false;
    }else if(!(format)){
        incorrectInput("languageError","Language may only contain letters!",isMentor);
        return false;
    }else{
        correctInput("languageError",isMentor);
        return true;
    }
}

function validateSex(sex, isMentor){
    if(sex !=  "Female" && sex != "Male"){
        incorrectInput("sexError","You must pick an option!",isMentor);
        return false;
    }else{
        correctInput("sexError",isMentor);
        return true;
    }
}

function validateEmail(email, confirmEmail, isMentor){
    let format = true;                             // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let allowed = "QWERTYUIOPASDFGHJKLZXCVVBNMqwerryuiopasdfghjklmnbvcxz1234567890._-@";
    let points = 0;
    let ats = 0;
    for(let i = 0; i < email.length; i++){
        if(email.charAt(i)=='@')
            ats++;

        if(email.charAt(i)=='.')
            points++;

        if(!(allowed.includes(email.charAt(i)))){
            format = false;
            break;
        }
    }

    let indexP = email.indexOf(".");
    let indexAt = email.indexOf("@");

    if(indexAt ==-1 || indexP ==-1 || indexAt > indexP 
        || indexP-indexAt <= 1 || ats!=1 || points !=1 
        || indexAt == 0 || indexP >= email.length - 2){
            format = false;
        }

    if(email == ""){
        hide("confEmailError",isMentor);
        incorrectInput("emailError","Email is required!",isMentor);
        return false;
    }else if(!(format)){
        hide("confEmailError",isMentor);
        incorrectInput("emailError","This is not a valid Email!",isMentor);
        return false;
    }else if(email != confirmEmail){
        incorrectInput("confEmailError","The Emails do not match!",isMentor);
        unhide("confEmailError",isMentor);
        correctInput("emailError",isMentor);
        return false;
    }else{
        unhide("confEmailError",isMentor);
        correctInput("emailError",isMentor);
        correctInput("confEmailError",isMentor);
        return true;
    }
}

function validateZip(zip, isMentor){
    let format = true;                                  // /^[0-9]{4}[A-Za-z]{2}$/;

    if(zip.length != 6)
        format = false;
    else{
        for(let i = 0; i < 4 ; i++)
            if(zip.charAt(i)<'0' || zip.charAt(i)>'9')
                format = false;
        for(let i = 4; i<=5; i++)
            if(zip.charAt(i) < 'A' || zip.charAt(i) > 'z' || (zip.charAt(i) > 'Z' && zip. charAt(i)<'a' ) )
                format = false;
    }
    
    if(zip==""){
        return true;
    }else if(!(format)){
        incorrectInput("zipError", "ZIP Code has four numbers followed by two letters!",isMentor);
        return false;
    }else{
        correctInput("zipError",isMentor);
        return true;
    }
} 


function validateCountry(country, isMentor){
    let format = true;                                  // /^[A-Za-z]*$/;

    for(let i = 0; i < country.length; i++)
        if(country.charAt(i) < 'A' || country.charAt(i) > 'z' || (country.charAt(i) > 'Z' && country. charAt(i)<'a' ) )
            format = false;

    if(country == ""){
        incorrectInput("countryError","Country is required!",isMentor);
        return false;
    }
    else if(!(format)){
        incorrectInput("countryError","Country may only contain alphabet!",isMentor);
        return false;
    }else{
        correctInput("countryError",isMentor);
        return true;
    }
}


function validateAddres(addres, isMentor){
    if(addres==""){
        hide("addressError",isMentor);
    }else{
        unhide("addressError",isMentor);
    }
    correctInput("addressError",isMentor);
    return true;
}

function validateName(name, isMentor){
    let format = true;                                  //^[A-Za-z]*$/;

    for(let i = 0; i < name.length; i++)
        if(name.charAt(i) < 'A' || name.charAt(i) > 'z' || (name.charAt(i) > 'Z' && name. charAt(i)<'a' ) )
            format = false;

    if(name == ""){
        incorrectInput("nameError","Name is required!",isMentor);
        return false;
    }else if(!(format)){
        incorrectInput("nameError","Name must contain only alphabet!",isMentor)
        return false;
    }else{
        correctInput("nameError",isMentor);
        return true;
    }
}

function validatePassword(password, confirmPassword, isMentor){
    let format = true;                                      //  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    let size = true;
    let upr=false; let lwr=false; let sp=false; let num=false;

    if(password.length < 12)
        size = false;
    else{
        for(let i = 0; i<password.length; i++){
            if(password.charAt(i) >= 'A' && password.charAt(i) <= 'Z')
                upr = true;
            else
                if(password.charAt(i) >= 'a' && password.charAt(i) <= 'z')
                    lwr = true;
                else
                    if(password.charAt(i) >= '0' && password.charAt(i) <='9')
                        num = true;
                    else
                        if(password.charAt(i) >= '!')
                            sp=true;
        }
    }
    format = sp && num && lwr && upr;

    if(password==""){
        hide("passConfError",isMentor);
        incorrectInput("passError","Password is required!",isMentor);
        return false;

    }else if(! size ){
        hide("passConfError",isMentor);
        incorrectInput("passError","Password must be at least 12 characters long!",isMentor);
        return false;

    }
    else if(! format){

        incorrectInput("passError","Password must containt at least: 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character!",isMentor);
        hide("passConfError",isMentor);
        return false;

    }else if(password != confirmPassword){
        unhide("passConfError",isMentor);
        correctInput("passError",isMentor);
        incorrectInput("passConfError","Passwords do not match!",isMentor);
        return false;

    }else{
        unhide("passConfError",isMentor);
        correctInput("passError",isMentor);
        correctInput("passConfError",isMentor);
        return true;

    }
}

function validateUserName(username, isMentor){
    let size = /^\S{5,12}$/;
    let first = /^[A-Z]/;
    let last  = /[^A-Za-z]{1}$/;
    if(username==""){
        incorrectInput("unError","Username is required!",isMentor);
        return false;
    }
    else if(! size.test(username)){
        incorrectInput("unError","Username must be of length 5 to 12!",isMentor);
        return false;

    }else if(! (first.test(username) && last.test(username))){
        incorrectInput("unError","Username must start with capital letter and end with a number or special character!",isMentor);
        return false;
    }
    else{
        correctInput("unError",isMentor);
        return true;
    }

}

function correctInput(divN, isMentor){
    if(isMentor == true){
        divN =  divN.concat("M");
    }
    document.getElementById(divN).innerHTML = "Looks good!";
    document.getElementById(divN).classList.remove('error');
    document.getElementById(divN).classList.add('correct');
    
}

function incorrectInput(divN, message, isMentor){
    if(isMentor == true){
       divN =  divN.concat("M");
    }
    document.getElementById(divN).innerHTML = message;
    document.getElementById(divN).classList.remove('correct');
    document.getElementById(divN).classList.add('error');
}

function hide(divN, isMentor){
    if(isMentor == true){
        divN =  divN.concat("M");
    }
    document.getElementById(divN).classList.remove('unhide');
    document.getElementById(divN).classList.add('hide');
}

function unhide(divN, isMentor){
    if(isMentor == true){
        divN =  divN.concat("M");
    }
    document.getElementById(divN).classList.add('unhide');
    document.getElementById(divN).classList.remove('hide');
}
