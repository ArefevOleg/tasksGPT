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
// function countVowels() {
  
// }



























// Шаг 1: Импортируем React и хук состояния useState
// import React, { useState } from 'react';

// // Шаг 2: Создаем компонент
// function CounterComponent() {
//   // Шаг 3: Создаем состояние счетчика. useState возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления.
//   // В данном случае мы называем их counter и setCounter. Начальное значение счетчика устанавливаем равным 0.
//   const [counter, setCounter] = useState(0);
  
//   // Шаг 4: Создаем функцию, которая увеличивает значение счетчика на 1 каждый раз, когда она вызывается.
//   const onClickHandlerCounterIncrement = () => {
//     setCounter(counter + 1);
//     // Здесь мы вызываем setCounter с новым значением, которое на 1 больше текущего значения счетчика.
//   }
  
//   // Шаг 5: Создаем функцию, которая сбрасывает значение счетчика до 0 каждый раз, когда она вызывается.
//   const onClickHandlerCounterReset = () => {
//     setCounter(0);
//     // Здесь мы вызываем setCounter с новым значением 0.
//   }
  
//   // Шаг 6: Отображаем пользовательский интерфейс с текущим значением счетчика и двумя кнопками, которые вызывают наши функции при клике.
//   return (
//     <div>
//       Счетчик: {counter}
//       <button onClick={onClickHandlerCounterIncrement}>Увеличить</button>
//       <button onClick={onClickHandlerCounterReset}>Сбросить</button>
//     </div>
//   );
// }

// // Экспортируем компонент, чтобы его можно было использовать в других частях приложения
// export default CounterComponent;



// Конечно, давай разберемся, как использовать эти функции по шагам. Эти функции используются в React, библиотеке JavaScript для создания пользовательских интерфейсов, и они, похоже, используют хук состояния React useState.
// Создай новый проект React. Если у тебя еще нет проекта React, ты можешь создать новый с помощью команды create-react-app в командной строке.
// Создай новый компонент. В React приложении всё делится на компоненты. Компонент - это независимый и повторно используемый код, который управляет каким-то частью пользовательского интерфейса. Создай новый файл JavaScript для твоего компонента, например Counter.js.
// Импортируй React и useState. В начале файла Counter.js импортируй React и хук useState следующим образом:
// javascript
//    import React, { useState } from 'react';
// Создай состояние счетчика. Внутри твоего компонента создай состояние счетчика с помощью хука useState. useState возвращает массив из двух элементов: текущее значение состояния и функцию для его обновления. В данном случае мы называем их counter и setCounter.
// javascript
//    const [counter, setCounter] = useState(0);
// Добавь функции для обновления счетчика. Теперь ты можешь добавить функции onClickHandlerCounterIncrement и onClickHandlerCounterReset, которые используют setCounter для обновления значения счетчика.
// javascript
//    const onClickHandlerCounterIncrement = () => { setCounter(counter + 1); }
//    const onClickHandlerCounterReset = () => { setCounter(0); }
// Создай пользовательский интерфейс. В функции рендеринга компонента (то есть внутри return()) добавь кнопки, которые вызывают эти функции при клике.
// jsx
//    return (
//      <div>
//        Счетчик: {counter}
//        <button onClick={onClickHandlerCounterIncrement}>Увеличить</button>
//        <button onClick={onClickHandlerCounterReset}>Сбросить</button>
//      </div>
//    );
// Используй компонент. Наконец, ты можешь использовать свой компонент счетчика в другом месте в приложении. Просто импортируй его и используй как JSX тег.
// jsx
//    import Counter from './Counter';
   
//    function App() {
//      return (
//        <div>
//          <h1>Мое приложение</h1>
//          <Counter />
//        </div>
//      );
//    }
// Вот и все! Ты создал компонент счетчика в React, который увеличивает значение счетчика или сбрасывает его до нуля при нажатии кнопок.



// useState - это хук в библиотеке JavaScript React, который позволяет добавлять состояние в функциональные компоненты. В классическом подходе React состояние можно было использовать только в классовых компонентах, но с помощью хуков теперь можно использовать состояние и в функциональных компонентах.
// Когда ты вызываешь useState, ты получаешь массив из двух элементов: текущее значение состояния и функцию, которую можно использовать для обновления этого состояния.
// Вот пример использования useState:


// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Текущий счет: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Увеличить счет</button>
//     </div>
//   );
// }

// export default Counter;

// В этом примере useState используется для создания состояния счетчика. Каждый раз, когда пользователь нажимает на кнопку, состояние счетчика обновляется.
// Важно помнить, что когда ты обновляешь состояние с помощью функции обновления состояния (setCount в данном случае), React автоматически перерисовывает компонент с новым состоянием.

// Функциональный компонент - это один из типов компонентов в библиотеке JavaScript React. В отличие от классовых компонентов, функциональные компоненты представляют собой простые функции JavaScript, которые возвращают JSX (или null).
// Вот пример функционального компонента:

// import React from 'react';

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// export default Welcome;



// В этом примере Welcome - это функциональный компонент, который принимает объект props и возвращает JSX. Этот компонент можно использовать в другом компоненте так:
// <Welcome name="Мир" />
// В результате на странице будет отображено "Привет, Мир".
// С появлением React Hooks функциональные компоненты стали еще более мощными, так как теперь они могут использовать состояние и другие функции жизненного цикла React, которые раньше были доступны только для классовых компонентов.









