const tinderUser = new Object()   // singleton object
/*Here we're explicitly saying: Create a new object using the Object CONSTRUCTOR."*/

const tinderUser = {}    // non-singleton object
/* object LITERAL syntax--> We're simply saying: "Create an object."  */

tinderUser.id = "sam123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName:{
            firstname: "Mahi",
            lastname: "Singh"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstname);

/**************************************************Merge Objects************************************************************/
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({},obj1, obj2, obj4) // Here {empty object} -> will work as TARGET and obj1,obj2.. will work as SOURCE

const obj3 = {...obj1, ...obj2, ...obj4}  // SPREAD operator --> mostly used
console.log(obj3);

/************ When values will come from the DataBase --> It will mostly be in the form of ARRAY OF OBJECTS **********/
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    },
    {
        id: 4,
        email: "t@gmail.com"
    },
]

// Loop through or print the value
console.log(users[1].email)

users.map((user) => {
    console.log(user);  // map() is commonly used to access each object and return something from it.
});

users.map((user) => {
    console.log(user.email);    // Print only a particular property i.e. -->email
});

console.log(tinderUser);

console.log(Object.keys(tinderUser));    // Its datatype will be--> Array
console.log(Object.values(tinderUser));   
console.log(Object.entries(tinderUser));  

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// Before using, To check whether this property(isLoggedIn) is available in that object(tinderUser)
