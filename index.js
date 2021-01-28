"use strict";

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


