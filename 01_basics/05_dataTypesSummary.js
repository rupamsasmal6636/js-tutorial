//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // number
const scoreValue = 100.3 // number

const isLoggedIn = false // boolean
const outsideTemp = null  // object
let userEmail; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n // bigint

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Array object

const myArr = [1,2,3] // another array object

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros); // object
console.log(typeof myArr); // object
console.log(typeof myObj); // object 
console.log(typeof myFunction); // function

// https://262.ecma-international.org/5.1/#sec-11.4.3