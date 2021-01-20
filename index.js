'use strict'
 

class Stack {
  constructor(maxSize = 1000, ...args) {
    this._maxSize = maxSize;
    this._size = 0;

    for (const item of args) {
      this.push(item);
    }
  }

  get isEmpty() {
    return this._size === 0;
  }

  get size() {
    return this._size;
  }

  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack overflow');
    }
    this[`_${this._size++}`] = value;
    return this._size;
  }

  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${--this._size}`];
    delete this[`_${this._size}`];
    return lastItem;
  }

  pick() {
    if (this.isEmpty) {
      return;
    }

    return this[`${this._size - 1}`];
  }
}

const stack = new Stack();


const checkSequence = (str)=>{
  const stack = new Stack();
  for(let i = 0; i < str.length; i++){
    if(str[i]=== '(' || str[i] === '['){
      stack.push(str[i]);
    } if (stack.isEmpty) {
      return false;
    }else if(stack._size === ')' ){
      stack.pop();
    }else if (stack.pick() === '[' && stack._size === ']'){
      stack.pop();
    }
    
  }

  return stack.isEmpty;
}



const string = "(((()[)))]"

console.log(checkSequence(string));  

 class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;

    for(const item of args){
      this.push(item);
    }
  }
  get size() {
    return this._tail - this._head;
  }

  push(value) {
    this[this._tail++] = value;
    return this.size;
  }

  pop() {
    const lastItem = this[this._head];
    delete this[this._head++];

    return lastItem;
  }
}

const q1 = new Queue(1,3,5);
const q2 = new Queue(2,4,6);

function mergeQueues (...arg){
  const result = new Queue();

    while(q1._size || q2._size ){
      if(q1._size){
        const buffer = q1.pop();
        result.push(buffer); 
      }
      if(q2._size){
        const buffer = q2.pop();
        reuslt.push(buffer);
      }
    }
  
  return queue
}
 
 const user32 = {
  id:1,
  name:'john1',
  surName : 'John1',
  age:18,
}
const user89 = {
  id:2,
  name:'Jane',
  surName : 'John2',
  age:36,
}

const johnMessages = ['str1','str2','str'];
const janeMessages = ['1111', 'hell', 'test'];

const mapAllMessages = new Map();

mapAllMessages.set(user32.id,johnMessages);
mapAllMessages.set(user89.id,janeMessages);



function getMsgFromMap(userId){
  return `${mapAllMessages.get(userId)}`;
} 







