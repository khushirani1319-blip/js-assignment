// 1. Program that takes a string and prints its length
let str = "JavaScript";
console.log("Q1 Length of string:", str.length);


// 2. Function that checks if a value is a number
function checkNumber(value){
return typeof value === "number";
}
console.log("Q2 checkNumber(25):", checkNumber(25));
console.log("Q2 checkNumber('25'):", checkNumber("25"));


// 3. Convert string "123" into number
let num = Number("123");
console.log("Q3 Converted number:", num);


// 4. Compare two numbers
let a = 10;
let b = 20;

if(a > b){
console.log("Q4 Greater");
}
else if(a < b){
console.log("Q4 Smaller");
}
else{
console.log("Q4 Equal");
}


// 5. Join first name and last name
let firstName = "Rahul";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log("Q5 Full Name:", fullName);



// ============================
// SECTION 2 : Functions
// ============================

// 1. Function expression to add two numbers
const add = function(x, y){
return x + y;
}
console.log("Q6 Addition:", add(10,20));


// 2. Arrow function to find square (user input)
let number = Number(prompt("Enter a number to find square:"));

const square = (n) => {
return n * n;
}
console.log("Q7 Square:", square(number));


// 3. Lambda function to check even or odd
const evenOdd = (n) => {
if(n % 2 === 0){
return "Even";
}
else{
return "Odd";
}
}
console.log("Q8 Even or Odd:", evenOdd(number));


// 4. Temperature conversion

function celsiusToFahrenheit(c){
return (c * 9/5) + 32;
}

function fahrenheitToCelsius(f){
return (f - 32) * 5/9;
}

console.log("Q9 30°C to Fahrenheit:", celsiusToFahrenheit(30));
console.log("Q9 86°F to Celsius:", fahrenheitToCelsius(86));


// 5. Convert function into arrow function
const multiply = (a, b) => {
return a * b;
}

console.log("Q10 Multiply:", multiply(5,4));
