"use strict";

<<<<<<< HEAD
const arr = [];

const form = document.getElementById("rootForm");
function createTextNode(text){
  const ul = document.getElementById("rootList");
  const li = document.createElement("li");
  li.append(document.createTextNode(text));
  const button = document.createElement("button");
  button.append(document.createTextNode('delete'))
  li.append(button);
  button.addEventListener("click",(e)=>{
    const {target:textContent,target:parentNode} = e;
    if(arr.some())
    parentNode.remove();
  })
  return ul.append(li)
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      text: { value },
    },
  } = e;
  if(value !== ''){
    arr.push(value);
    createTextNode(value);
    target.reset();
  }return
  
});


=======
/* 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4) */

function getElementSum(n) {
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
    }else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    return (this._name = v);
  }
  get name() {
    return this._name;
  }

  set surName(v) {
    if (typeof v !== "string") {
      throw new TypeError("surname must be a string");
    }else if (v === "") {
      throw new RangeError("please enter somthing");
    }
     (this._surName = v);
  }
  get surName() {
    return this._surName;
  }

  set gender(v) {
    debugger;
    if (typeof v !== "string" || (!GENDER_LIST.includes(v)) {
      throw new TypeError("gender must be a string or male or female");
    }else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    this._gender = v;
  }
  get gender() {
    return this._gender;
  }

  set email(v) {
    if (typeof v !== "string") {
      throw new TypeError("email must be a string");
    }else if (v === "") {
      throw new RangeError("please enter somthing");
    }
     (_email = v);
  }
  get email() {
    return _email;
  }

  set phone(v) {
    if (typeof v !== "number") {
      throw new TypeError("you phone number must be a number");
    }else if (v === "") {
      throw new RangeError("please enter somthing");
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

function evenIndex(arr) {
  const evenIndexArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenIndexArr.push(i);
    }
  }
  return evenIndexArr;
}

function evenValue(arr) {
  const evenValuesArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenValuesArr.push(arr[i]);
    }
  }
  return evenValuesArr;
}

function if0(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}

function sumIndexValue0(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }
  return count;
}

console.log(randomPush(array1));
console.log(evenIndex(array1));
console.log(evenValue(array1));

/* 4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер) */

class Book {
  constructor(avtor, nameBook, yearOfPublished, publishingHouse) {
    this.avtor = avtor;
    this.nameBook = nameBook;
    this.yearOfPublished = yearOfPublished;
    this.publishingHouse = publishingHouse;
  }

  set avtor(v) {
    if (typeof v !== "string") {
      throw new TypeError("avtor must be a string");
    } else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    this._avtor = v;
  }

  get avtor() {
    return this._avtor;
  }

  set nameBook(v) {
    if (typeof v !== "string") {
      throw new TypeError("Name book must be a string");
    } else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    this._nameBook = v;
  }

  get nameBook() {
    return this._nameBook;
  }

  set yearOfPublished(v) {
    if(typeof v !== "number"){
      throw new TypeError("year must be a number")
    }else if(v === ""){
      throw new RangeError("please enter somthing")
    }
    this._yearOfPublished = v;
  }
  get yearOfPublished() {
    return this._yearOfPublished;
  }

  set publishingHouse(v) {
    if (typeof v !== "string") {
      throw new TypeError("Name book must be a string");
    } else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    this._publishingHouse = v;
  }

  get publishingHouse() {
    return this._publishingHouse;
  }
}

const FORMAT_BOOK = ['EPUB','PDF'];

class EBook extends Book{
  constructor(avtor, nameBook, yearOfPublished, publishingHouse, format, eNumber){
    super(avtor, nameBook, yearOfPublished, publishingHouse);
    this.format = format;
    this.eNumber = eNumber;
  }

  set format (v){
    if(!FORMAT_BOOK.includes(v)){
      throw new TypeError("You enter wrong  type book")
    }else if (v === "") {
      throw new RangeError("please enter somthing");
    }
    this._format = v;
  }
  get format() {
    return this._format;
  }

  set eNumber(v) {
    if(typeof v !== "number"){
      throw new TypeError("year must be a number")
    }else if(v === ""){
      throw new RangeError("please enter somthing")
    }
    this._eNumber = v;
  }
  get eNumber() {
    return this._eNumber;
  }
}


const garryPotterEBook = new EBook('J.K. Rowling', 'Garry Potter', 1997, 'Bloomsbury Publishing','PDF', 4654213);

const rayBradberyBook = new Book('Ray Bradberry', '451 of farengeit', 1956, 'some house');

/* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; */

function getSome(n){
  for(let i = 0; i <= n; i++){
    
    if([i]%3 === 0 || [i]%5 === 0){
     i = "flizzBuzz"
    }
    console.log(i);
  }
}
>>>>>>> c36823387eb6a98b8e00bd2ff62a7c9c76bf98af
