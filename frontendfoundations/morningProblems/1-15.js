//Write a function that takes a string and returns the string reversed

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverse2(str) {
	let result = "";
  for(let i = str.length - 1; i >= 0; i--) {
  	result += str[i];
  }
  return result;
}

function reverse3(str) {
	let result = "";
  let length = str.length;
  for(let i = 0; i < length; i++) {
  	result += str[length - 1 - i];
  }
  return result;
}

function reverse4(str) {
	let result = "";
  for(let i = 0; i < str.length; i++) {
  	result = str[i] + result;
  }
  return result;
}

console.log(reverse("hello"));
console.log(reverse2("goodbye"));
console.log(reverse3("wonder"));
console.log(reverse4("reversed"));
