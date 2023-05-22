class HeaderView {
  container = document.querySelector(".mode--container");
  iconMoon = document.querySelector(".icon-moon");
  iconSun = document.querySelector(".icon-sun");
  modeIconText = document.querySelector(".mode--text");
  modeIconMoon = document.querySelector(".mode--icon-moon");
  modeIconSun = document.querySelector(".mode--icon-sun");

  constructor() {
    this.addHandlerShowHover();
    this.addHandlerDeleteHover();
  }

  _showHover() {
    this.modeIconMoon.classList.add("hover__mode--icon");
    this.modeIconSun.classList.add("hover__mode--icon");
    this.modeIconText.classList.add("hover__mode--text");
  }
  _deleteHover() {
    this.modeIconMoon.classList.remove("hover__mode--icon");
    this.modeIconSun.classList.remove("hover__mode--icon");
    this.modeIconText.classList.remove("hover__mode--text");
  }

  addHandlerShowHover() {
    this.container.addEventListener("mouseover", this._showHover.bind(this));
  }
  addHandlerDeleteHover() {
    this.container.addEventListener("mouseout", this._deleteHover.bind(this));
  }

  addHandlerDarkMode(handler) {
    this.container.addEventListener("click", handler);
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
