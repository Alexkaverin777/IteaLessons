/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/

const btnColor = document.querySelector('.btn-color');

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
    if (num < 0 || num > 255) {
        return null
    }

    const hexs = Number(num).toString(16);

    return hexs
}


const setLocalColar = () => {
    const hexColor = decimalToHexString(getRandomIntInclusive(0, 255)) + decimalToHexString(getRandomIntInclusive(0, 255)) + decimalToHexString(getRandomIntInclusive(0, 255));

    localStorage.setItem('Color', hexColor)
}


btnColor.addEventListener('click', setLocalColar)