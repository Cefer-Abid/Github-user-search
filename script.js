"use strict";

const modeIcon = document.querySelector(".tema--icon");
const modeIconText = document.querySelector(".tema--text");
const form = document.querySelector(".filter--form");
const input = document.querySelector(".filter--input");

// Init
import { getUserProfil } from "./functions.js";

let darkMode = false;
modeIconText.textContent = "DARK";
input.focus();

// Coding
if (localStorage.getItem("mode")) {
  darkMode = JSON.parse(localStorage.getItem("mode"));
  if (darkMode) {
    document.body.classList.add("dark-mode");
    modeIconText.textContent = "LIGHT";
    modeIcon.src = "img/icon/icon-sun.svg";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!input.value) return;
  const userName = input.value;

  getUserProfil(userName);
  input.value = ``;
});

// DARK MODE
modeIcon.addEventListener("click", function () {
  if (!darkMode) {
    document.body.classList.add("dark-mode");
    modeIconText.textContent = "LIGHT";
    modeIcon.src = "img/icon/icon-sun.svg";
  }
  if (darkMode) {
    document.body.classList.remove("dark-mode");
    modeIconText.textContent = "DARK";
    modeIcon.src = "img/icon/icon-moon.svg";
  }
  darkMode = !darkMode;
  localStorage.setItem("mode", darkMode);
});

// getUserProfil('jonasschmedtmann');
// getUserProfil('octocat');

// fsaf
