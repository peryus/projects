'use strict';

/*
 * #1
 *
 * Створіть функцію, яка повертає функцію counter
 * має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */
function mainCounter() {
  let counter = 0;

  const step = function (n) {
    if (n !== undefined) {
      counter = n;
      return counter;
    }

    counter = counter + 1;
    return counter;
  };

  return step;
}

const counter = mainCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log(counter(0)); // 0
console.log(counter()); // 1
console.log(counter()); // 2

/*
 * #2
 *
 * Створіть функцію, яка повертає counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */

const createCounterFactory = function () {
  let count = 0;

  return {
    value(n) {
      if (n !== undefined) count = n;
      return count;
    },

    increment() {
      count++;
    },

    decrement() {
      count--;
    }
  };
};

const counterFactory = createCounterFactory();

console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201
