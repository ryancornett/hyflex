"use strict";
import {
  mathCourses,
  rlaCourses,
  otherCourses,
  generateSubjectDiv,
} from "./courses.js";

const topButton = document.getElementById("to-top");

function displayTopButton() {
  if (window.scrollY >= 650) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
}

document.addEventListener("scroll", displayTopButton);

let currentYear = new Date().getFullYear();
let month = new Date().getMonth();
let season = "";
if (month <= 1 || month == 11) {
  season = "Winter";
} else if (month >= 2 && month <= 4) {
  season = "Spring";
} else if (month >= 5 && month <= 7) {
  season = "Summer";
} else {
  season = "Fall";
}

let findAClass = document.getElementById("find-a-class");
findAClass.textContent = `Find a ${season} ${currentYear} class`;

let mathContainer = document.querySelector(".math-container");
let rlaContainer = document.querySelector(".rla-container");
let otherContainer = document.querySelector(".other-container");

let courseDiv = document.createElement("div");
courseDiv.setAttribute("class", "course");

const MATH_MODAL = document.getElementById("math-modal");
const MATH_BUTTON = document.getElementById("open-math");
function displayMathModal() {
  generateSubjectDiv(mathCourses, mathContainer, courseDiv);
  MATH_MODAL.showModal();
}
MATH_BUTTON.addEventListener("click", () => { displayMathModal() });

const mathClickables = document.querySelectorAll(".cal-math");
mathClickables.forEach((clickable) => {
  clickable.addEventListener("click", () => {
    generateSubjectDiv(mathCourses, mathContainer, courseDiv);
    MATH_MODAL.showModal();
    document.getElementById(clickable.dataset.anchor).scrollIntoView();
  });
});

let closeMathButton = document.querySelectorAll(".close-math");
closeMathButton.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    MATH_MODAL.close();
  });
});

const RLA_MODAL = document.getElementById("rla-modal");
const RLA_BUTTON = document.getElementById("open-rla");
function displayRlaModal() {
  generateSubjectDiv(rlaCourses, rlaContainer, courseDiv);
  RLA_MODAL.showModal();
}
RLA_BUTTON.addEventListener("click", () => { displayRlaModal() });

const rlaClickables = document.querySelectorAll(".cal-rla");
rlaClickables.forEach((clickable) => {
  clickable.addEventListener("click", () => {
    generateSubjectDiv(rlaCourses, rlaContainer, courseDiv);
    RLA_MODAL.showModal();
    document.getElementById(clickable.dataset.anchor).scrollIntoView();
  });
});

let closeRlaButton = document.querySelectorAll(".close-rla");
closeRlaButton.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    RLA_MODAL.close();
  });
});

const OTHER_MODAL = document.getElementById("other-modal");
const OTHER_BUTTON = document.getElementById("open-other");
function displayOtherModal() {
  generateSubjectDiv(otherCourses, otherContainer, courseDiv);
  OTHER_MODAL.showModal();
}
OTHER_BUTTON.addEventListener("click", () => { displayOtherModal() });
const ssClickables = document.querySelectorAll(".cal-ss");
ssClickables.forEach((clickable) => {
  clickable.addEventListener("click", () => {
    displayOtherModal();
    document.getElementById(clickable.dataset.anchor).scrollIntoView();
  });
});

let closeOtherButton = document.querySelectorAll(".close-other");
closeOtherButton.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    OTHER_MODAL.close();
    WAYS_MODAL.close();
  });
});

const WAYS_MODAL = document.getElementById("ways-modal");
const WAYS_BUTTON = document.getElementById("open-ways");
WAYS_BUTTON.addEventListener("click", () => {
  WAYS_MODAL.showModal();
});

const glance = document.querySelector(".glance");
const glanceWrapper = document.querySelector(".glance-wrapper");
const openGlance = document.querySelector(".open-glance");
let glanceClosed = true;
if (openGlance) {
  openGlance.addEventListener("click", function () {
    if (glanceClosed === true) {
      openGlance.textContent = "-";
      glance.style.maxHeight = "2000px";
      glance.style.scale = "1 1";
      glanceWrapper.style.visibility = "visible";
      glanceClosed = false;
    } else if (glanceClosed === false) {
      openGlance.textContent = "+";
      glance.style.maxHeight = "0px";
      glance.style.scale = "1 0";
      glanceWrapper.style.visibility = "hidden";
      glanceClosed = true;
    }
  });
}

if (window.innerWidth > 912 && glance) {
  glance.style.maxHeight = "2000px";
  glance.style.scale = "1 1";
  glanceWrapper.style.visibility = "visible";
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

let floatUp = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains("float-up")) {
        entry.target.classList.add("float-up");
      }
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(floatUp, options);

let targets = document.querySelectorAll(".observable");
targets.forEach((target) => {
  observer.observe(target);
});

let credit = document.getElementById("bottom-credit");
credit.innerHTML =
  "Copyright &copy; 2022-" +
  currentYear +
  " Laurel County Adult Education & Literacy Council. All rights reserved.<br><br>Laurel County Literacy Council, Inc. is committed to the full implementation of the Americans with Disabilities Act (ADA).<br>It is the policy of LCLC to maximize the full inclusion and integration of people with disabilities in all aspects of employment and all programs, services and activities.";

(function () {
  const ETHICS_KEY = "ethics_expectations_agreed";
  const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

  function setWithExpiry(key, value, ttlMs) {
    const record = { value, expiresAt: Date.now() + ttlMs };
    localStorage.setItem(key, JSON.stringify(record));
  }

  function getWithExpiry(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      const record = JSON.parse(raw);
      if (!record || typeof record.expiresAt !== "number") return null;
      if (Date.now() > record.expiresAt) {
        localStorage.removeItem(key);
        return null;
      }
      return record.value; // true when set
    } catch {
      localStorage.removeItem(key);
      return null;
    }
  }

  function skipEthicsStep() {
    const el = document.getElementById("ethics-step");
    if (el) el.style.display = "none";
  }

  // --- main ---
  const alreadyAgreed = getWithExpiry(ETHICS_KEY) === true;
  if (alreadyAgreed) {
    skipEthicsStep();
    return;
  }

  const agreed = window.confirm(
    "You must read our Ethics and Expectations document before joining a class."
  );
  if (agreed) {
    setWithExpiry(ETHICS_KEY, true, NINETY_DAYS_MS);
    skipEthicsStep();
  }
})();
