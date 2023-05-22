import * as model from "./model.js";
import headerView from "./view/headerView.js";
import contentView from "./view/contentView.js";

const controlDarkMode = function () {
  // Update dark mode status
  model.toggleDarkMode();

  // Display dark mode view
  headerView.displayHeader(model.state.darkMode);
};

const controlInitDarkMode = function () {
  // Display dark mode when load window
  headerView.displayHeader(model.state.darkMode);
};

const controlFindNewUser = async function (newUser) {
  try {
    // Delete error message
    contentView.displayError("");

    // Find New User Profile
    await model.findNewUser(newUser);

    // Display New User Profile
    contentView.displayUserProfile(model.state.data);
  } catch (err) {
    contentView.displayError();
  }
};

const init = function () {
  headerView.addHandlerInitDarkMode(controlInitDarkMode);
  headerView.addHandlerDarkMode(controlDarkMode);
  contentView.addHandlerFindNewUser(controlFindNewUser);
};
init();
