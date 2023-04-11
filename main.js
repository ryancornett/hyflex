'use strict';
import { mathCourses, englishCourses, otherCourses } from './courses.js'

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
let waysContainer = document.querySelector('.ways-container');

let courseDiv = document.createElement("div");
courseDiv.setAttribute("class", "course");

function generateSubjectDiv(subject, container) {
    courseDiv.innerHTML = "";
    for (let i = 0; i < subject.length; i++) {
        let courseName = document.createElement("h3");
        courseName.setAttribute("class", "course-name");
        courseName.innerText = subject[i].name;
        courseDiv.appendChild(courseName);
        let infoDiv = document.createElement('div');
        infoDiv.setAttribute('class', 'course-info');
        courseDiv.appendChild(infoDiv);
        let courseDays = document.createElement('h4');
        courseDays.setAttribute('class', 'days');
        courseDays.innerText = subject[i].days;
        infoDiv.appendChild(courseDays);
        let courseTime = document.createElement('h4');
        courseTime.setAttribute('class', 'time');
        courseTime.innerText = subject[i].time;
        infoDiv.appendChild(courseTime);
        let linksDiv = document.createElement('div');
        linksDiv.setAttribute('class', 'course-links');
        courseDiv.appendChild(linksDiv);
        let syllabusLink = document.createElement('p');
        syllabusLink.setAttribute('class', 'syllabus');
        syllabusLink.innerHTML = `<a href = "${subject[i].syllabus}">Course Syllabus</a>`;
        linksDiv.appendChild(syllabusLink);
        let zoomLink = document.createElement('p');
        zoomLink.setAttribute('class', 'zoom');
        zoomLink.innerHTML = `<a href = "${subject[i].zoom}">Zoom Meeting Link</a>`;
        linksDiv.appendChild(zoomLink);
        let description = document.createElement('span');
        description.setAttribute('class', 'description');
        description.textContent = subject[i].description;
        courseDiv.appendChild(description);
        let profileDiv = document.createElement('div');
        profileDiv.setAttribute('class', 'profile');
        courseDiv.appendChild(profileDiv);
        let picture = document.createElement('img');
        picture.setAttribute('src', subject[i].picture);
        picture.setAttribute('class', 'picture');
        picture.setAttribute('alt', subject[i].instructor);
        profileDiv.appendChild(picture);
        let instructor = document.createElement('h4');
        instructor.setAttribute('class', 'instructor');
        instructor.textContent = subject[i].instructor;
        profileDiv.appendChild(instructor);
        let email = document.createElement('p');
        email.setAttribute('class', 'email');
        email.textContent = subject[i].email;
        profileDiv.appendChild(email);
        let phone = document.createElement('p');
        phone.setAttribute('class', 'phone');
        phone.textContent = subject[i].phone;
        profileDiv.appendChild(phone);
        container.appendChild(courseDiv);
}};

const MATH_MODAL = document.getElementById('math-modal');
const MATH_BUTTON = document.getElementById('open-math');
MATH_BUTTON.addEventListener('click', () => {
generateSubjectDiv(mathCourses, mathContainer);
MATH_MODAL.showModal();
console.log('click');
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
generateSubjectDiv(englishCourses, rlaContainer);
RLA_MODAL.showModal();
console.log('click');
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
generateSubjectDiv(otherCourses, otherContainer);
OTHER_MODAL.showModal();
console.log('click');
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

let currentYear = new Date().getFullYear();
let credit = document.getElementById('bottom-credit');
credit.innerHTML = "Copyright &copy; " + currentYear + " Laurel County Adult Education & Literacy Council. All rights reserved.";