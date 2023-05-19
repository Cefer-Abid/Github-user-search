import { getUserProfil, toggleDarkMode } from "./helper.js";

const modeIcon = document.querySelector(".tema--icon");
const form = document.querySelector(".filter--form");
const input = document.querySelector(".filter--input");

// Init
let darkMode = false;
input.focus();

// sil !! ~~~~~~~~~
getUserProfil("cefer-abid");

// Toggle dark mode when reload
if (localStorage.getItem("dark-mode")) {
  darkMode = JSON.parse(localStorage.getItem("dark-mode"));
  toggleDarkMode(darkMode);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!input.value) return;
  const userName = input.value;

  getUserProfil(userName);
  input.value = ``;
});

// Toggle dark mode when reload
modeIcon.addEventListener("click", function () {
  darkMode = !darkMode;
  toggleDarkMode(darkMode);
});
