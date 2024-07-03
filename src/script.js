// Создайте функцию, которая принимает целое число в
// качестве аргумента и возвращает "Четное" для четных чисел или "Нечетное"
// для нечетных чисел.


// Function declaration

// function calculateNumber(initialValue) {
//   // initialValue - параметр функции типа number можно передать колбэк
//   let x = initialValue;
//   x = x + 100;
//   x = x / 5;

//   return x;
// }

// const result = calculateNumber(5334535);
// const result1 = calculateNumber(5335);
// // console.log(result);
// // console.log(result1);

// function calculateCercleArea(cercleRadius) {
//   // initialValue - параметр функции типа number
//   return 3.14 * cercleRadius ** 2; // параметр - это переменная
// } // функция может принимать сколько угодно параметров

// const cercleArea1 = calculateCercleArea(6); // (6) - это аргумент (значение переменной, которе мы передаем в функцию)
// // console.log(cercleArea1);

// const cercleArea2 = calculateCercleArea(16.2);

// // console.log(cercleArea2);

// function createHTMLElement(tag = "button", text = "отправить", id = null) {
//   // нужно сохранять порядок записи параметров
//   const element = document.createElement(tag);
//   if (id) {
//     // если id не null или undefined то присваиваем элементу id
//     element.id = id;
//   }
//   element.innerHTML = text;

//   return element;
// }

// const h1element = createHTMLElement("h1", "просто текст"); // аргументы идут в такомже порядке как и параметры
// console.log(h1element)                                  // если мы не хотим передавать аргументы, то мы можем использовать null
// document.body.append(h1element)

// const element = createHTMLElement();
// document.body.append(element)

function logArgsToControle() {
  // console.log(arguments);
  if (!arguments.length) {
    //1. если аргументов нет
    return; // то досрочно возвращаем завршение функции
  }
  for (let argument of arguments) {
    // console.log(arguments);
  }
  console.log("Больше аргументов нет"); // когда аргументы закончились выводим это сообщение
}

logArgsToControle(); // 1. если аргументов нет то возвращаем undefined

// Function expression

// sayHello(); - нельзя получить доступ к переменной до т ого как она была инициализированна

// const sayHello = function() {
//   console.log('Hello');
// }
// sayHello();

const sayBye = () => {
  // у стрелонной функции нет параметра аргументов
  // console.log('Bye');
};
sayBye();

const brokenLinks = ["vk", "youtybe", "instagram", "facebook"];
// https://vk.com

// коллбэк функция - это функция переданная в другую функцию в качестве аргумента
const fixLinksArray = (linksArray) => {
  const correctLinks = [];
  linksArray.forEach((brokenLink) =>
    correctLinks.push("https://" + brokenLink + ".com")
  );

  return correctLinks;
};

// console.log(fixLinksArray(brokenLinks));

// методы массивов

const people = [
  {name: "Олег", age: 15, budget: 20000},
  {name: "Алексей", age: 15, budget: 3400},
  {name: "Михаил", age: 15, budget: 5600},
  {name: "Екатерина", age: 15, budget: 7000},
  {name: "Вадим", age: 15, budget: 4500},
  {name: "Елена", age: 15, budget: 8200},
];

// ForEach

// Map

// Filter

// Reduce

// Find

// FindIndex

// Циклы FOR

// Цикл - это что-то замкнутое и повторяющееся действие из раза в раз

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

//     or

// 1. создаем переменную - счётчик i (индекс) = 0
// 2. указываем условие (i < 5) меньшели переменная i чем 5
// 3. переходим к телу цикла и выводим через console.log(1)
// 4. шаг (увеличиваем i на 1) Это эквивалентно операции i = i + 1

// for (1.начальное значение;2. условие; 4.) {
// 3.  console.log(1);

// создаем переменную - счётчик i и приравниваем ее к 0
// проверяем меньше ли i чем 5? получаем true
// выполняем console.log(1)
// } i++ прибавляем единицу к i
// снова проверяем меньше ли i чем 5? получаем true
// и так далее до тех пор пока i будет равна 5 и получим false тогда тело цикла не будет выполненно

for (let i = 0; i < 10; i++) {
  // console.log(i);   // для проверки можем выводить i в место 1
}

