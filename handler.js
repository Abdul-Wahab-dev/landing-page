const toggler = document.getElementById("menu-toggler");
const menuDropDown = document.getElementById("sm-menu-bar");

toggler.addEventListener("click", () => {
  if (menuDropDown) {
    menuDropDown.classList.toggle("sm-menu-bar-show");
  }
});
