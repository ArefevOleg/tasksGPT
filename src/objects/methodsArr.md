# array methods:
```javascript
push()//мутабельный// Добавьте один или несколько элементов в конец массива
let fruits = ['apple', 'banana', 'orange'];
let newFruits = ['kiwi', 'melon', 'cherry'];
fruits.push(...newFruits, "lemon")
console.log(fruits)
// ['apple', 'banana', 'orange', 'kiwi', 'melon', 'cherry', 'lemon']
```
```javascript
pop()//мутабельный// удаляет последний элемент в массиве
const days = ['пн', 'вт', 'ср', 'чт']
const lastItem = days.pop()
console.log(days)// ['пн', 'вт', 'ср']
console.log(lastItem)// чт
```
```javascript
shift()//мутабельный// Удаляет первый элемент массива и возвращает значение удалённого элемента.
const numbers = [8, 16, 32, 64]
const firstItem = numbers.shift()
console.log(numbers)// [16, 32, 64]
console.log(firstItem)// 8
```
```javascript
unshift()//мутабельный//Добавляет новые элементы в начало массива
const numbers = [16, 32, 64]
const arrayLength = numbers.unshift(8)
console.log(numbers)// [8, 16, 32, 64]
console.log(arrayLength)// 4
```
```javascript
reverse()//мутабельный//Позволяет обратить порядок элементов в массиве.
const array = [1, 2, 3]
array.reverse()
console.log(array)// [3, 2, 1]
```
```javascript
join()//не мутабельный//Возвращает значения всех элементов массива, объединённых в строку.
const days = ['пн', 'вт', 'ср']
const daysStr = days.join()
console.log(daysStr)// пн,вт,ср
//Объединим массив в строку с использованием разделителя:
const numbers = [2, 12, 85, '06']
console.log(numbers.join('-'))// 2-12-85-06
```
```javascript
concat()//не мутабельный//Возвращает новый массив, полученный при объединении нескольких массивов.
const months = ['март', 'апрель', 'май']
const summer = ['июнь', 'июль', 'август']
const favoriteMonths = months.concat(summer)
console.log(favoriteMonths)
// ['март', 'апрель', 'май', 'июнь', 'июль', 'август']
console.log(months)
// ['март', 'апрель', 'май']
```
```javascript
flat()//не мутабельный//Превращает многомерный массив в плоский, одномерный.
const arr = [1, [2, [3, [4, [5]]]]];
const flat = arr.flat(Infinity) // Infinity раскрывает любую вложенность
console.log(flat) //[1, 2, 3, 4, 5]
```
```javascript
find()// вернёт первый найденный в массиве элемент, который подходит под условие в переданной колбэк-функции.
const arr = ["apple","orange","banana"]
const findFirstElement = (arr) => {
  const res = arr.find(el => { return el.startsWith("o")})
  return res
}
console.log(findFirstElement(arr))// "orange"
```

