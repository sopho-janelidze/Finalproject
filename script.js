'use strict';

//scroll

import { scrollTo } from './scroll.js';

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


import { form } from './validation.js';

form();

import { passwordvalidation } from './validation.js';

passwordvalidation();

import {emailvalidation} from './validation.js';

emailvalidation();

import { showpassword } from './validation.js';

showpassword ();

//cookies

import {loginfo} from './cookies.js';

loginfo();

//burger bar

document.addEventListener('DOMContentLoaded', function() {
  let nav = document.getElementById('navmenu');
  let burger = document.getElementById('burger');

  burger.addEventListener('click', function() {
      nav.classList.toggle('activenav');
  });
});