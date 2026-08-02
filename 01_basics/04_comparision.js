// > >= < == !=

console.log("2" > 1);   // Different datatype comparison
console.log("02" > 1);


// we avoid these types of comparision 
console.log(null > 0);      // comparison
console.log(null == 0);    // equality check
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Triple check(===)    -> strict comparison
console.log("2" == 2);
console.log("2" === 2);
