// создает масив от и до
// TODO початкове значення параметра step можемо записати
// у вигляді числа step = start < end ? 1 : -1
const range = (start, end, step = null) => {
  let m = [];
  // TODO давай спробуємо відрефакторити цикл. Значення змінної "i" 
  // будемо збільшувати не на i++, а на step
  // тобто буде for(let i = start; i <= end; i += step).
  for (let i = start; i <= end; i++) {
    if (step !== null) {
      if (step) i % step ? m.push(i) : null;
      if (step < 0) m.unshift(i);
    } else m.push(i);
  }
  return m;
};

// возвращает сумму масива
const sum = (array) => array.reduce((a, e) => a + e, 0);

// масив в список
const arrayToList = (array) =>
  array.length != 0
    // TODO Тут все круто. Але мені поки що не зрозуміло навіщо використовуєш || null?
    // Можливо в ньому немає потреби?
    ? { value: array[0], rest: arrayToList(array.slice(1)) || null }
    : null;

//список в масив
const listToArray = (list) =>
  list ? [list.value].concat(listToArray(list.rest)) : [];

//console.log(arrayToList([10,20,30]))

const prepend = (element, list) => ({ value: element, rest: list });

//console.log(prepend(10, arrayToList([20,30,40])));

// TODO давай спробуємо реалізувати функцію nth без використання listToArray
const nth = (list, index) => listToArray(list)[index];

//console.log(nth(arrayToList([10,20,30]),1))

// глибоке порiвняння обьектов
const deepEqual = (a, b) => {
  if (a !== null && b !== null) {
    // решаем проблему с null == object
    if (typeof a == "object" && typeof b == "object") {
      let keyA = Object.keys(a);
      let keyB = Object.keys(b);
      if (keyA.length !== keyB.length) return false;

      for (let key of keyA) {
        if (!deepEqual(a[key], b[key])) return false;
      }
    } else return a == b;
  }
  return true;
};

let o1 = {
  a: { e: { p: { a1: 1 } }, d: { a2: 2 } },
  b: { j: { z: 4, x: 3 }, h: { u: 9 } },
  c: { t: { n: 34, v: { r: 45 } }, f: { io: { d: 3, yu: 4 } } },
  d: { s: { k: 3 }, y: { i: { i2: 22, y: { t: { tt: 99 } } } } },
};

let o2 = {
  a: { e: { p: { a1: 1 } }, d: { a2: 2 } },
  b: { j: { z: 4, x: 3 }, h: { u: 9 } },
  c: { t: { n: 34, v: { r: 45 } }, f: { io: { d: 3, yu: 4 } } },
  d: { s: { k: 3 }, y: { i: { i2: 22, y: { t: { tt: 99 } } } } },
};

console.log(deepEqual(o1, o2));

const summ = (number) => {
  return function (x) {
    return number * x;
  };
};
const summ2 = summ(3);
console.log(summ2(3));

const createMultiplier = (n) => (m) => n * m;

const multiplyBy2 = createMultiplier(2);

//console.log(multiplyBy2(100));

let m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const inBetween = (a, b) => (x) => x >= a && x <= b;
const inArray = (array) => (x) => array.includes(x);

//console.log(m.filter(inArray([3, 5, 10])));

const student = [
  { name: "Максим", age: 17, surname: "Іваничук" },
  { name: "Артем", age: 19, surname: "Писаренко" },
  { name: "Петро", age: 18, surname: "Петренко" },
];

// TODO функція написана правильно,можна попрацювати над назвами змінних
const byField = (x) => (a, b) => a[x] > b[x] ? 1 : -1;

// console.log(student.sort(byField("age")));

const createLimitedFunction = (fn, limit) => (x) => x <= limit ? fn(x) : null;

// TODO З одним аргументом працює чудово.
// Давай зробимо так, щоб функція працювала з будь-якою кількістю аргументів
// Наприклад const limitedFn = createLimitedFunction((name, surname) => console.log(`Hello ${name} ${surname}!`), 2);
const limitedFn = createLimitedFunction((x) => console.log(2 * x), 2);

// limitedFn(1);

const createSecret = () => {
  let secret = null;
  return {
    getSecter() {
      return secret;
    },
    setSecret(value) {
      secret = value;
    },
  };
};

// const secret = createSecret();
// secret.setSecret("My secret");

// console.log(secret.getSecter());

// TODO можемо трохи поправити функцію і зробити так
// щоб вона нічого не повертала у випадку multiply(5)(5)
const multiply = (a) => (b) => !b ? a : multiply(a * b);

console.log(multiply(5)(5)());
