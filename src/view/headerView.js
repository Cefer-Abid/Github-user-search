class HeaderView {
  iconMoon = document.querySelector(".icon-moon");
  iconSun = document.querySelector(".icon-sun");
  modeIcon = document.querySelector(".mode--container");
  modeIconText = document.querySelector(".tema--text");

  addHandlerDarkMode(handler) {
    this.modeIcon.addEventListener("click", handler);
  }

  addHandlerInitDarkMode(handler) {
    window.addEventListener("load", handler);
  }

  _hiddenEl(el) {
    el.classList.add("hidden");
  }
  _displayEl(el) {
    el.classList.remove("hidden");
  }

  displayHeader(isDarkMode) {
    this._hiddenEl(this.iconMoon);
    this._hiddenEl(this.iconSun);

    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      this.modeIconText.textContent = "LIGHT";
      this._displayEl(this.iconSun);
    }
    if (!isDarkMode) {
      document.body.classList.remove("dark-mode");
      this.modeIconText.textContent = "DARK";
      this._displayEl(this.iconMoon);
    }
  }
}
export default new HeaderView();
