/* "use strict";
const cat ={
  color: 'grey',
  breed: 'spinx',
  age:8,
  isMale: true,
  name:'Kasya',
  meow: function(){
    return 'meow!!!'
  }
}

const cat2 ={
  color: 'black',
  breed: 'persia',
  age:5,
  isMale: false,
  name:'Oleg',
  jump: function(){
    return 'cat jumping'
  }
}

const cat3 ={
  color: 'black & white',
  breed: 'street cat',
  age:2,
  isMale: true,
  name:'Mura',
  eat:function(){
    return 'cat eating'
  }
}

function Dog (name, color, age, breed){
  this.name = name;
  this.furColor = color;
  this.age = age;
  this.breed = breed;
  this.gav = function(){
    return 'gav';
  }
}
const newDog = new Dog ('oleg', 'black', 10, 'breed'); */

function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.sayHello = function () {
    return "Hello!!";
  };
}

const newUser = new User("Oleg", "Ivanovich", 25);
const newUser2 = new User("Oxana", "Ivanovich", 10);
const newUser3 = new User("Ivan", "Dobryi", 30);
const newUser4 = new User("Alex", "Dudkov", 25);

console.log(newUser.sayHello());
console.log(newUser2.sayHello());
console.log(newUser3.sayHello());
console.log(newUser4.sayHello());

function Countrys(name, square, population) {
  this.name = name;
  this.square = square;
  this.population = population;
  /* this.populationDenisty = populationDenistyMet(); */
    this.populationDenistyMet = function () {
    return this.population / this.square;
  };
}

const country1 = new Countrys("ukraine", 48500, 3000,);

console.log(country1)

function Auto(name,speed){
  this.name = name;
  this.speed = speed;
  this.accelerate = function(plusSpeed){
    return this.speed = this.speed + plusSpeed;
  }
   this.deaccelerate = function(minusSpeed){
     return this.speed = this.speed - minusSpeed;
   }
   this.stop = function(){
     return this.speed = 0;
   }
}

const zaz = new Auto ('zaz', 20);
const bmw = new Auto ('bmw', 30);
const audi = new Auto ('audi', 50);
