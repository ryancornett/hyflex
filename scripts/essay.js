let textarea = document.querySelector('textarea');

// *** Undo-redo functionality ***********************

class UndoRedojs {
    constructor(cooldown) {
        if (!cooldown || isNaN(cooldown) || cooldown <= 0) this.cooldown = 1
        else this.cooldown = cooldown
        this.stack = ['']
        this.currentIndex = 0
        this.cooldownState = 0
    }
    record(data, force) {
        if (this.currentIndex === this.stack.length - 1) { //checking for regular history updates
            if ((this.cooldownState >= this.cooldown || this.cooldownState === 0) && force !== true) { //history updates after a new cooldown
                this.stack.push(data)
                this.currentIndex++
                this.cooldownState = 1
            } else if (this.cooldownState < this.cooldown && force !== true) { //history updates during cooldown
                this.current(data)
                this.cooldownState++
            } else if (force === true) { //force to record without cooldown
                this.stack.push(data)
                this.currentIndex++
                this.cooldownState = this.cooldown
            }
        } else if (this.currentIndex < this.stack.length - 1) { //checking for history updates after undo
            if (force !== true) { //history updates after undo
                this.stack.length = this.currentIndex + 1
                this.stack.push(data)
                this.currentIndex++
                this.cooldownState = 1
            } else if (force === true) { ////force to record after undo 
                this.stack.length = this.currentIndex + 1
                this.stack.push(data)
                this.currentIndex++
                this.cooldownState = this.cooldown
            }
        }
    }
    undo(readOnly) {
        if (this.currentIndex > 0) {
            if (readOnly !== true) {
                this.currentIndex--
                return this.stack[this.currentIndex]
            } else {
                return this.stack[this.currentIndex - 1]
            }
        }
    }
    redo(readOnly) {
        if (this.currentIndex < this.stack.length - 1) {
            if (readOnly !== true) {
                this.currentIndex++
                return this.stack[this.currentIndex]
            } else {
                return this.stack[this.currentIndex + 1]
            }
        }
    }
    current(data) {
        if (data) this.stack[this.currentIndex] = data
        return this.stack[this.currentIndex]
    }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') { //node
    module.exports = UndoRedojs
} 
if (typeof window === 'object') { //browser
    window.UndoRedojs = UndoRedojs
}

const txtHistory = new window.UndoRedojs(5);
textarea.addEventListener('input', () => {
  // Check if the new textarea value is different
  if (txtHistory.current() !== textarea.value) {
    // Check for pastes, auto corrects..
    if ((textarea.value.length - txtHistory.current().length) > 1 || (textarea.value.length - txtHistory.current().length) < -1 || (textarea.value.length - txtHistory.current().length) === 0) {
      // Record the textarea value and force to bypass cooldown
      txtHistory.record(textarea.value, true);
    // Check for single key press, single character paste.
    } else {
      // Record the textarea value
      txtHistory.record(textarea.value);
    }
  }
});

function undoLast() {
  if (txtHistory.undo(true) !== undefined) {
  textarea.value = txtHistory.undo();
}};

function redoLast() {
  if (txtHistory.redo(true) !== undefined) {
  textarea.value = txtHistory.redo();
}};

let undoDiv = document.getElementById('undo');
let redoDiv = document.getElementById('redo');
undoDiv.addEventListener('click', undoLast);
redoDiv.addEventListener('click', redoLast);

//********************************

// Get the timer element
let timer = document.getElementById('timer');

// Set the initial time to 45 minutes (in seconds)
let timeLeft = 45 * 60;
let shouldDecrement = true;

const MODAL = document.getElementById('modal');
const OKAY = document.getElementById('okay');

