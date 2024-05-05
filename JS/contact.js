'use strict'

import { form } from './validation.js';

form();

import { passwordvalidation } from './validation.js';

passwordvalidation();

import {emailvalidation} from './validation.js';

emailvalidation();

import { showpassword } from './validation.js';

showpassword ();


import { scrollTo } from './scroll.js';

scrollTo();




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
        ulEl.appendChild(li);
      } else {
        filteredSlips.forEach(element => {
          let li = document.createElement('li');
          li.innerText = element.advice;
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