const arr = ["a", "b", "c", "d", "e"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// модификация записи цикла FOR

// в letter находится следующий элемент массива a b c d e
// переменную letter можно назвать как угодно, например - eretete
for (let letter of arr) {
  // console.log(letter);
}

const user = {
  name: "Олег",
  age: "15",
  isMaried: true,
};

for (let key in user) {
  // console.log(key); // получаем доступ к каждому ключу в объекте
  // console.log(key, user[key]);  // получаем свойство объекта
  // пишем [key] в квадратных скобках потомучто значение [key] динамическое
  if (key === "age") {
    break; // останавливает цикл
  }
  // console.log(user[key]);
}

//  в обратном порядке сначала i = 5, потом i = 4 и так далее
// for (let i = arr.length; i > 0; i--) {
// console.log(arr[i - 1]);
// }

// Циклы WHILE

let x = 0;

// while (x < 5) {
// console.log(x);
// x++;
// break; // останавливает цикл
// }

// let word = '';
// while (word.length < 5) {
// const value = prompt('введите букву');
//   if (value.length === 0) { // если пользователь ничего не ввел то выходим  из цикла
//     break;
//   }
//   word = word + value;
//   console.log(word);
// }

// сначала делаем, а потом проверяем

// let h = 0;
// do {
//   console.log(h);
//   h++;
// } while (h < 5);

// // сначала проверяем, а потом делаем

// let y = 0;
// while (y < 5) {
//   console.log(y);
//   y++;
// }

// const sum = (a, b) => {
//   return a + b;
// };
// const res = sum(sum(1, 2), sum(1, 3));
// // const res1 = sum(2, 4);

// console.log(res );

// "StartsWith" - это метод, используемый в JavaScript для проверки, начинается ли строка с определенной подстроки. Этот метод возвращает логическое значение true, если строка начинается с указанной подстроки, и false в противном случае.

const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

languages.filter(function (item, index, arr) {
  // console.log("Текущий элемент " + item)
  // console.log("Индекс " + index)
  // console.log("Массив " + arr)

  return index >= 3
})


// const jLanguages = languages.filter(function (language) {
//   return language.startsWith("T")
// })
// // Результат будет ['Java', 'JavaScript', 'Julia'] 

// console.log(jLanguages)


const arr1 = [1, 2, 3, 4, 5];

// 1. forEach - перебор элементов массива 
// item - элемент массива
//      [1,2,3,4,5]
// imdex 0,1,2,3,4
// const newArr = arr1.forEach((item, imdex, array) => {
// console.log(item, imdex, array)
// });
// console.log(newArr) - undefined

// 2. map - перебор элементов массива и возврат нового массива на основе текущего
// const newArr = arr1.map((item, index, array) => {
// return item * 2 + index;
// });

// console.log(newArr)
// 3. filter - возвращает новый массив 
// позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

// const filterArr = arr1.filter((item, imdex, array) => {
// return item > 3;
// });
// console.log(filterArr)

// const array = [1,2,3,4,5]
//
// const newArray = array.map(function(element) {
//   return element + '0'
// })
// console.log(newArray )

// const obj = {
//   name: "Jon",
//   address: {
//     country: "USA",
//     city: "Moscow",
//     street: {
//       title: "Hello",
//       dom: ["red", "black", "green"]
//     }
//   }
// }

// console.log(obj.address.street.dom);
// const  newObj = {
//   ...obj,
//   address: {
//     ...obj.address,
//     street: {
//       ...obj.address.street,
//       dom: obj.address.street.dom.map(el => {
//         return (
//           el === "red"
//             ? "pink"
//             : el)
//       })
//     }
//   }
// }

// const obj3 = {
//   name: "Jon",
//   address: [1, 2, 3]
// }
//
// const obj4 = {
//   ...obj3,
//   address: obj3.address.map(el => el + 1)
// }


//
// console.log(obj);
// console.log(newObj);
// console.log(obj == newObj);
//
//
//
//
// const arry =[1, 2, 3, 4];
//
// const arry1 = arry.map(el => {return 1})

// console.log(arry);
// console.log(arry1);
// console.log(arry1 == arry);

// const obj3 = {
//   name: "Jon",
//   address: [1, 2, 3]
// }
//
// const obj4 = {
//   ...obj3,
//   address: obj3.address.map(el => el + 1)
// }
//
// console.log(obj3);
// console.log(obj4);

//
// const object = {
//   country: {
//     name: ["Canada", "USA", "Belarus", "Russia"],
//     region: {
//       city: ["Toronto", "New York", "Minsk", "Moscow"],
//       district: {
//         street: ["Grant Street", "United States", "Lenina", "Blinova"],
//         house: [1, 2, 3, 4, 5],
//         houseColor: ["red", "black", "blue", "green"]
//       }
//     }
//   }
// }
//
// const newObject = {
//   ...object,
//   name: {
//     ...object.country.name.find(el => el === "Canada")
//   },
//   city: {
//     ...object.country.region.city.find(el => el === "Toronto")
//   },
//   street: {
//     ...object.country.region.district.houseColor.find(el => el === "red")
//   }
// }
//
// console.log(object);
// console.log(newObject);
//


// const newObject = {
// ...object,
//   name: {
//     ...object.country.name.map(el => el === "Canada" ? "Poland" : el)
//   },
//   city: {
//     ...object.country.region.city.map(el => el === "Toronto" ? "Varshava" : el)
//   },
//   street: {
//     ...object.country.region.district.houseColor.map(el => el === "red" ? "pink" : el)
//   }
// }


// Задачи на закрепление ссылочного типа данных и spread оператора:
//
//   •	Без запуска кода проговорите что тут происходит и что будет в консоли
//
// const a = {}; //1234
// const b = {};// 4321
// const c = a; //1234
// const d = c; //1234
// //
// console.log(a === b); // false
// console.log(a === c); // true
// console.log(c === d); // true
// console.log(a === c); // true
// 
// 	•	Что будет в консоль логах, ответьте без запуска кода и ответьте на вопрос
//
//
// const a = {};
// const b = a;
// b['test'] = 'test value';
//
// console.log(b === a);
// console.log(a);
// // смутриурет ли объект a?
//
//
// •	У вас есть объект пользователя с информацией о его имени и адресе. Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор)
//
// Исходный объект и ожидаемый результат:
//   const user = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       country: 'USA',
//     },
//   };
//
// console.log(updatedUser);
// // Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' } }
//
//
// •	У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения)
//
// Ожидаемый результат:
//
//
//   const originalArray = [1, 2, 3, 4, 5];
// const newArray = addElementToArray(originalArray, 6);
//
// console.log(newArray);
// // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]
//
//
// Задачи для отработки деструктуризации:1) Извлечь значения свойств объекта в переменные name, age, city
//
//
// const user = { name: 'John', age: 25, city: 'New York' };
//
//
// и вывести в консоль эти переменные
//
// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'
//
//
// 2) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
//
// const fruits = ['apple', 'banana', 'orange'];
//
//
// и вывести в консоль эти переменные
//
//
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'
//
//
// 3) Использовать деструктуризацию в параметрах функции
//
// const person = { name: 'Alice', age: 30 };
//
// // Деструктуризация в параметрах функции
// function printPersonDetails(тут применить деструктуризацию надо) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30
//
// 4) Установите значение по умолчанию для свойства year которого нет в объекте car
//
// const car = { brand: 'Toyota', model: 'Camry' };
//
// выведите в консоль его
//
//
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)
//
//
// 5) Извлечь значения из массива объектов
//
//
// const students = [
//   { name: 'Alex', grade: 'A' },
//   { name: 'Emma', grade: 'B' },
//   { name: 'Chris', grade: 'C' },
// ];
//
//
// и вывести их в консоль
//
//
// console.log(student1);  // 'Alex'
// console.log(student3);  // 'Chris'
//
//
// 6) Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
//
//
// const person = { firstName: 'Max', lastName: 'Johnson' };
//
// const firstName = 'first Name: Nina';
// const lastName = 'last Name: Ivanov;
//
//
// и вывести результат в консоль
//
// console.log(тут название вашей новой перемееной вместо firstName); // 'Max'
// console.log(тоже самое с lastName сделать); // 'Johnson'
// console.log(age); // 25 (значение по умолчанию)
//
//
//

