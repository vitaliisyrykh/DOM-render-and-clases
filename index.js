/* 'use strict'

class User {
  constructor (name, surName, age){
    this.name = name;
    this.surName = surName;
    this.age = age;

  }
  set name(n){
    if(typeof n ==='number'){
      throw new TypeError('Data must be a numbers')
    }
    this._name = n;
  }

  get name(){
    this._name
  }

  set surName(sn){
    if(typeof sn ==='number'){
      throw new TypeError('Data must be a numbers')
    }
    this._name = sn;
  }
  
  
  set fullName(){
    
    return this._fullName = `${this.name} ${this.surName}`
  }
  get fullName(){
    this._fullName;
  }

  static isAdult(obj){
    return obj._isAdult = obj.age >= 18;
  }

  get isAdult(){
    return this._isAdult
  }
  static isUser(obj){
    return obj instanceof User;
  }
}

class Woker{
  constructor(name,surName,dayAtWork=0,salary){
    this.name = name;
    this.surName = surName;
    this.dayAtWork = dayAtWork;
    this.salary = salary;
  }
  getSalary(){
    return this.dayAtWork * this.salary
  }
    
}

const worker1 = new Woker('Ivan','Ivanovich',20,30);
console.log(worker.salaryForAllDays()); 

 class Fuel {
  constructor(volume=0, denisty=0) {
    this.volume = volume;
    this.density = denisty;
  }
  set volume(v){
    if(typeof v !=='number'){
      throw new TypeError('Data must be a numbers')
    }
    this._volume = v;
  }
  
  get volume(){
    this._volume;
  }
  
  set density(v){
    if(typeof v !=='number'){
      throw new TypeError('Data must be a numbers')
    }
    this._density = v;
  }
  
  get density(){
    this._density
  }
  
 
  
  get weight(){
    return this.volume * this.denisty;
  }
}

class Car{
  constructor (model,weight=0, fuel){
    this.model = model;
    this.weight = weight;
    this.fuel = fuel;
    
  }
  getSumWeight(){
   return this.weight + this.fuel.getWeight();
  }
}
const car = new Car('zaz',1000, new Fuel(100,50));

console.log(car.getSumWeight()); 

class Friend {
  constructor(name, appleAmount, ...friends) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friends= friends;
  }
  countApple(){
    return this.appleAmount + this.friends.keys(appleAmount);
  }
}
 const oleg = new Friend('Oleg',20);
 const ivan = new Friend('Ivan',10,oleg);

console.log(ivan.countApple()); */

//=============================================================================

class User {
  constructor(login, email, age, isBanned = false) {
    this.login = login;
    this.email = email;
    this.age = age;
    this.isBanned = isBanned;
  }
  set isBanned(v) {
    
    this._isBanned = v;
  }
  get isBanned() {
    return this._isBanned;
  }
}

class Admin extends User {
  
  constructor(login, email, age) {
    super(login, email, age);
  }
  
  ban(user) {
    if (user instanceof User) {
      user.isBanned = true;
    }
    return TypeError('enter right');
  }
  
  unBan(user) {
    if (user instanceof User) {
      user.isBanned = false;
    }
    return TypeError('enter right');
  }

  toggleBan(user){
    if (user instanceof User) {
    user.isBanned = !user.isBanned;
    }
    return TypeError('enter right');
  }
}

const oleg = new User("login", "mail", 24);
const admin = new Admin("admLogin", "emailAdmin", 32);


admin.ban(oleg);
console.log(oleg);

