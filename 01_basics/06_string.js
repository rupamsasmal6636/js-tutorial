const name = "Rupam-Sasmal"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // ES6 

const gameName = new String('Rupam-Sasmal-fan-Club');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3) // 0 to 3-1=2 index.. output: Rup
console.log(newString);

const anotherString = gameName.slice(4, -6)
console.log(anotherString);

const newStringOne = "   Rupam    Sasmal    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));