const burgerMenu = document.querySelector('.burger__menu');
const headerNav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger__menu-active');
  if(burgerMenu.classList.contains('burger__menu-active')){ // проверяем есть ли у бургера активный класс
    headerNav.classList.add('header__nav-active')// если есть то добавляем для меня активный класс что бы в стилях его скрыть 
  }
  else{
    headerNav.classList.remove('header__nav-active')// усли у меню есть активный класс то удаляем его по нажатию 
  }
});