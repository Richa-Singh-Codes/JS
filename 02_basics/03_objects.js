/*  
There are 2 ways to declare an Object:  1. like Litreal   2. like Constructor
Singleton --> a design pattern that ensures only one instance of an object is created and provides a way to access that same instance throughout the application.
if we declare object as literal --> It doesn't become singleton
but if declare as Constructor --> It'll become a singleton
*/

// **************************************** Object Literals ********************************************************

const mySym = Symbol("key1")

const jsUser = {
    name : "Richa",
    "full name" : "Richa Singh",  // there is no way to access this using dot(.) 
    [mySym] : "mykey1", // refering to that symbol
    age: 20,
    location: "Delhi",
    email: "richa2468@gmail.com",
    isLoggedIn : false,
    lstLoginDays: ["Monday", "Saturday"]
}
console.log(jsUser.email);  // not a good way to access objects
console.log(jsUser["email"]);  

console.log(jsUser["full name"]); 
// console.log(jsUser.full name);  // This will give error

console.log(jsUser[mySym]);

jsUser.email = "richa@chatgpt.com";  // changing the value of objects

Object.freeze(jsUser) // no changes will be applied to this object

jsUser.email = "richa@microsoft.com";  // we are trying to change the values after freeze, this will not generate any error but the value will not be changed
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  // referencing name
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

