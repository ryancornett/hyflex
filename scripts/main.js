'use strict';
import { mathCourses, englishCourses, otherCourses, generateSubjectDiv } from './courses.js'

const topButton = document.getElementById('to-top');

function displayTopButton() {
    if (window.scrollY >= 650) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
}

document.addEventListener('scroll', displayTopButton);

let mathContainer = document.querySelector('.math-container');
let rlaContainer = document.querySelector('.rla-container');
let otherContainer = document.querySelector('.other-container');

let courseDiv = document.createElement("div");
courseDiv.setAttribute("class", "course");

const MATH_MODAL = document.getElementById('math-modal');
const MATH_BUTTON = document.getElementById('open-math');
MATH_BUTTON.addEventListener('click', () => {
generateSubjectDiv(mathCourses, mathContainer, courseDiv);
MATH_MODAL.showModal();
});

let closeMathButton = document.querySelectorAll('.close-math');
closeMathButton.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    MATH_MODAL.close();
  });
});

const RLA_MODAL = document.getElementById('rla-modal');
const RLA_BUTTON = document.getElementById('open-rla');
RLA_BUTTON.addEventListener('click', () => {
generateSubjectDiv(englishCourses, rlaContainer, courseDiv);
RLA_MODAL.showModal();
});

let closeRlaButton = document.querySelectorAll('.close-rla');
closeRlaButton.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    RLA_MODAL.close();
  });
});

const OTHER_MODAL = document.getElementById('other-modal');
const OTHER_BUTTON = document.getElementById('open-other');
OTHER_BUTTON.addEventListener('click', () => {
generateSubjectDiv(otherCourses, otherContainer, courseDiv);
OTHER_MODAL.showModal();
});

let closeOtherButton = document.querySelectorAll('.close-other');
closeOtherButton.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    OTHER_MODAL.close();
    WAYS_MODAL.close();
  });
});

const WAYS_MODAL = document.getElementById('ways-modal');
const WAYS_BUTTON = document.getElementById('open-ways');
WAYS_BUTTON.addEventListener('click', () => {
  WAYS_MODAL.showModal();
});

const glance = document.querySelector('.glance');
const glanceWrapper = document.querySelector('.glance-wrapper');
const openGlance = document.querySelector('.open-glance');
let glanceClosed = true;
openGlance.addEventListener('click', function() {
  if (glanceClosed === true) {
    openGlance.textContent = "-";
    glance.style.maxHeight = "2000px";
    glance.style.scale = "1 1";
    glanceWrapper.style.visibility = 'visible';
    glanceClosed = false;
  } else if (glanceClosed === false) {
    openGlance.textContent = "+";
    glance.style.maxHeight = "0px";
    glance.style.scale = "1 0";
    glanceWrapper.style.visibility = 'hidden';
    glanceClosed = true;
  }
})

if (window.innerWidth > 912) {
    glance.style.maxHeight = "2000px";
    glance.style.scale = "1 1";
    glanceWrapper.style.visibility = 'visible';
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

let floatUp = function(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          if(!entry.target.classList.contains('float-up')) {
              entry.target.classList.add('float-up');            
          }
          observer.unobserve(entry.target);
      }
  });
};

let observer = new IntersectionObserver(floatUp, options);

let targets = document.querySelectorAll('.observable');
targets.forEach(target => {
observer.observe(target);
});


let currentYear = new Date().getFullYear();
let credit = document.getElementById('bottom-credit');
credit.innerHTML = "Copyright &copy; " + currentYear + " Laurel County Adult Education & Literacy Council. All rights reserved.<br><br>Laurel County Literacy Council, Inc. is committed to the full implementation of the Americans with Disabilities Act (ADA).<br>It is the policy of LCLC to maximize the full inclusion and integration of people with disabilities in all aspects of employment and all programs, services and activities.<br><br>Website design by <a href='https://linktr.ee/ryancornett' style='color:white; font-weight: bold;'>Ryan Cornett</a>.";