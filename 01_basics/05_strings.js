const name = "Richa"
const repoCount = 50
console.log(name + repoCount + " Value");  // Outdated or Not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 
// Backtick(Modern way to write syntax) --> Here comes string interpolation(Placeholders)

// Another way to declare string
const gameName = new String('richa')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));     // at 4th position which character is there
console.log(gameName.indexOf('i')); // character 't' is at which position

