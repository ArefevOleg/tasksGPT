// Пример исходного массива
const numbers = [1, 2, 3, 4, 5];

// Применяем метод map для удвоения каждого элемента
const doubledNumbers = numbers.map((num) => {
    return num * 2;
});

//console.log(doubledNumbers); // Вывод: [2, 4, 6, 8, 10]

const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

// Используем map для получения массива имен
const names = persons.map((person) => {
  return person.name;
});

//console.log(names); // Вывод: ['Alice', 'Bob', 'Charlie']

// const products = [
//   { id: 1, name: 'Телефон', price: 500, quantity: 3 },
//   { id: 2, name: 'Ноутбук', price: 1200, quantity: 0 },
//   { id: 3, name: 'Планшет', price: 300, quantity: 5 }
// ];

// // Используем map для создания нового массива с расширенной информацией о продуктах
// const updatedProducts = products.map((product) => {
//   return {
//       ...product,
//       status: product.quantity > 0 ? 'в наличии' : 'нет в наличии'
//   };
// });

// console.log(updatedProducts);


const products = [
  { id: 1, name: 'Телефон', price: 500, quantity: 3 },
  { id: 2, name: 'Ноутбук', price: 1200, quantity: 0 },
  { id: 3, name: 'Планшет', price: 300, quantity: 5 }
];

// Используем map для создания нового массива с расширенной информацией о продуктах
const updatedProducts = products.map((product) => {
  return {
      ...product,
      status: product.quantity > 0 ? 'в наличии' : 'нет в наличии'
  };
});

console.log(updatedProducts);