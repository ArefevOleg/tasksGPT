// Создайте функцию, которая принимает целое число в
// качестве аргумента и возвращает "Четное" для четных чисел или "Нечетное"
// для нечетных чисел.

// Function declaration

function calculateNumber(initialValue) {
  // initialValue - параметр функции типа number можно передать колбэк
  let x = initialValue;
  x = x + 100;
  x = x / 5;

  return x;
}

const result = calculateNumber(5334535);
const result1 = calculateNumber(5335);
// console.log(result);
// console.log(result1);

function calculateCercleArea(cercleRadius) {
  // initialValue - параметр функции типа number
  return 3.14 * cercleRadius ** 2; // параметр - это переменная
} // функция может принимать сколько угодно параметров

const cercleArea1 = calculateCercleArea(6); // (6) - это аргумент (значение переменной, которе мы передаем в функцию)
// console.log(cercleArea1);

const cercleArea2 = calculateCercleArea(16.2);
// console.log(cercleArea2);

function createHTMLElement(tag = "button", text = "отправить", id = null) {
  // нужно сохранять порядок записи параметров
  const element = document.createElement(tag);
  if (id) {
    // если id не null или undefined то присваиваем элементу id
    element.id = id;
  }
  element.innerHTML = text;

  return element;
}

const h1element = createHTMLElement("h1", "просто текст"); // аргументы идут в такомже порядке как и параметры
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
  { name: "Олег", age: 15, budget: 20000 },
  { name: "Алексей", age: 15, budget: 3400 },
  { name: "Михаил", age: 15, budget: 5600 },
  { name: "Екатерина", age: 15, budget: 7000 },
  { name: "Вадим", age: 15, budget: 4500 },
  { name: "Елена", age: 15, budget: 8200 },
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



const arr1 = [1,2,3,4,5];

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







