const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("number-error");
const mailError = document.getElementById("email-error");
const msgError = document.getElementById("message-error");
const submitError = document.getElementById("Submit-error");

function validatename(){

    let name =  document.getElementById("name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required"
        return false ;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "write full name"
        return false 
    }
    nameError.innerHTML = '<i class="ri-checkbox-circle-fill one" id="tick"></i>'
    return true;
    
}
function validatephone(){

    let phone =  document.getElementById("number").value;
    if(phone.length == 0 ){
        phoneError.innerHTML ="phone is required";
        return false;
    }
    if (!phone.match(/^[0-9+-]+$/)) {
        phoneError.innerHTML = "only digits please.";
        return false;
    }
    if(phone.length >= 10 && phone.length <=20){
    phoneError.innerHTML = '<i class="ri-checkbox-circle-fill one" id="tick"></i>'
    return true;    

    }
}

function validatemail(){

    let mail =  document.getElementById("mail").value;
    if(mail.length == 0 ){
        mailError.innerHTML = "email is required";
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
        mailError.innerHTML = "Email is required";
        return false;
    }
    mailError.innerHTML ='<i class="ri-checkbox-circle-fill one" id="tick"></i>';
    return true;
}

function validatetext(){

    let msg =  document.getElementById("message").value;
    let counter = 30;
    let minus = counter - msg.length;
    if(minus > 0 ){
        msgError.innerHTML = minus + " more character is required";
        return false;
    }
    msgError.innerHTML = '<i class="ri-checkbox-circle-fill one" id="tick"></i>';
    return true;
}

function validateform(){
    if(!validatename() || !validatephone() || !validatemail() || !validatetext()){
        submitError.style.display = "block";
       submitError.innerHTML = "Please fill in the required fields"
       setTimeout(function(){
        submitError.style.display = "none";
       },3000)
       return false ; 
    }
}