// Задачи на закрепление ссылочного типа данных и spread оператора:
//
//   •	Без запуска кода проговорите что тут происходит и что будет в консоли
//
// const a = {}; //1234
// const b = {};// 4321
// const c = a; //1234
// const d = c; //1234
// //
// console.log(a === b); // false
// console.log(a === c); // true
// console.log(c === d); // true
// console.log(a === c); // true
// //
// 	•	Что будет в консоль логах, ответьте без запуска кода и ответьте на вопрос
//
//
// const a = {};
// const b = a;
// b['test'] = 'test value';
//
// console.log(b === a);
// console.log(a);
// // смутриурет ли объект a?
//
//
// •	У вас есть объект пользователя с информацией о его имени и адресе. Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор)
//
// Исходный объект и ожидаемый результат:
//   const user = {
//     name: 'John',
//     address: {
//       city: 'New York',
//       country: 'USA',
//     },
//   };
//
// console.log(updatedUser);
// // Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' } }
//
//
// •	У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения)
//
// Ожидаемый результат:
//
//
//   const originalArray = [1, 2, 3, 4, 5];
// const newArray = addElementToArray(originalArray, 6);
//
// console.log(newArray);
// // Ожидаемый вывод: [1, 2, 3, 4, 5, 6]
//
//
// Задачи для отработки деструктуризации:1) Извлечь значения свойств объекта в переменные name, age, city
//
//
// const user = { name: 'John', age: 25, city: 'New York' };
//
//
// и вывести в консоль эти переменные
//
// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'
//
//
// 2) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
//
// const fruits = ['apple', 'banana', 'orange'];
//
//
// и вывести в консоль эти переменные
//
//
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'
//
//
// 3) Использовать деструктуризацию в параметрах функции
//
// const person = { name: 'Alice', age: 30 };
//
// // Деструктуризация в параметрах функции
// function printPersonDetails(тут применить деструктуризацию надо) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }
//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30
//
// 4) Установите значение по умолчанию для свойства year которого нет в объекте car
//
// const car = { brand: 'Toyota', model: 'Camry' };
//
// выведите в консоль его
//
//
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)
//
//
// 5) Извлечь значения из массива объектов
//
//
// const students = [
//   { name: 'Alex', grade: 'A' },
//   { name: 'Emma', grade: 'B' },
//   { name: 'Chris', grade: 'C' },
// ];
//
//
// и вывести их в консоль
//
//
// console.log(student1);  // 'Alex'
// console.log(student3);  // 'Chris'
//
//
// 6) Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
//
//
// const person = { firstName: 'Max', lastName: 'Johnson' };
//
// const firstName = 'first Name: Nina';
// const lastName = 'last Name: Ivanov;
//
//
// и вывести результат в консоль
//
// console.log(тут название вашей новой перемееной вместо firstName); // 'Max'
// console.log(тоже самое с lastName сделать); // 'Johnson'
// console.log(age); // 25 (значение по умолчанию)
//
//
//


// const age = Number(prompt("Введите возраст"))
// document.write(`Возраст пользователя: ${age}`)
// // const event = () => {
// //   console.log(age)
// // }

// ------------------------


// Задачи для отработки деструктуризации:) Извлечь значения свойств объекта в переменные name, age, city
// const user1 = { name: 'John', age: 25, city: 'New York' };
// const {name, age, city} = user1
// console.log(name)
// console.log(age)
// console.log(city)
//
//
// и вывести в консоль эти переменные
//
// console.log(name);  // 'John'
// console.log(age);   // 25
// console.log(city);  // 'New York'
//
//
// 2) Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
//
// const fruits = ['apple', 'banana', 'orange'];
//
// const secondFruit = fruits[1]
// const thirdFruit = fruits[2]

