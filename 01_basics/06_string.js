const name = "Rupam-Sasmal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ES6 

const gameName = new String('Rupam-Sasmal-fan-Club');

console.log(gameName[0]); // R 
console.log(gameName.__proto__); // {}


console.log(gameName.length); // 21
console.log(gameName.toUpperCase()); // RUPAM-SASMAL-FAN-CLUB
console.log(gameName.charAt(2)); // p
console.log(gameName.indexOf('t')); // -1 (return -1 if absent)
console.log(gameName.indexOf('a')); // 3 (return the first occurance)

const newString = gameName.substring(0, 3) // 0 to 3-1=2 index.. output: Rup
console.log(newString);

const anotherString = gameName.slice(4, -6) // 4th index to (n-6)th index
console.log(anotherString);

const newStringOne = "   Rupam    Sasmal    "
console.log(newStringOne);
console.log(newStringOne.trim()); // will trim first blank white spot

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-')); // split the string whenever '-' occur and return array of string