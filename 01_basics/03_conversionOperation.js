// let score = 33
let score = "33abc"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*

Conversion Rules
33 --> easily converted into 33
"33abc" -->NaN(Not a Number)
true --> 1; false --> 0

 */

let isLoggedIn = "mahi"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 will be converted in --> true
// 0 --> false
// Empty string ("") --> false
// String ("mahi") --> true


let someNumber = 35
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

