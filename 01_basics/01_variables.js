const accountId = 144553
let accountEmail = "mahi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"   // Possible to declare variables
let accountState;

// accountId = 2  --> Not allowed
console.log(accountId);

/*
Var -- > Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "rs@gmail.com"
accountPassword = "78654"
accountCity = "Patna"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