//
//
// и вывести в консоль эти переменные
//
//
// console.log(secondFruit);  // 'banana'
// console.log(thirdFruit);   // 'orange'
// //
//
// 3) Использовать деструктуризацию в параметрах функции
//
// const person = { name: 'Alice', age: 30 };
// //
// // // Деструктуризация в параметрах функции
// function printPersonDetails({name, age}) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

//
// printPersonDetails(person);  // Вывод: Name: Alice, Age: 30
//
// 4) Установите значение по умолчанию для свойства year которого нет в объекте car
//
// const car = { brand: 'Toyota', model: 'Camry', year: 2022 };
// const {brand, model, year} =car
// //
// // выведите в консоль его
// //
// //
// console.log(brand);  // 'Toyota'
// console.log(model);  // 'Camry'
// console.log(year);   // 2022 (значение по умолчанию)
//
//
// 5) Извлечь значения из массива объектов
//
//
// const students = [
//   { name: 'Alex', grade: 'A' },
//   { name: 'Emma', grade: 'B' },
//   { name: 'Chris', grade: 'C' },
// ];
// const student1 = students[0].name
// const student3 = students[2].name
// //
// // и вывести их в консоль
// //
// //
// console.log(student1);  // 'Alex'
// console.log(student3);  // 'Chris'
//
//
// 6) Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
//
//
// const person = { firstName: 'Max', lastName: 'Johnson', age: 25 };
// const {firstName, lastName, age} = person
// //
// const name1 = firstName;
// const name2 = lastName;
// //
// //
// // и вывести результат в консоль
// //
// console.log(name1); // 'Max'
// console.log(name2); // 'Johnson'
// console.log(age); // 25 (значение по умолчанию)
//
//
// //unshift спред // задача "Gjjjj Gjhjh"
// const arr12 = [5, 6, 7, 8];
// const arr13 = [1, 2, 3, 4];
// arr12.unshift(...arr13)
// console.log(arr12)
//
///////////////////
// В конце файла будут ответы на задачи !!!!! Сначала будет описание всех задач,
// а в конце будет решение push():
// Добавьте один или несколько элементов в конец массива
// Исходный массив:
// let fruits = ['apple', 'banana', 'orange'];
// fruits.push(...fruits, "Hello")
// console.log(fruits)
// Ожидаемый результат:
// console.log(fruits); // Output: ['apple', 'banana', 'orange',твои добавленные элементы в конец]
//
// pop():
// Удалите последний элемент в массиве и верните этот элемент
// Исходный массив:
//   const users = [
//     {
//       id: 1,
//       name: 'Bob',
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: 'Alex',
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: 'Ann',
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: 'Donald',
//       isStudent: false,
//     },
//   ];
// const lastUser = users.pop()
// users.push(lastUser)
// console.log(users)
// Ожидаемый результат:
// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
// console.log(users); // [
// { id: 1, name: 'Bob', isStudent: true },
// { id: 2, name: 'Alex', isStudent: true },
// { id: 3, name: 'Ann', isStudent: true }]
//
// shift():
// Удалите первого юзера и верните его
// Исходный массив:
//   const users = [
//     {
//       id: 1,
//       name: 'Bob',
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: 'Alex',
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: 'Ann',
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: 'Donald',
//       isStudent: false,
//     },
//   ];
// const firstUser = users.shift()
// console.log(firstUser)
// console.log(users)

// Ожидаемый результат:
// console.log(firstUser);
// { id: 1, name: 'Bob', isStudent: true }
// console.log(users);
// [{ id: 2, name: 'Alex', isStudent: true },
// { id: 3, name: 'Ann', isStudent: true },
// { id: 4, name: 'Donald', isStudent: false }]
//
// unshift():
// Добавьте один и более элементов в начало массива
// Исходный массив:
//   const users = [
//     {
//       id: 1,
//       name: 'Bob',
//       isStudent: true,
//     },
//     {
//       id: 2,
//       name: 'Alex',
//       isStudent: true,
//     },
//     {
//       id: 3,
//       name: 'Ann',
//       isStudent: true,
//     },
//     {
//       id: 4,
//       name: 'Donald',
//       isStudent: false,
//     },
//   ];
// users.unshift(...users, { id: 0, name: 'TestName', isStudent: false })
// console.log(users)
//
// Ожидаемый результат:
//   console.log(users); //[
// //     { id: 0, name: 'TestName', isStudent: false },
// //     { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'Ann', isStudent: true },
// //     { id: 4, name: 'Donald', isStudent: false }
// //   ]
//
// reverse() Позволяет обратить порядок элементов в массиве.,
// join() Возвращает значения всех элементов массива, объединённых в строку.
// split():метод разбивает строку на массив строк используя для этого заданный разделитель.
// Сделать reverse слова
// Исходная строка:
// const str = 'JavaScript is awesome';
// const res = str.split(" ").reverse().join()
// console.log(res)
// Ожидаемый результат:
// console.log(res); // awesome is JavaScript
//
// concat():
// Напишите функцию mergeArrays,

// const mergeArrays = (arr1, arr2) => {
//   const res = arr1.concat(arr2)
//   return res
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))

