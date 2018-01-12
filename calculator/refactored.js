let result = document.getElementById('display');
let firstValue;
let operation;
let isCalculated = false;

function add(value) {
  return function() {
   if(isCalculated) {
     isCalculated = false;
     result.value = "";
   }
   result.value += value;
  }
}

for(let i = 0; i < 10; i++) {
  document.getElementById('bt' + i).addEventListener('click', add(i));
}

let clear = document.getElementById('btC');
clear.addEventListener('click', Clear);

function Clear() {
 result.value = "";
}

let plus = document.getElementById('bt+');
plus.addEventListener('click', addition);

function storeFirstValue() {
  firstValue = parseInt(result.value);
  result.value = "";
}

function addition() {
 storeFirstValue();
 operation = "+";
}

let minus = document.getElementById('bt-');
minus.addEventListener('click', subtraction);

function subtraction() {
 storeFirstValue();
 operation = "-";
}

let divide = document.getElementById('bt/');
divide.addEventListener('click', division);

function division() {
 storeFirstValue();
 operation = "/";
}

let multiply = document.getElementById('bt*');
multiply.addEventListener('click', multiplication);

function multiplication() {
 storeFirstValue();
 operation = "*";
}

let calculate = document.getElementById('btA');
calculate.addEventListener('click', mathWork);

function mathWork(){
 if(operation === "+") {
   result.value = firstValue + parseInt(result.value);
 } else if (operation === "-") {
   result.value = firstValue - parseInt(result.value);
 } else if (operation === "*") {
   result.value = firstValue * parseInt(result.value);
 } else if (operation === "/") {
   result.value = firstValue / parseInt(result.value);
 }
 isCalculated = true;
}
