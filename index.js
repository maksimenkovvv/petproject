let menuBtnOpen = document.querySelector('.menu__button');
let menuBtnClose = document.querySelector('.modal__menu__close-btn');
let menu = document.querySelector('.modal__menu__container')

menuBtnOpen.addEventListener('click', function(){
  menu.classList.toggle('active');
})

menuBtnClose.addEventListener('click', function(){
  menu.classList.toggle('active');
})