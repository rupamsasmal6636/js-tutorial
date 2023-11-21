// single-ton : when we create object by constructor
// Object.create(); // using constructor

// object literals
const JsUser = {
    name: "Rupam", // key:value
    "full name": "Rupam Sasmal", // internally keys are like string
    age: 23,
    location: "Kolkata",
    email: "rupam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// accessing object:
console.log(JsUser.email); // using dot(.)
console.log(JsUser["email"]); // another way using -> square notation []
// console.log(JsUser."full name"); // can't access in this way
console.log(JsUser["full name"]);


//how to use symable as key of any object:
const mySym= Symbol("key1");

const user2={
    [mySym]: 6,
    name: "Rupam Sasmal"
}

console.log(user2[mySym]); // 6
console.log(user2); // { name: 'Rupam Sasmal', [Symbol(key1)]: 6 }

// Changing object value
user2.name="Mr. Rupam"
console.log(user2.name); 

// how to freeze object values
Object.freeze(user2);
user2.name="Mr. Rupam" // this value will not change
console.log(user2.name); 



// In JS, function is treated as variable

// defining function inside object
JsUser.greeting = function () {
    console.log(`Hello ${this["full name"]} your last login dates are ${this.lastLoginDays}`);
}

console.log(JsUser.greeting());