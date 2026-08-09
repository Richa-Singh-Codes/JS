const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // precision value --> 2

const otherNumber1 = 23.8966
const otherNumber2 = 123.8966
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // This will print value according to Indian no. system
console.log(hundreds.toLocaleString()); // By default it will print value according to US no. system

// ************************************   Maths Library     *************************************************

console.log(Math);
console.log(Math.abs(-4));  // absolute value(Only negative value becomes positive)

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));  // will always choose top value
console.log(Math.floor(4.9));  // will always choose lowest value

console.log(Math.min(4,3,6,8));  
console.log(Math.max(4,3,6,8));  

console.log(Math.random());   // values will always come between 0 and 1
console.log((Math.random()*10) + 1);   
console.log(Math.floor(Math.random()*10) + 1);   

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1) ) + min);


