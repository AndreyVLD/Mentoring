
function validateForm(){
    let uid = document.MenteeForm.user_name.value;
    let validUserName = validateUserName(uid);


}

function validateUserName(username){
    if(username==""){
        
        document.getElementById("unError").classList.add('error');
        document.getElementById("unError").innerHTML = "The user name is required!";
    }
    else{
        document.getElementById("unError").innerHTML = "Everything looks great!";
        document.getElementById("unError").classList.replace('error','correct');
    }

}