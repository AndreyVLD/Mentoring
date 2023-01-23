
function validateForm(){
    let uid = document.MenteeForm.user_name.value;
    let validUserName = validateUserName(uid);


}

function validateUserName(username){
    const regex = new RegExp('');
    if(username=="" || ! regex.test(username)){
        document.getElementById("unError").classList.remove('correct');
        document.getElementById("unError").classList.add('error');
        document.getElementById("unError").innerHTML = "The user name is required!";
        return false;
    }
    else{
        document.getElementById("unError").classList.remove('error');
        document.getElementById("unError").classList.add('correct');
        document.getElementById("unError").innerHTML = "Everything looks great!";
        return true;
    }

}