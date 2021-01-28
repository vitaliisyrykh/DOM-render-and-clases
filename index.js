"use strict";

const arr = [];

const form = document.getElementById("rootForm");
function createTextNode(text){
  const ul = document.getElementById("rootList");
  const li = document.createElement("li");
  li.append(document.createTextNode(text));
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

  arr.push(value);
  createTextNode(value);
  target.reset();
});
