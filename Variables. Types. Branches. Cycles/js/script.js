// let num = prompt("введите число");
// num = Number(num);
// let subnum = prompt("введите степень");
// subnum = Number(subnum);
// const res = Math.pow(num, subnum);
// console.log(num, subnum);
// console.log(typeof res);
// console.log(res);
// //
//
// const colors = ["red", "green", "orange", "blue"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// const elemColor = document.querySelector(".text");
// //elemColor.style.color = color;
// document.body.style.backgroundColor = color;
// //

// const textX = "Галина";
// const textY = "Петровна";
// const textZ = "VIP";
// const numQ = 12;
// const result = `Гость ${textX} ${textY} поселяэтся в ${textZ} номер ${numQ}`;
// console.log(result);
//
// const textX = "Галина";
// const textY = "Петровна";
// const textZ = "VIP";
// let numQ = "12";
// numQ = Number(numQ);
// console.log(typeof numQ);
// const result = `Гость ${textX} ${textY} поселяэтся в ${textZ} номер ${numQ}`;
// console.log(result);
//
// let textX = prompt("введите имя");
// let textY = prompt("введите фамилию");
// let textZ = prompt("введите категорию розкоши");
// let numQ = prompt("введите название номера");
// console.log(typeof numQ);
// const result = `Гость ${textX} ${textY} поселяэтся в ${textZ} номер ${numQ}`;
// let resLoCase = result.toLowerCase();
// //let resUpCase = result[0] + result.toUpperCase().slice(1);
// console.log(result);
// console.log(resLoCase);
// console.log(resUpCase);
//
// const textPro = "pro";
// const textFree = "free";
// const textVip = "vip";
// const res = "pro" === textPro || "vip" === textPro;
// console.log(res);
///*

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 10000;
// const payment = 2000;
// console.log(
//   `загальна сумма замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на балансі`
// );
// if (payment < balance) {
//   const res = balance - payment;
//   console.log(`На рахунку залишилось ${res} кредитів`);
//   console.log("Все добре, знімаэмо кошти з рахунку... Дякуэмо за покупку");
// } else if (payment > balance) {
//   console.log("На рахунку недостатньо коштів для проведення операції");
//   console.log("Операція завершилась");
// } else {
//   console.log("Операція завершилась");
// }
//// 'Все хорошо, снимаем деньги... Спасибо за покупку!'
/*
 *
 *
 *
 *
 *
 *
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'

const totalSpent = 2000; //Общая сумма потраченного
let payment = 500; //Сумма текущего платежа
let discount = 0; //Скидка

//let num = prompt("введите сумма текущего платежа");

if (totalSpent > 100 && totalSpent < 1000) {
  let discount = 2;
  const discounts = discount / 100;
  let res = totalSpent - totalSpent * discounts;
  console.log(`Оформляем заказ на сумму ${res} со скидкой ${discount}%`);
} else if (totalSpent > 1000 && totalSpent < 5000) {
  const discount = 5;
  const discounts = discount / 100;
  let res = totalSpent - totalSpent * discounts;
  console.log(`Оформляем заказ на сумму ${res} со скидкой ${discount}%`);
} else if (totalSpent >= 5000) {
  let discount = 10;
  const discounts = discount / 100;
  let res = totalSpent - totalSpent * discounts;
  console.log(`Оформляем заказ на сумму ${res} со скидкой ${discount}%`);
} else {
  totalSpent < 100;
  console.log("У вас еще нет партнерской скидки. Операція завершилась");
}
