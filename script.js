'use strict';

//scroll

import { scrollTo } from './JS/scroll.js';

scrollTo();

//slide

new Splide( '.splide' ).mount();

 document.addEventListener( 'DOMContentLoaded', function () {
 new Splide( '#image-carousel', {
 heightRatio: 0.5,
} ).mount();
} );


//accordion

let accordion = document.querySelectorAll('.container');

accordion.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle("active");
    });
});

//get method+filter

axios.get('https://api.adviceslip.com/advice/search/love')
  .then(function (response) {
    console.log(response.data);

    let div = document.getElementById('advice');
    let ulEl = document.createElement('ul');
    let allSlips = response.data.slips;

    function filterSlips(input) {
      return allSlips.filter(function(element) {
        return element.advice.toLowerCase().includes(input.toLowerCase());
      });
    }

    function updateAdviceList(filteredSlips) {
      ulEl.innerHTML = '';

      if (filteredSlips.length === 0) {
        let li = document.createElement('li');
        li.innerText = "No matching advice found.";
        li.style.color= 'red';
        ulEl.appendChild(li);
      } else {
        filteredSlips.forEach(element => {
          let li = document.createElement('li');
          li.innerText = element.advice;
          li.style.fontSize= '18px';
          li.style.margin = '10px';
          ulEl.appendChild(li);
        });
      }
    }

    updateAdviceList(allSlips);

    div.appendChild(ulEl);

    let inputAdvice = document.getElementById('search');

    inputAdvice.addEventListener('keyup', function() {
      let userInput = this.value.trim();
      let filteredSlips = filterSlips(userInput);

      updateAdviceList(filteredSlips);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

  //validation


import { form } from './JS/validation.js';

form();

import { passwordvalidation } from './JS/validation.js';

passwordvalidation();

import {emailvalidation} from './JS/validation.js';

emailvalidation();

import { showpassword } from './JS/validation.js';

showpassword ();

//cookies

import {loginfo} from './JS/cookies.js';

loginfo();

//burger bar

let mainMenu = document.querySelector('.mainMenu');
let closeMenu = document.querySelector('.closeMenu');
let openMenu = document.querySelector('.openMenu');
let menu_items = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}