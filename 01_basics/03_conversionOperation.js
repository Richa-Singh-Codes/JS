// let score = 33
let score = "33abc"
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*

Conversion Rules
33 --> easily converted into 33
"33abc" -->NaN(Not a Number)
true --> 1; false --> 0

 */

let isLoggedIn = "mahi"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1 will be converted in --> true
// 0 --> false
// Empty string ("") --> false
// String ("mahi") --> true


let someNumber = 35
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************** Operations ****************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2**3)  --> Power

let str1 = "hello"
let str2 = " mahi"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

// link to study --> https://tc39.es/ecma262/#sec-type-conversion