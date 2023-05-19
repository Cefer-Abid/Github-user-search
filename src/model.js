import { getUserDate } from "./helper.js"

export const state = {
  darkMode: false,
  data: [],
};

const init = function () {
  if (localStorage.getItem("dark-mode")) {
    state.darkMode = JSON.parse(localStorage.getItem("dark-mode"));
  }
};
init();

export const toggleDarkMode = function () {
  state.darkMode = !state.darkMode;
  localStorage.setItem("dark-mode", JSON.stringify(state.darkMode));
};

export const findNewUser = async function (newUser) {
  try {
    // Get User Profil
    const res = await fetch(`https://api.github.com/users/${newUser}`);
    if (!res.ok) throw new Error("Can not found profile");
    state.data = await res.json();

    // Get date when user joined
    state.data.userJoinedDate = getUserDate(state.data.created_at);
  } catch (err) {
    throw err;
  }
};
