// 1. Primitive - 7 categories (call by value)
// string, Number, boolean, null, undefined, symbol, bigInt

// 2. Reference type or Non-premitive
// Array, Objects, functions

// JavaScript is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 345678902169n   // big int

const heros = ["shaktiman", "naagraj", "doga"]  // array

//Object
let myObj = {
    name : "mahi",
    age : 22
}
console.log(typeof myObj);

// functions --> we can treat functions as a variable in js
const myFunction = function(){
    console.log("Hello Js");
    
}