// которая принимает на вход два массива и возвращает
// новый массив, содержащий все элементы из обоих массивов.
// Ожидаемый результат:
//
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]
//
// flat():
// Напишите функцию JavaScript,
// которая сглаживает вложенный массив любой глубины
// const flattenArray = (arr) => {
//   return arr.flat(Infinity)
// }
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]]));
// Ожидаемый результат:
//
//
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
//
//
// find():
//вернёт первый найденный в массиве элемент, который подходит под условие
// в переданной колбэк-функции. Если в массиве не найдётся ни одного подходящего элемента,
// то вернётся значение undefined.
// Напишите функцию JavaScript, которая находит первый элемент
// в массиве, удовлетворяющий заданному условию.
// Пример:
// Входной массив: [10, 20, 30, 40, 50]
// const arr5 = ["apple","orange","banana"]
// const findFirstElement = (arr) => {
//   const res = arr.find(el => { return el.startsWith("o")})
//   return res
// }
//
// console.log(findFirstElement(arr5))
// Условие: Найти первый элемент больше 25
// Выходные данные: 30
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//   Условие: Найти первый элемент, начинающийся на "o".
//   Выходные данные: "апельсин"
//
// Необходимо написать функцию findFirstElement, которая принимает
// на вход массив и функцию условия и возвращает первый элемент в массиве,
// удовлетворяющий условию.
//
//   Ожидаемый результат:
//   let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"
//
//

// includes():
//
// Напишите функцию JavaScript, которая проверяет, присутствует ли заданный элемент в массиве.
// Пример:
//
// const includesFo = (arr) => {
//   const res = arr.includes("апельсин")
//   return res
// }
// console.log(includesFo(["яблоко", "банан", "апельсин", "киви"]))
// Входной массив: [1, 2, 3, 4, 5]
// Элемент для проверки: 3
// Выход: true
//
// Входной массив: ["яблоко", "банан", "апельсин", "киви"].
//   Элемент для проверки: "виноград"
// Выход: false
//
// Необходимо написать функцию checkElement, которая принимает на вход массив и элемент и возвращает true,
// если элемент присутствует в массиве, и false в противном случае.
//
// Ожидаемый результат:
//
//
//   let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false
//
//
// filter():
// Напишите функцию JavaScript, которая фильтрует массив чисел и возвращает только те элементы,
// которые больше заданного значения.
// const filterGreaterThan = (arr) => {
//   const res = arr.filter(el => el > 25)
//   return res
// }

// const filterGreaterThan = (arr) => {
//   const res = arr.filter(el => el !== "TypeScript")
//   return res
// }
// console.log(filterGreaterThan(["Java", "TypeScript", "C#", "JavaScript", "Julia"]))
// const languagesSkills = ["Java", "TypeScript", "C#", "JavaScript", "Julia"];
// const filterLanguages = languagesSkills.filter(el => {
//   return el.startsWith("J")
// })
// console.log(filterLanguages)

//  Пример:
//
// Входной массив: [10, 20, 30, 40, 50]
// Значение для фильтрации: 25
// Выходной массив: [30, 40, 50]
//
// Входной массив: [5, 15, 25, 35, 45]
// Значение для фильтрации: 20
// Выходные данные: [25, 35, 45]
//
// Необходимо написать функцию filterGreaterThan, которая принимает на вход массив чисел и
// значение и возвращает новый массив, содержащий только элементы, превышающие указанное значение.
//
//
// Ожидаемый результат:
//
// let numbers1 = [10, 20, 30, 40, 50];
// const filterGreaterThan = (numbers1) => {
//   const res = numbers1.filter(el => el > 25)
//   return res
// }
// //
// // let numbers1 = [10, 20, 30, 40, 50];
// // let numbers2 = [5, 15, 25, 35, 45];
// //
// console.log(filterGreaterThan(numbers1)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]
//
//
// sort():
//
// Напишите функцию JavaScript, которая сортирует массив объектов в алфавитном порядке на основе заданного свойства.
//
// let people3 = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
// ];
//
// // let numbers = [5, 2, 8, 1, 4];
// const numbers = [-100, 10, 25, 30, 45, 44, 1, 2, 11];
// const sort = people3.sort((a, b) => a.name.localeCompare(b.name))
// const sortAlphabeticallyByProperty = (a, b) => {
//   return b -a
// }
// console.log(people3)
// console.log(numbers.sort(sortAlphabeticallyByProperty))
// console.log(people3.sort(sortAlphabeticallyByProperty))
// Ожидаемый результат:
//
//

//
// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]
//
//
// Напишите функцию JavaScript, которая сортирует массив чисел в порядке убывания
//
// Ожидаемый результат:
//
//
//   let numbers = [5, 2, 8, 1, 4];
//
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]
//
//
// map():
//
// •	Отформатируйте data в массив объектов с такими вот св-ми
//
//   [
//   { value: 1, label: 'Option 1' },
//     { value: 2, label: 'Option 2' },
//     { value: 3, label: 'Option 3' }
//   ]
//
//
// Исходный массив:
//
//   let data = [
//     { value: 1, name: 'Option 1' },
//     { value: 2, name: 'Option 2' },
//     { value: 3, name: 'Option 3' },
//   ];

