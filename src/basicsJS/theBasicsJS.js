// 1.
const name = 'Oleg'
// console.log(name);
// 2.
const age = 39
// console.log(age);
// 3.
const isStudent = true
// console.log(isStudent);
// 4.
let numbers = [1, 2, 3, 4, 5]
// console.log(numbers);
// 5. 
// объявление функции sum
const sum = (a,b) => {
return a + b
}
// Вызов функции sum
let result = sum(1,2)
// console.log(result );
// 6.
// function greet(nameOne) {
//   return "Hello, " + nameOne + "!";
// }

// console.log(greet("Anna"));
const greet = (nameOne) => {
  return "Hello, " + nameOne + "!";
}
let nameOne = greet("Anna")
// console.log(nameOne );
// 7.
function calculateArea(width, height) {
  return width * height; // Возвращаем произведение ширины на высоту
}

let rectangleArea = calculateArea(10,12) // Вычисляем площадь прямоугольника
// console.log(rectangleArea);
// 8.
function isPrime(number) {
  if (number <= 1) {
    return false; // Число меньше или равно 1 не является простым
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Если число делится без остатка на i, то оно не простое
    }
  }

  return true; // Если не найдены делители, то число простое
}

// Теперь можно вызвать функцию isPrime с различными аргументами
// console.log(isPrime(7)); // Выведет true, так как 7 - простое число
// console.log(isPrime(10)); // Выведет false, так как 10 - не простое число
// console.log(isPrime(1)); // Выведет false, так как 1 не является простым числом
// console.log(isPrime(17)); // Выведет true, так как 17 - простое число
// 9.
function countVowels() {
  
}

// Получаем кнопку и элемент для отображения счётчика
const incrementButton = document.getElementById('incrementButton');
const counterElement = document.getElementById('counter');

// Устанавливаем начальное значение счётчика
let count = 0;

// Добавляем обработчик события при клике на кнопку
incrementButton.addEventListener('click', () => {
    // Увеличиваем значение счётчика на 1
    count++;

    // Обновляем текст элемента с текущим значением счётчика
    counterElement.textContent = count;
});


