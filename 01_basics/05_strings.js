const name = "Richa"
const repoCount = 50
console.log(name + repoCount + " Value");  // Outdated or Not recommended

// Backtick(Modern way to write syntax) --> Here comes string interpolation(Placeholders)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

// Another way to declare string
const gameName = new String('richa-si-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));     // at 4th position which character is there
console.log(gameName.indexOf('i')); // character 't' is at which position

const newString = gameName.substring(0,4)   // String Slicing --> 4 is not included
console.log(newString);

const anotherString = gameName.slice(-7,7)  // we can give negative values also (reverse)
console.log(anotherString);

const newStringOne = "    richa     "
console.log(newStringOne);
console.log(newStringOne.trim());   // removes unnecessary spaces

const url = "https://richa.com/richa%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('richa'))  // will find whether the url contain the keyword 'richa' or not
console.log(url.includes('singh'))  
console.log(url.includes('monte'))  

console.log(gameName.split('-'))