// Ожидаемый результат:
//
//
// const  formattedData = (data) => {
//   const res = data.map(el => {
//     el.label = el.name
//     delete el.name
//     return  el
//     })
//    return res
// }
//   console.log(formattedData(data)); // [
//   { value: 1, label: 'Option 1' },
// { value: 2, label: 'Option 2' },
// { value: 3, label: 'Option 3' }
// // ]
// •	У вас есть массив объектов, и вы хотите добавить к каждому объекту новое свойство на основе
// существующих данных. Этим свойством будет discountPrice, где значение будет вычисляться таким образом price * 0.9
// Исходный массив:
// let products = [
//   { id: 1, name: 'Apple', price: 1.99 },
//   { id: 2, name: 'Banana', price: 0.99 },
//   { id: 3, name: 'Orange', price: 2.49 },
// ];
// const productsWithDiscount = (products) => {
//   const res = products.map(el => {
//   return {...el, "discountedPrice": el.price * 0.9}
//   })
//   return res
// }
// // // Ожидаемый результат:
//   console.log(productsWithDiscount(products)); // [
// //   { id: 1, name: 'Apple', price: 1.99, discountedPrice: 1.791 },
// //   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
// //   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// // ]
//
//
// let a = 5
// let b = 3
//  // [a, b] = [b, a]
// a = a + b // 8
// b = a - b // 5
// a = a - b // 3
// console.log(a)
// console.log(b)

// const arr22 = [
//   [ 0, 1, 2, 3, 45 ],
//   [ 10,11,12,13,14 ],
//   [ 20,21,22,23,24 ],
//   [ 30,31,32,33,34 ]
// ]
// console.log(arr22.length -1)
// function toCsvText(arr) {
//   return arr.reduce((acc, el, i) => {
//     if (i === arr.length -1) {
//       return acc + el.join()
//     } else {
//       return acc + el.join() + "\n"
//     }
//
//   }," ")
// }
//
// console.log(toCsvText(arr22))

// console.log(arr22.join("\n"))


//
// Дополнительные задачки:
//
//   •	Напишите функцию, которая определяет, является ли переданная строка палиндромом. Палиндромом считается строка, которая читается одинаково как слева направо, так и справа налево(split, reverse, join)
//
//
// // Ожидаемый результат:
// console.log(isPalindrome('level')); // Вернет true
// console.log(isPalindrome('racecar')); // Вернет true
// console.log(isPalindrome('hello')); // Вернет false
//
//
//
// •	Выведите все дублирующиеся элементы массива(filter, indexOf)
//
// например исходный массив
//
// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
//
// ожидаемый результат
//
//
// console.log(removeDublicates(arr));//[ 1, 9 ]
//
//
// •	Напишите функцию JavaScript для сортировки массива объектов по определенному свойству в порядке возрастания, используя метод Array.prototype.sort()(тут кастомная сортировка придется чуть-чуть поискать и подумать)
//
// Пример
//
//
// const persons = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
// ];
//
// console.log(sortByProperty(persons, 'age'));
// // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
//
//
//
//
//
//
//
//
// ОТВЕТЫ НА ЗАДАЧИ
//
//
//
// //1 PUSH
// let fruits = ['apple', 'banana', 'orange'];
//
// fruits.push('grape', 'kiwi');
// console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape', 'kiwi']
//
// //2 POP
//
// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
// ];
//
// let lastUser = users.pop();
//
// console.log(lastUser); // { id: 4, name: 'Donald', isStudent: false }
// console.log(users); // [ { id: 1, name: 'Bob', isStudent: true },  { id: 2, name: 'Alex', isStudent: true },{ id: 3, name: 'Ann', isStudent: true }]
//
// //3 SHIFT
//
// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
// ];
//
// const firstUser = users.shift();
//
// console.log(firstUser); // { id: 1, name: 'Bob', isStudent: true }
// console.log(users); // [{ id: 2, name: 'Alex', isStudent: true },  { id: 3, name: 'Ann', isStudent: true },  { id: 4, name: 'Donald', isStudent: false }]
//
// //4 UNSHIFT
//
// const users = [
//   {
//     id: 1,
//     name: 'Bob',
//     isStudent: true,
//   },
//   {
//     id: 2,
//     name: 'Alex',
//     isStudent: true,
//   },
//   {
//     id: 3,
//     name: 'Ann',
//     isStudent: true,
//   },
//   {
//     id: 4,
//     name: 'Donald',
//     isStudent: false,
//   },
// ];
//
// users.unshift({ id: 0, name: 'TestName', isStudent: false });
//
// console.log(users); //[
// //     { id: 0, name: 'TestName', isStudent: false },
// //     { id: 1, name: 'Bob', isStudent: true },
// //     { id: 2, name: 'Alex', isStudent: true },
// //     { id: 3, name: 'Ann', isStudent: true },
// //     { id: 4, name: 'Donald', isStudent: false }
// //   ]
//
// //5 reverse
//
// const str = 'JavaScript is awesome';
//
// const res = str.split(' ').reverse().join(' ');
//
// console.log(res); // awesome is JavaScript
//
// //6 concat
//
// function mergeArrays(arr1, arr2) {
//   let mergedArray = arr1.concat(arr2);
//   return mergedArray;
// }
//
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi'])); // Output: ["apple", "banana", "orange", "kiwi"]
//
// //7 flat
//
// function flattenArray(arr) {
//   let flattenedArray = arr.flat(Infinity);
//   return flattenedArray;
// }
//
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
//
// //8 forEach()
//
// function calculateSquare(arr) {
//   arr.forEach(function (num) {
//     let square = num * num;
//     console.log(`${num} squared is ${square}`);
//   });
// }
//
// calculateSquare([1, 2, 3, 4, 5]);
// // 1 squared is 1
// // 2 squared is 4
// // 3 squared is 9
// // 4 squared is 16
// // 5 squared is 25
//
// //9 find()
//
// function findFirstElement(arr, condition) {
//   return arr.find(condition);
// }
//
// let numbers = [10, 20, 30, 40, 50];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"
//
// //10 includes()
//
// function checkElement(arr, element) {
//   return arr.includes(element);
// }
//
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false
//
// //11 filter
//
// function filterGreaterThan(arr, value) {
//   return arr.filter((num) => num > value);
// }
//
// let numbers1 = [10, 20, 30, 40, 50];
// let numbers2 = [5, 15, 25, 35, 45];
//
// console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
// console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]
//
// //12 sort
//
// function sortAlphabeticallyByProperty(arr, property) {
//   return arr.sort((a, b) => a[property].localeCompare(b[property]));
// }
//
// let people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 },
// ];
//
// console.log(sortAlphabeticallyByProperty(people, 'name')); // [ { name: 'Alice', age: 25 },{ name: 'Bob', age: 35 },{ name: 'John', age: 30 }]
//
// //SORT SECOND TASK
//
// function sortDescending(arr) {
//   return arr.sort((a, b) => b - a);
// }
//
// let numbers = [5, 2, 8, 1, 4];
//
// console.log(sortDescending(numbers)); // Output: [8, 5, 4, 2, 1]
//
// //map
//
// let data = [
//   { value: 1, name: 'Option 1' },
//   { value: 2, name: 'Option 2' },
//   { value: 3, name: 'Option 3' },
// ];
//
// let formattedData = data.map((item) => {
//   return {
//     value: item.value,
//     label: item.name,
//   };
// });
//
// console.log(formattedData); // [
// //   { value: 1, label: 'Option 1' },
// // { value: 2, label: 'Option 2' },
// // { value: 3, label: 'Option 3' }
// // ]
//
// //// MAP SECOND TASK
//
// let products = [
//   { id: 1, name: 'Apple', price: 1.99 },
//   { id: 2, name: 'Banana', price: 0.99 },
//   { id: 3, name: 'Orange', price: 2.49 },
// ];
//
// let productsWithDiscount = products.map((product) => {
//   return {
//     ...product,
//     discountedPrice: product.price * 0.9,
//   };
// });
//
// console.log(productsWithDiscount); // [
// //   { id: 1, name: 'Apple', price: 1.99, с: 1.791 },
// //   { id: 2, name: 'Banana', price: 0.99, discountedPrice: 0.891 },
// //   { id: 3, name: 'Orange', price: 2.49, discountedPrice: 2.241 }
// // ]
//
//
//
// Дополнительные задачки ответы:
//
//
//   1)
//
// function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }
//
// // Ожидаемый результат:
// console.log(isPalindrome('level')); // Вернет true
// console.log(isPalindrome('racecar')); // Вернет true
// console.log(isPalindrome('hello')); // Вернет false
//
//
//
// 2)
//
// let arr = [1, 1, 5, 6, 7, 8, 9, 9, 3, 4, 0, 19];
//
// function removeDublicates(arr) {
//   let result = arr.filter((item, index) => {
//     return arr.indexOf(item) !== index;
//   });
//
//   return result;
// }
//
// console.log(removeDublicates(arr));//[ 1, 9 ]
//
//
// 3)
//
// function sortByProperty(arr, property) {
//   return arr.sort((a, b) => a[property] - b[property]);
// }
//
// const persons = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 },
// ];
//
// console.log(sortByProperty(persons, 'age'));
// // [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
//

