window.addEventListener('scroll', function() {
  const header = document.querySelector('.header') //Находим header шапку сайта 
  const scrollPosition = window.scrollY; // присваиваем скролл по оси У т.е вертикальный скролл
  console.log(scrollPosition); // проверяем что нашли горизонтальный скролл (можно удалить)
  
  const maxScroll = 1; // Максимальная высота скролла, при которой шапка станет прозрачной в пикселях значения можно менять
  if(maxScroll <= scrollPosition) { //тут мы говорим что позиция скрола меньше или равна максимальному скроллу (т.е 1px) то тогда будет применяться следующие действия
      header.style.backgroundColor = `rgba(255, 255, 255, 0.5`; // меняешь прозрачность шапки, цвет может быть любым
  }else{
      header.style.backgroundColor = `rgb(255, 255, 255`; // возвращаем прозрачность шапки, цвет может быть любым
  }
});