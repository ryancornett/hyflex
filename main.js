'use strict';
import populateElements from './courses.js'
populateElements();
let currentYear = new Date().getFullYear();
let credit = document.getElementById('bottom-credit');
credit.innerHTML = "Copyright &copy; " + currentYear + " Laurel County Adult Education & Literacy Council. All rights reserved.";

const topButton = document.getElementById('to-top');

function displayTopButton() {
    if (window.scrollY >= 650) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
}

document.addEventListener('scroll', displayTopButton);