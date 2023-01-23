function validateForm(){
    let uid = document.MenteeForm.user_name.value;
    let validUserName = validateUserName(uid);


    document.getElementById("demo").innerHTML = uid;
}

function validateUserName(UserName){
    

}