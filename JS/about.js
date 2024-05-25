'use strict'

let accordion = document.querySelectorAll('.container');

accordion.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle("active");
    });
});

