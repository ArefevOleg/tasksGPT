// 1.
function isEven(number) {
  // Проверяем остаток от деления числа на 2
  if (number % 2 === 0) {
    return true; // Число четное
  } else {
    return false; // Число нечетное
  }
}
// Примеры использования функции для проверки чисел
// console.log(isEven(4));  // Выведет true, потому что 4 - четное число
// console.log(isEven(7));  // Выведет false, потому что 7 - нечетное число

// // 2.
// let number = -5;

// if (number > 0) {
//     console.log("Число положительное");
// } else {
//     console.log("Число отрицательное или равно нулю");
// }

// 3.
function isDivisor(divisor, number) {
  // Проверяем, делится ли number на divisor без остатка
  if (number % divisor === 0) {
    return true; // divisor является делителем number
  } else {
    return false; // divisor не является делителем number
  }
}

// Примеры использования функции для проверки делителей
// console.log(isDivisor(2, 10));   // Выведет true, потому что 2 является делителем 10
// console.log(isDivisor(3, 10));   // Выведет false, потому что 3 не является делителем 10
// console.log(isDivisor(5, 100));  // Выведет true, потому что 5 является делителем 100
// console.log(isDivisor(7, 100));  // Выведет false, потому что 7 не является делителем 100

// 4.
// Для задачи "проверить, является ли год високосным" можно написать функцию, которая будет определять, соответствует ли год условиям високосного года.

// Правила определения високосного года:

// 1. Год, который делится на 4 без остатка, является високосным.
// 2. Однако, годы, которые делятся на 100 без остатка, не являются високосными, за исключением годов, которые делятся на 400 без остатка.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // Год является високосным
  } else {
    return false; // Год не является високосным
  }
}

// Примеры использования функции для проверки годов на високосность
//console.log(isLeapYear(2000)); // Выведет true, потому что 2000 год - високосный
//console.log(isLeapYear(2004)); // Выведет true, потому что 2004 год - високосный
//console.log(isLeapYear(1900)); // Выведет false, потому что 1900 год - не високосный
// console.log(isLeapYear(2021)); // Выведет false, потому что 2021 год - не високосный

// В этом решении функция isLeapYear принимает год в качестве аргумента year. Внутри функции мы используем условие, которое проверяет два основных правила определения високосного года:

// Год делится на 4 без остатка и не делится на 100 без остатка.
// Или год делится на 400 без остатка.
// Если указанные условия выполняются, то год считается високосным, и функция возвращает true. В противном случае, год считается не високосным, и функция возвращает false.

// Примеры использования функции показывают, как можно проверить разные годы на високосность.
