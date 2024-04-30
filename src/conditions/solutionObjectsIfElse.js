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
console.log(isDivisor(2, 10));   // Выведет true, потому что 2 является делителем 10
console.log(isDivisor(3, 10));   // Выведет false, потому что 3 не является делителем 10
console.log(isDivisor(5, 100));  // Выведет true, потому что 5 является делителем 100
console.log(isDivisor(7, 100));  // Выведет false, потому что 7 не является делителем 100
