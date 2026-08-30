function sayMyName(){
console.log(("R"));
console.log(("I"));
console.log(("C"));
console.log(("H"));
console.log(("A"));
}

// sayMyName()

/*
function addTwoNumbers(number1, number2){       // Parameters
    console.log(number1 + number2)
}
const result = addTwoNumbers(3,7)   // Arguments
console.log("Result: ", result);   // It will return "undefined" because in function we are just printing on the console, not returning any value
*/

function addTwoNumbers(number1, number2){       
    // let result = number1 + number2
    // return result

    return number1 + number2          // Another way of returning value
}
const result = addTwoNumbers(3,7)  
// console.log("Result:", result);

function loginUserMessage(username = "Mahi"){     // Default value --> Mahi (if user will not pass any argument)
    /*

    if(username === undefined){
        console.log("Please enter a username");
        return
    }

    if(username === undefined) is equivalent to if(!username)

    */
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mahi"))
// console.log(loginUserMessage())


/*********** Users shopping cart --> Where we don't know the number of arguments coming in (We simply need to add up their prices)  ********/

function calculateCartPrice(...num1){      // (...) --> REST Operator (to pass multiple values in function)
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000));

/* 
function calculateCartPrice(val1, val2, ...num1){     
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000));
*/
 
const user = {
    username: "Richa",
    price: 499
}

/* Passing Object in Function */
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)

/* Another way to pass an object in function --> we don't need to declare an object beforehand we can directly pass the argument */
handleObject({
    username: "Sam",
    price: 599
})

/* Passing arrays in functions */ 
const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 800, 500, 1000]));    // Another way to pass argument

