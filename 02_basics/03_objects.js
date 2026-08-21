/*  
There are 2 ways to declare an Object:  1. like Litreal   2. like Constructor
Singleton --> a design pattern that ensures only one instance of an object is created and provides a way to access that same instance throughout the application.
if we declare object as literal --> It doesn't become singleton
but if declare as Constructor --> It'll become a singleton
*/

// **************************************** Object Literals ********************************************************
const jsUser = {
    name : "Richa",
    age: 20,
    location: "Delhi",
    email: "richa2468@gmail.com",
    isLoggedIn : false
}