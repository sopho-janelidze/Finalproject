'use strict'

 export function loginfo(){
    
    let form = document.getElementById ('login');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let box = document.getElementById('checkbox');
        let emailinfo = document.getElementById('email').value
        let usernameinfo = document.getElementById ('userfield').value

        if (box.checked){ 
            Cookies.set('emailsaved' , emailinfo);

        } else {
            Cookies.remove('emailsaved');
        }

        if(box.checked) {
           Cookies.set('usernamesaved', usernameinfo);
        } else {
           Cookies.remove('usernamesaved');
}

    });

    let logginginfo = Cookies.get('emailsaved');

    if (logginginfo) {

        document.getElementById('email').value = logginginfo;
        document.getElementById('checkbox').checked =true;


    }

    let logginginfo2 = Cookies.get ('usernamesaved');

    if (logginginfo2) {
        document.getElementById ('userfield').value =logginginfo2;
        document.getElementById('checkbox').checked =true;

    }

}

document.addEventListener("DOMContentLoaded", function() {
    let cookiesNotification = document.getElementById('cookies');
    let acceptBtn = document.getElementById('Accept');
    let declineBtn = document.getElementById('Decline');

    acceptBtn.addEventListener('click', function() {
        cookiesNotification.style.display = 'none';
    });

    declineBtn.addEventListener('click', function() {
        cookiesNotification.style.display = 'none';
    });
});