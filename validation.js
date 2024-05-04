'use strict'

  export function form() {
    const form = document.getElementById ('login'); 

  form.addEventListener ('submit', function(e) {
    e.preventDefault();

    let errors ={};

    let username = document.getElementById ('userfield').value;

    if (username === '') {
        errors.username = 'Username Field can not be Empty';

    }
     
    let passw1 = document.getElementById ('passwfield').value;
    let passw2 = document.getElementById ('passw2field').value;

    if (passw1 === "") {
        errors.passw = "Password Field can not be Empty";
    }

    if (passw1!= passw2){
        errors.passw2 = "Password Do not Match";
    }

    let email = document.getElementById ('email').value

    if (email === "") {
        errors.email = "Email can not Empty"
    }

    let gender = false; 

    this.querySelectorAll ('.radio-gender').forEach (item =>{
        if (item.checked) {
            gender=true;
        }
    });

    if (gender === false){
        errors.gender = "Select your Gender";
    }
    let agree= document.getElementById ('checkadd');
    if (!agree.checked){
        errors.agree = "You must agree to Our Terms and Conditions"
        
    }
 

    this.querySelectorAll ('.error-text').forEach((e)=> {
        e.innerHTML = " "
        
    });


     for (let item in errors) {
        let errorElement = document.getElementById ('error-' + item);

     if (errorElement) {
        errorElement.innerText = errors[item];
     }

     }

     if (Object.keys (errors).length === 0 ){
      this.submit();
  }

});


};

export function showpassword() {
    let icon = document.getElementById ('show');
    let input = document.getElementById ('passwfield');

    icon.addEventListener ('click', function() {

        if (input.type === 'password' ) {
            input.setAttribute ('type', 'text');
            icon.classList.remove("fa-eye")
            icon.classList.add("fa-eye-slash")
        } else {
             input.setAttribute ('type', 'password')
             icon.classList.remove ("fa-eye-slash")
             icon.classList.add ("fa-eye")
            }
    })

}



 export function passwordvalidation () {
    let password = document.getElementById ('passwfield');

    let passwordvalue = document.getElementById ('passwfield').value

    let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

    let passwordError= document.getElementById('error-passw');
    if (passwordvalue.match(regex)){
        passwordError.innerText = 'Your password is valid';
        passwordError.style.color ='green';
    } else{ 
        passwordError.innerText = 'Your password is invalid';
        passwordError.style.color ='red';
    }

     if (passwordvalue === "") {
        passwordError.innerText = "";
     }

     password.addEventListener('keyup',passwordvalidation);
}

 export function emailvalidation() {
    let emailinput =document.getElementById('email');

    let email =  document.getElementById('email').value;

    let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let emailError = document.getElementById ('error-email');

    if ( email.match(emailPattern) ) {
        emailError.innerText = 'Your mail is Valid';
        emailError.style.color = 'green';
    } else {
        emailError.innerText = 'Your mail is inValid';
        
    }

    if (email === "") {
        emailError.innerText = "";
     }
  emailinput.addEventListener ('keydown',emailvalidation );
 }