// const words = ['hello', 'world', 'this', 'is', 'great'];
//
// function smash (words) {
//   return words.join(" ")
// };
// console.log(smash(words))
//
// Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание. Пустые массивы должны возвращать 0.
// const array1 = [1, 2, 3, 4, 5]
// const array2 = []
//
// function findAverage(array) {
//   if (array.length === 0) return 0
//   const res = array.reduce((a, b) => (a + b)) / array.length
//   return res
// }
//
// // console.log(!![])
// // array.reduce((a, b) => (a + b)) / array.length
// console.log(findAverage(array2))
//
// Завершите функцию square sum так, чтобы она возводила в квадрат каждое переданное
// ей число, а затем суммировала результаты.
//
//  Например, для [1, 2, 2] должно быть возвращено 9, потому что
// const arr22 = [0, 3, 4, 5]
// function squareSum(numbers){
//   if (numbers.length === 0) return 0
//   const res = numbers.map(el => {
//     const sum = el * el
//     return sum
//   })
// return res.reduce((a, b) => (a + b))
// }
//
// console.log(squareSum(arr22))

// Ваши одноклассники попросили вас скопировать для них некоторые документы.
// Вы знаете, что есть n одноклассников, а в документах m страниц.
//   Ваша задача - подсчитать, сколько чистых страниц вам нужно.
//   Если n < 0 или m < 0, верните 0.

