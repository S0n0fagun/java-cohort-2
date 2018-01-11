/*Write a function that takes two parameters, firstName
and lastName. The function should return a full name, with a
space in between the first and last name.
*/


let names = [
  "bob", "sam", "tim", "sally", "timothy"
];

let grades = [
  67, 98, 78, 88, 92, 34, 79
];

let prices = [
  56.78, 34.12, 98.17
];

function power(base, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(power(2, 3));
console.log(power(2, 1));


function average(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let averagePrice = average(prices);
console.log(averagePrice);


// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// let sum2 = 0;
// for (let i = 0; i < prices.length; i++) {
//   sum2 += prices[i];
// }
// console.log(sum2 / prices.length);
//
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
// }
// console.log(sum / grades.length);
//
// console.log("--------------------");
//
// for (let i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }
//
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length <= 3) {
//     console.log(names[i]);
//   }
// }
