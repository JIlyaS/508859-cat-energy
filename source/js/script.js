var burgerMenu = document.querySelector('.page-header__burger');
var mainNav = document.querySelector('.main-nav');

burgerMenu.addEventListener("click", function (event) {
  event.preventDefault();
  mainNav.classList.toggle("main-nav__nav--show");
});
