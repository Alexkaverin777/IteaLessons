/*

  Задание 1.

  Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
  Каждая перезагрузка страницы будет с новым цветом.
  Для написания используйте функцию на получение случайного целого числа,
  между минимальным и максимальным значением (Приложена снизу задания)

  + Бонус, повесить обработчик на кнопку через метод onClick
  + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
  + Бонус выводить полученый цвет по центру страницы.
  
  Необходимо создать блок через createElement задать ему стили через element.style
  и вывести через appendChild или insertBefore

  Необходимые материалы:
    Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    __
    Работа с цветом:
    Вариант 1.
      Исользовать element.style.background = 'rgb(r,g,b)';
      где r,g,b случайное число от 0 до 255;

    Вариант 2.
      Исользовать element.style.background = '#RRGGBB';
      где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
      Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
      Перевод в 16-ричную систему исчесления делается при помощи
      метода 
      
      Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

      var myNumber = '251'
      myNumber.toString(16) // fb

*/

/**
 * Рондомное число от min до max
 * @param {number} min число от 0
 * @param {number} max число до 255 
 * @return {number} вернет число от 0 до 255 (Рондомное)
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Возвращает число в 16-й системы счисления*
 * @param {number} num число от 0 до 255 
 * @return {string} число в 16-й системы счисления
 */
const decimalToHexString = (num) => {
  if(num < 0 || num > 255){
    return null
  }

  const hexs = Number(num).toString(16);

  return hexs
}


// const body = document.querySelector('body')
// document.body.style.background = `rgb(${r}, ${g},${b})`;
// document.body.style.background = 'rgb('+ r +',' + g + ',' + b + ')';

const button = document.createElement('button');
/*
button.onclick = () => {
  const r = getRandomIntInclusive(0, 255);
  const g = getRandomIntInclusive(0, 255);
  const b = getRandomIntInclusive(0, 255);

  document.body.style.background = 'rgb('+ r +',' + g + ',' + b + ')';

  p.innerText = 'rgb('+ r +',' + g + ',' + b + ')';
}
*/
button.onclick = () => {
  const hex = decimalToHexString(getRandomIntInclusive(0, 255)) + decimalToHexString(getRandomIntInclusive(0, 255)) + decimalToHexString(getRandomIntInclusive(0, 255));

  document.body.style.background = `#${hex}`

  p.innerText = `#${hex}`
}

button.innerText = 'Привет';
document.body.appendChild(button);

const p = document.createElement('p');
document.body.appendChild(p);