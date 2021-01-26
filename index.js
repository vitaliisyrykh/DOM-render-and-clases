"use strict";

/* 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

function getFirstsum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/* 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.
2.2 Создать объект, который содержит свойства, о факультете и кафедре.
2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
2.4 Реализовать функцию выводит на экран всю информацию о студенте */
/* const GENDER_LIST = ["male", "female", "unknown"];

class Faculty {
  constructor(faculty, chair) {
    this.faculty = faculty;
    this.chair = chair;
  }
  set faculty(v) {
    if (typeof v !== "string") {
      throw new TypeError("faculty must be a string");
    }
    return (this._faculty = v);
  }
  get faculty() {
    return this._faculty;
  }

  set chair(v) {
    if (typeof v !== "string") {
      throw new TypeError("chair must be a string");
    }
    return (this._chair = v);
  }

  get chair() {
    return this._chair;
  }
}

class Student extends Faculty {
  constructor(name, surName, gender, email, phone, faculty, chair) {
    super(faculty, chair);
    this.name = name;
    this.surName = surName;
    this.gender = gender;
    this.contacts = {
      email,
      phone,
    };
  }

  set name(v) {
    if (typeof v !== "string") {
      throw new TypeError("name must be a string");
    }
    return (this._name = v);
  }
  get name() {
    return this._name;
  }

  set surName(v) {
    if (typeof v !== "string") {
      throw new TypeError("surname must be a string");
    }
     (this._surName = v);
  }
  get surName() {
    return this._surName;
  }

  set gender(v) {
    debugger;
    if (typeof v !== "string" || !GENDER_LIST.includes(v)) {
      throw new TypeError("gender must be a string or male or female");
    }
    this._gender = v;
  }
  get gender() {
    return this._gender;
  }

  set email(v) {
    if (typeof v !== "string") {
      throw new TypeError("email must be a string");
    }
     (_email = v);
  }
  get email() {
    return _email;
  }

  set phone(v) {
    if (typeof v !== "number") {
      throw new TypeError("you phone number must be a number");
    }
     (_phone = v);
  }

  get phone() {
    return _phone;
  }

  getInfo() {
    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`);
    }
  }
}

const Oleg = new Student(
  "oleg",
  "ivanovich",
  "male",
  "lkajfklj@.com",
  5485245,
  "medic",
  "cardio"
);
const alex = new Student(
  "alex",
  "cosak",
  "allo",
  "lkasfjlk@.com",
  54654,
  "some facult",
  "some chair"
); */

/* 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.1*Инициализация с помощью случайных чисел
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы нулевых элементов (элемент равен нулю)
3.5 Подсчитать количество нулевых элементов */

const array1 = new Array(25);
function randomPush(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 51);
  }
}


function evenIndex(arr){
  const evenIndexArr = new Array;
  for(let i=0; i<arr.length; i++){
    if(i%2=== 0){
      evenIndexArr.push(i);
    }
  }
  return evenIndexArr;
} 

function evenValue(arr){
  const evenValuesArr = new Array;
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2=== 0){
      evenValuesArr.push(arr[i]);
    }
  }
  return evenValuesArr;
} 

function if0 (arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
    console.log(i);
    }
  }
}

console.log(randomPush(array1));
console.log(evenIndex(array1));
console.log(evenValue(array1));