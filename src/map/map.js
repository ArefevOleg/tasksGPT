// 1.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// 2.
const names = ["Oleg", "Ekaterina", "Egor", "Ira"];
// Используем метод map для преобразования каждой строки в длину этой строки
const lengthOfNames = names.map((name) => name.length);
// console.log(lengthOfNames); // Вывод: [4, 9, 4, 3]
// names - исходный массив строк ["Oleg", "Ekaterina", "Egor", "Ira"].
// map - метод массива, который выполняет функцию обратного вызова для каждого элемента массива.
// (name) => name.length - коллбэк функция, которая принимает каждый элемент массива names (строку name) и возвращает длину этой строки (name.length).
// Результат выполнения метода map будет новый массив lengthOfNames, содержащий длины каждой строки из исходного массива names:
// Длина строки "Oleg" равна 4.
// Длина строки "Ekaterina" равна 9.
// Длина строки "Egor" равна 4.
// Длина строки "Ira" равна 3.

// 3.
const auto = ["LADA", "HONDA", "KIA", "AUDI"];
const stringtoUpperCase = auto.map((name) => name.toLowerCase());
// console.log(stringtoUpperCase);
// map - метод массива, который применяет функцию обратного вызова ко всем элементам массива.
// (name) => name.toLowerCase() - коллбэк функция, которая принимает каждую строку из массива auto (переменная name) и преобразует её в нижний регистр с помощью метода toLowerCase().
// Результат выполнения метода map будет новый массив stringsToLowerCase, содержащий все строки из исходного массива auto, преобразованные в нижний регистр:
// "LADA" преобразуется в "lada".
// "HONDA" преобразуется в "honda".
// "KIA" преобразуется в "kia".
// "AUDI" преобразуется в "audi".

// 4.
const numbers1 = [123, 212, 345, 5534, 52345];
const stringToString = numbers1.map((num) => num.toString());
// console.log(stringToString);
// map - метод массива, который применяет функцию обратного вызова ко всем элементам массива.
// (num) => num.toString() - коллбэк функция, которая принимает каждое число из массива numbers1 (переменная num) и преобразует его в строковое представление с помощью метода toString().
// Результат выполнения метода map будет новый массив stringNumbers, содержащий строковые представления всех чисел из исходного массива numbers1:
// 123 преобразуется в "123".
// 212 преобразуется в "212".
// 345 преобразуется в "345".
// 5534 преобразуется в "5534".
// 52345 преобразуется в "52345".

// 5.
const objArray = [
  { id: 1, date: 22 },
  { id: 2, date: 56 },
  { id: 3, date: 48 },
];
// Используем метод map для извлечения значений свойства 'id' из каждого объекта
const arr = objArray.map((object) => object.id);
// console.log(arr);

// 6.
const sityname = ["Moscov", "london", "Tokio", "NewYork"];
const sity = sityname.map((name) => name[0]);
// console.log(sity);
// map - метод массива, который применяет функцию обратного вызова ко всем элементам массива.
// (name) => name[0] - коллбэк функция, которая принимает каждую строку из массива sityname (переменная name) и возвращает первый символ этой строки (name[0]).
// Результат выполнения метода map будет новый массив sity, содержащий первые буквы каждой строки из исходного массива sityname:
// "Moscov" преобразуется в "M" (первая буква).
// "london" преобразуется в "l" (первая буква).
// "Tokio" преобразуется в "T" (первая буква).
// "NewYork" преобразуется в "N" (первая буква).

// 7.
const numbers2 = [1, 3, 5, 7, 5, 9];
const objNumbers = numbers2.map((number, isEven) => ({ number, isEven: true }));
// console.log(objNumbers);

// 8.
const objName = [
  { age: 39, name: "Oleg" },
  { age: 22, name: "Egor" },
  { age: 34, name: "Viktor" },
];
const newObjName = objName.map((obj) => obj.name);
// console.log(newObjName);
// map - метод массива, который применяет функцию обратного вызова ко всем элементам массива.
// (obj) => obj.name - коллбэк функция, которая принимает каждый объект из массива objName (переменная obj) и возвращает значение его свойства name.
// Результат выполнения метода map будет новый массив newObjName, содержащий значения свойства name из каждого объекта исходного массива objName:

// { age: 39, name: "Oleg" } преобразуется в "Oleg" (значение свойства name).
// { age: 22, name: "Egor" } преобразуется в "Egor" (значение свойства name).
// { age: 34, name: "Viktor" } преобразуется в "Viktor" (значение свойства name).

// 9.
const dateArr = ['22', '33', '44'];
const newDate = dateArr.map((num) => Number(num))
console.log(newDate);

// 10.
