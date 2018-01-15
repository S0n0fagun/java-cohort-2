/*
  Add a button to your HTML page.
  When the button is clicked, open a pop-up that accepts user input
  Change the h1 text to say whatever the user inputs
*/
const MAX_SAFE_DISTANCE = 10;
let currentDistance = 12;
let withinSafeDistance = currentDistance >= MAX_SAFE_DISTANCE;

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;

function getSeconds(days) {
  return days * HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE;
}

const TOTAL_ROOMS = 70;

//Data Types
let name = "sam"; //string
let isColdOutside = true; //boolean
let age = 46; //number
let priceOfMilk = null;
let priceOfCookie;

console.log(priceOfMilk);
console.log(priceOfCookie);
