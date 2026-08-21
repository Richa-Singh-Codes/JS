const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flas", "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// ************************************ CONCAT *****************************************************
// Concat --> combines 2 or more arrays and returns new array
const allHeros = marvel_heros.concat(dc_heros)   
console.log(allHeros);


// ***************************** SPREAD Operator(...) ***********************************************
// spread operator ( ... ) copies all or part of an existing array or object into another array or object
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

// *********************************** flat() method **************************************************
// The flat() method in JavaScript creates a new array with all sub-array elements concatenated into it
const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Richa"))  
// The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.from("Richa"))

console.log(Array.from({name: "richa"})); // Interesting for interview 
// This array's (console.log) will return empty array{} because it'll get confused about whether to print array of 'KEYS' or 'VALUES'

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));  // convert the individual variables into array

/*                               Array.from, Array.of in JS

In JavaScript, Array.from() and Array.of() are both used to create arrays, but they solve different problems.

1. Array.from() --> creates a new array from an iterable or array-like object.

Array.from("HELLO");
Output: ["H", "E", "L", "L", "O"]

2. Array.of() --> creates an array using whatever arguments we give it.

Array.of(10, 20, 30);
Output:  [10, 20, 30]

*/