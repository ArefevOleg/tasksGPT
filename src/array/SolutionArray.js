
// Создаем пустой массив
let randomArray = [];

// Заполняем массив случайными числами от 0 до 99 (можно изменить диапазон по вашему усмотрению)
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
    randomArray.push(randomNumber); // Добавляем случайное число в массив
}

console.log(randomArray); // Выводим массив случайных чисел в консоль