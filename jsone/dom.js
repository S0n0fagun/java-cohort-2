let text = document.getElementById('numberOne');
let input = document.getElementById('name');
let button = document.getElementById('myBtn');

button.addEventListener('click', updateText);

function updateText() {
  text.innerHTML = input.value;
}

//-----------------------------------------------
let value1 = document.getElementById('num1');
let value2 = document.getElementById('num2');
let result = document.getElementById('result');
let calc = document.getElementById('calculate');

calc.addEventListener('click', sum);

function sum() {
  result.value = parseFloat(value1.value) + parseFloat(value2.value);
}