// Update the timer every second
let countdown = setInterval(function() {
  // Calculate the minutes and seconds left
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  
  // Display the time left
  timer.innerHTML = "Time Remaining: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  // Decrement the time left only if the flag is true
  if (shouldDecrement) {
    timeLeft--;
  }
  let timeOnResume = 0;
  let alertText = document.getElementById('alert-text')
  OKAY.addEventListener('click', function() {
    timeLeft = timeOnResume;
    MODAL.style.visibility = 'hidden';
    MODAL.close();
    shouldDecrement = true;
  });
  
  if (timeLeft === (15 *60)) {
    shouldDecrement = false;
    timeOnResume = (14.95 *60);
    timer.classList.add('yellow-time');
    MODAL.showModal();
    MODAL.style.visibility = 'visible';
    alertText.textContent = 'You have less than 15 minutes remaining.';
  }

  if (timeLeft === (5 *60)) {
    shouldDecrement = false;
    timeOnResume = (4.95 *60);
    timer.classList.add('red-time');
    MODAL.showModal();
    MODAL.style.visibility = 'visible';
    alertText.textContent = 'You have less than 5 minutes remaining.';
  }

  // If the time is up, disable the textarea and stop the timer
  if (timeLeft <= 0) {
    clearInterval(countdown);
    timer.textContent = "Time remaining: 0:00";
    timer.classList.remove('red-time');
    timer.classList.remove('yellow-time');
    alert('Please use the onscreen tools to copy your essay. Paste it in an email field and send it to your instructor.');
    textarea.disabled = true;
  }
}, 1000);

// Disable cut, copy, and paste keyboard shortcuts
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && ['a', 'c', 'x', 'v', 'y', 'z'].indexOf(event.key.toLowerCase()) !== -1) {
    event.preventDefault();
  }
});

// Disable cut, copy, and paste context menu
document.addEventListener('contextmenu', function(event) {
  if (event.target.closest('#essay') || event.target.closest('.article')) {
    event.preventDefault();}
  });

let cutDiv = document.getElementById('cut');
let copyDiv = document.getElementById('copy');
let pasteDiv = document.getElementById('paste');

cutDiv.addEventListener('click', cutSelection);
copyDiv.addEventListener('click', copySelection);
pasteDiv.addEventListener('click', pasteSelection);

// Cut, copy, and paste functions
function cutSelection() {
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  let selectedText = textarea.value.substring(selectionStart, selectionEnd);
  textarea.setRangeText('', selectionStart, selectionEnd, 'end');
  textarea.setSelectionRange(selectionStart, selectionStart);
  navigator.clipboard.writeText(selectedText);
  textarea.focus();
}

function copySelection() {
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  let selectedText = textarea.value.substring(selectionStart, selectionEnd);
  navigator.clipboard.writeText(selectedText);
  textarea.focus();
}

function pasteSelection() {
  let selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  navigator.clipboard.readText().then(function(text) {
    textarea.setRangeText(text, selectionStart, selectionEnd, 'end');
    textarea.setSelectionRange(selectionStart + text.length, selectionStart + text.length);
    textarea.focus();
  });
}

// *********************** Populate prompt and article windows ****************

import { INSTRUCTIONS, ITEMS } from "./items.js";

let itemHolder = document.querySelector('.article');

let instructionsTab = document.getElementById('instructions');
let articleOneTab = document.getElementById('article-one');
let articleTwoTab = document.getElementById('article-two');
let essayId = document.querySelector('#essay-id');

var i = 0;
if (essayId.classList.contains('mobile-devices')) {
  i = 1; }
  else if (essayId.classList.contains('ai-tools')) {
    i = 2;}
  else {};
itemHolder.innerHTML = `${INSTRUCTIONS} <br> ${ITEMS[i].prompt}`;

instructionsTab.addEventListener('click', function() {
  instructionsTab.classList.add('active');
  articleOneTab.classList.remove('active');
  articleTwoTab.classList.remove('active');
  itemHolder.innerHTML = `${INSTRUCTIONS} <br> ${ITEMS[i].prompt}`;
  console.log("instruct");
})

articleOneTab.addEventListener('click', function() {
  articleOneTab.classList.add('active');
  instructionsTab.classList.remove('active');
  articleTwoTab.classList.remove('active');
  itemHolder.innerHTML = `<h3>${ITEMS[i].title_one}</h3><h4>by ${ITEMS[i].author_one}</h4>${ITEMS[i].article_one}`;
})

articleTwoTab.addEventListener('click', function() {
  articleTwoTab.classList.add('active');
  instructionsTab.classList.remove('active');
  articleOneTab.classList.remove('active');
  itemHolder.innerHTML = `<h3>${ITEMS[i].title_two}</h3><h4>by ${ITEMS[i].author_two}</h4>${ITEMS[i].article_two}`;
})