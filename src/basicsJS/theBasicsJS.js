// 1.
const name = "Oleg";
// console.log(name);

// 2.
const age = 39;
// console.log(age);

// 3.
const isStudent = true;
// console.log(isStudent);

// 4.
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// 5.
function sum(a, b) {
  return a + b;
}
let result = sum(2, 2);
// console.log(result);

// 6.
function greet(name) {
  return "Hello, " + name;
}
let greeting = greet("Oleg");
// console.log(greeting);

// 7.
function calculateArea(width, height) {
  return width * height;
}
let rectangle = calculateArea(10, 20);
// console.log(rectangle);

// 8.
function isPrime(numb) {
  // Проверка на случаи, когда число меньше или равно 1
  if (numb <= 1) {
    return false; // Число 1 и меньшие не являются простыми
  }

  // Проверка для чисел больше 1
  for (let i = 2; i <= Math.sqrt(numb); i++) {
    if (numb % i === 0) {
      return false; // Если число делится нацело на i, то оно не простое
    }
  }

  return true; // Если не нашли делителей, кроме 1 и самого числа, то число простое
}

// Примеры вызова функции isPrime для тестирования
console.log(isPrime(7)); // true, 7 - простое число
console.log(isPrime(6)); // false, 6 - составное число
console.log(isPrime(1)); // false, 1 не является простым числом
console.log(isPrime(13)); // true, 13 - простое число
