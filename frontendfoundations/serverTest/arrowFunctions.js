function nameOfFunction(param) {
  console.log(param);
}

nameOfFunction("Hello world");

const nameOfFunction2 = (param) => {
  console.log(param);
}

nameOfFunction2("function 2");

function addNumbers(num1, num2) {
  return num1 + num2;
}

const addNumbers2 = (num1, num2) => num1 + num2;
const reverse = str => str.split("").reverse().join("");
const reverse2 = str => {
  let result = "";
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(addNumbers2(2, 3));
console.log(reverse("hello"));
console.log(reverse2("hello"));
