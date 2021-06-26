/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

const boxlider = document.getElementById('slider'),
      mySlider = document.querySelector('.mySlider'),
      prevSilde = document.getElementById('PrevSilde'),
      nextSlide = document.getElementById('NextSilde'),      
      OurSliderImages = [
                      'images/cat1.jpg', 'images/cat2.jpg',
                      'images/cat3.jpg', 'images/cat4.jpg',
                      'images/cat5.jpg', 'images/cat6.jpg',
                      'images/cat7.jpg', 'images/cat8.jpg'
                      ],
        lengthArr = OurSliderImages.length - 1;

const creatElemImg = document.createElement('img');
let currentPosition = 0;

window.addEventListener('load', () => {
  renderImage(currentPosition);
  
  prevSilde.addEventListener('click', prevSlider);
  nextSlide.addEventListener('click', nextSlider);
})
const creatDots = () => {
  const creactDotsWrap = document.createElement('div');
  creactDotsWrap.classList.add('dots-wraper');

  for (let i = 0; i < OurSliderImages.length; i++) {
    const divCreat = document.createElement('div');
    divCreat.classList.add('dot')

    creactDotsWrap.appendChild(divCreat)
  }

  return creactDotsWrap;
}
/**
 * 
 * @param {*} dots точки слайдера 
 * @param {*} i интекс активной ночки
 */
const activeDots = (dots, i) => {
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[i].classList.add('active');
  currentPosition = i
}

mySlider.insertAdjacentElement('beforeend', creatDots());
const dots = document.querySelectorAll('.dot');
activeDots(dots, currentPosition);

dots.forEach( ( dot , i ) => {
  dot.addEventListener('click', () => {
    activeDots(dots, i)
    renderImage(i)
  })
})

const renderImage = n => {
  creatElemImg.classList.remove('active');
  creatElemImg.src = OurSliderImages[n]; 
   
  boxlider.appendChild(creatElemImg);

  setTimeout(()=> creatElemImg.classList.add('active'), 50);
}
const nextSlider = () => {
  if (currentPosition === lengthArr) {
    currentPosition = 0;
    renderImage(currentPosition);
    activeDots(dots, currentPosition)
  } else {
    currentPosition++;
    renderImage(currentPosition);
    activeDots(dots, currentPosition)
  }
}
const prevSlider = () => {
  if (currentPosition === 0) {
    currentPosition = lengthArr;
    renderImage(currentPosition);
    activeDots(dots, currentPosition)
    
  } else {
    currentPosition--;
    renderImage(currentPosition);
    activeDots(dots, currentPosition)
    
  }
}