// function paperwork(n, m) {
// if(n <= 0 || m < 0) return 0
//   return n * m
// }
//
// console.log(paperwork(-5, 5))
//
// Создайте функцию, которая всегда возвращает значение True/истинность
// для каждого элемента в заданном списке.
// Однако, если элементом является слово "flick", переключитесь на то,
// чтобы всегда возвращать противоположное логическое значение.
// const arr88 = ['codewars', 'flick', 'code', 'wars'] //[True, False, False, False]
// const arr89 =  ['flick', 'chocolate', 'adventure', 'sunshine']//[False, False, False, False]
// const arr83 =  ['bicycle', 'jarmony', 'flick', 'sheep', 'flick']//[True, True, False, False, True]
// function flickSwitch(arr){
// let flick = true;
//   return arr.map(el => el == 'flick' ? flick = !flick : flick)
// }
// console.log(flickSwitch(arr88))


// function flickSwitch(arr){
//   const newArr = []
//   let a = true
//   arr.forEach(el => {
//     if(el == 'flick') {
//       a = !a
//     }
//     newArr.push(a)
//   })
// return newArr
// }
//
// let a = 1;
// let b = 2;
// console.log(a)
// [a, b] = [b, a];
// console.log(a)

// let a = true
// a = !a
// console.log(a)

// Создайте боевую функцию, которая принимает текущее здоровье игрока
// и количество полученного урона и возвращает новое здоровье игрока.
// Здоровье не может быть меньше 0.

// function combat(health, damage) {
// const res = health - damage
// return res < 0 ? 0 : res
// }
//
// console.log(combat(100, 5))

// Напишите простую функцию, которая принимает в качестве параметра объект даты
// и возвращает логическое значение, указывающее, сегодняшняя дата или нет.
// Убедитесь, что ваша функция не возвращает ложное срабатывание, проверяя только день.

// function isToday(date) {
// return new Date() === date ? true : false
// }
//
//
// console.log(isToday(new Date()))
//

// Если задан массив, добавьте все числовые элементы и верните двоичный эквивалент этой суммы;
// чтобы код был безупречен, все, что угодно, кроме числа, должно быть добавлено как 0,
// поскольку оно не может быть добавлено.
// Если ваш язык может обрабатывать двоичные файлы с плавающей точкой,
// предположите, что массив не будет содержать float или doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'
//
// ПРИМЕЧАНИЕ: NaN также является числом в javascript для десятичной, двоичной и n-арной базы

// function arr2bin(arr){
// return
// }
//
// console.log(arr2bin())

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0»,
// а любую цифру от 5 и выше на «1». Верните полученную строку.
// Примечание: ввод никогда не будет пустой строкой.
// const str = "32357895345677213"
// function fakeBin(x){
//  const newStr = x.split("").map(Number => Number >= 5 ? Number = 1 : Number = 0)
//   return newStr.join("")
// }
//
// console.log(fakeBin(str))

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
//   Например:
// Учитывая [34, 15, 88, 2], ваше решение вернет значение 2
// Учитывая [34, -345, -1, 100], ваше решение вернет значение -345
// Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.

// function findSmallestInt(arr) {
//   const sortNew = ((a,b) => {return a - b})
//   const res = arr.sort(sortNew)
// return res[0]
// }
// const findSmallestInt = arr => Math.min(...arr)
// console.log(findSmallestInt([-10, 34, 15, 88, 2]))

// Я новичок в программировании и теперь хочу получить сумму двух массивов...
// Фактически сумму всех их элементов. Я буду признателен за вашу помощь. P.S.
// Каждый массив содержит только целые числа. Выходные данные тоже являются числом.
// const arr11 = [1, 2, 3]
// const arr22 = [4, 5, 6]
//
// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce((a, b) => (a + b))
// }
//
// console.log(arrayPlusArray(arr11, arr22))

// Вы спрашиваете маленькую девочку: "Сколько тебе лет?" Она всегда отвечает: "x лет",
// где x - случайное число от 0 до 9.
// Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
// Предположим, что тестовая строка ввода всегда является допустимой. Например,
// тестовым вводом может быть "1 год" или "5 лет". Первым символом в строке всегда является число.
// const inputString = "4 years old"
//
// function getAge(inputString){
// // const x1 = inputString.charAt(0)
// //   if (x1 == x1) {
// //     return x1
// //   }
//   return inputString.charAt(0)
// }
// // const x1 = Math.floor(Math.random() * 10)
// // console.log(inputString.charAt(0))
// console.log(getAge(inputString))
//


// const name1 = "Oleg"
// const age = 39
// const str = `Hello ${name1}, age: ${age}`
// console.log(str)
//

// Камень ножницы Бумага Давайте играть! Вы должны вернуть,
// какой игрок выиграл! В случае ничьей верните Draw!.
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return "Draw!"
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return "Player 1 won!"
//   } else if (p1 == "scissors" && p2 == "rock") {
//     return "Player 2 won!"
//   } else if (p1 == "paper" && p2 == "rock") {
//     return "Player 1 won!"
//   } else if (p1 == "paper" && p2 == "scissors") {
//     return "Player 2 won!"
//   } else if (p1 == "rock" && p2 == "scissors") {
//     return "Player 1 won!"
//   } else if (p1 == "rock" && p2 == "paper") {
//     return "Player 2 won!"
//   }
// };

// console.log(rps("scissors", "rock"))

// Создайте функцию, которая принимает на вход два целых числа в виде
// строки и выводит сумму (также в виде строки):

// function sumStr(a,b) {
//   return (Number(a) + Number(b)).toString()
// }
//
// console.log(sumStr("34","5"))

// Завершите решение так, чтобы оно перевернуло переданную в него строку.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// function solution(str){
// return str.split('').reverse().join('')
// }
//
// console.log(solution('world'))