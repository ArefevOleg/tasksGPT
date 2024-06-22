// Создайте функцию, которая принимает строку
// и один символ и возвращает целое число вхождений
// второго аргумента в первый. Если вхождений не обнаружено,
// должно быть возвращено значение 0.

// function strCount(str, letter){
//   //code here
//   let numb = 0
//   str.split("").forEach(el => el === letter ? numb = numb + 1 : "")
//   return numb
// }
//
// console.log(strCount('Hello', 'o'))//, 1);
///////////////
// Учитывая две строки, a и b, верните строку вида short+long+short,
// где более короткая строка находится снаружи, а более длинная — внутри.
// Строки не будут одинаковой длины, но могут быть пустыми (нулевая длина).
// Подсказка для пользователей R: Длина строки не всегда совпадает с количеством символов.
// For example: (Input1, Input2) --> output
//
// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// function solution(a, b) {
//   // your code here
// }

///////////////////
// Алексу только что купили новый обруч, он в восторге от него,
// но чувствует себя обескураженным, потому что его младший брат лучше его.
//   Напишите программу, в которую Алекс сможет ввести (n) количество оборотов обруча,
//   и она отправит ему ободряющее сообщение:
//   Если Алекс соберет 10 или более обручей, верните строку "Great, now move on to tricks"
//   Если он не соберет 10 обручей, верните строку "Keep at it until you get it"

// function hoopCount(n) {
//   if (n > 10) {
//     return "Great, now move on to tricks"
//   } else  {
//     return "Keep at it until you get it"
//   }
// }

// function hoopCount(n) {
//   return n >= 10 ?  "Great, now move on to tricks" : "Keep at it until you get it"
// }
//
//
// console.log(hoopCount(3))

// let rows = ["Naomi", "Quincy", "CamperChan"];
// rows.push("Hello")
// console.log(rows)
function getASCIIChar(num) {
  return String.fromCharCode(num);
}

console.log(getASCIIChar(65)); // выведет "A"