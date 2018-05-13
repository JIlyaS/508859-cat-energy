"use strict";

var burgerMenu = document.querySelector('.page-header__burger');
var mainNav = document.querySelector('.main-nav');
var headerBurgerBlock = document.querySelector('.page-header__burger-block');
var headerBurger = document.querySelector('.page-header__burger');
var headerLogo = document.querySelector('.page-header__logo-link');

mainNav.classList.remove('main-nav--nojs');
headerBurger.classList.remove('page-header--nojs');
headerBurgerBlock.classList.remove('page-header--nojs');
headerLogo.classList.remove('page-header--nojs');

burgerMenu.addEventListener("click", function (event) {
  event.preventDefault();

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--opened");
  }

  if (headerBurger.classList.contains('page-header__burger--closed')) {
    headerBurger.classList.remove("page-header__burger--closed");
    headerBurger.classList.add("page-header__burger--opened");
  } else {
    headerBurger.classList.add("page-header__burger--closed");
    headerBurger.classList.remove("page-header__burger--opened");
  }

});

if (document.querySelector('.form-program__name')) {
  var errorEmail = document.querySelector('.form-program__name');

  errorEmail.addEventListener("blur", function (event) {
    if (this.value === "" && this.hasAttribute("required")) {
      this.classList.add('form-program__input--error');
    } else {
      this.classList.remove('form-program__input--error');
    }
  });
}

if (document.querySelector('.form-program__weight')) {
  var errorEmail = document.querySelector('.form-program__weight');

  errorEmail.addEventListener("blur", function (event) {
    if (this.value === "" && this.hasAttribute("required")) {
      this.classList.add('form-program__input--error');
    } else {
      this.classList.remove('form-program__input--error');
    }
  });
}

if (document.querySelector('.form-program__email')) {
  var errorEmail = document.querySelector('.form-program__email');

  errorEmail.addEventListener("blur", function (event) {
    if (this.value === "" && this.hasAttribute("required")) {
      this.classList.add('form-program__input--error');
    } else {
      this.classList.remove('form-program__input--error');
    }
  });
}

if (document.querySelector('.form-program__phone')) {
  var errorEmail = document.querySelector('.form-program__phone');

  errorEmail.addEventListener("blur", function (event) {
    if (this.value === "" && this.hasAttribute("required")) {
      this.classList.add('form-program__input--error');
    } else {
      this.classList.remove('form-program__input--error');
    }
  });
}
