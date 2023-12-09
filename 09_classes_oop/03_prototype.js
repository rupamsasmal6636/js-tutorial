/*
In JavaScript, the prototype is a fundamental concept that plays a crucial role in the prototype-based inheritance system. 
Each object in JavaScript has a prototype, and the prototype is essentially an object from which the object inherits properties and methods.

* Object Prototype: 
Every object in JavaScript is linked to a prototype object. When you try to access a property or method on an object, 
and the object itself does not have that property or method, JavaScript looks for it in the object's prototype, 
and if it's not there, it continues to look up the prototype chain until it reaches the Object prototype.

Prototype diagram:
Everything in JavaScript is an object.. like function, array, string all are object.

          function
             |
            \|/
Array ---> Object ---> null
            /|\
             |
           String
*/

function multiplyByFive(num) { // here it's working as function
    return num*5;
}
multiplyByFive.number=6; // see here function is behaving like an object

console.log(multiplyByFive(5)); // 25
console.log(multiplyByFive.number);  // 6
console.log(multiplyByFive.prototype); // {} -> as there is no current context inside

// Now can we declare properties inside function?? YESssss
function person(name) {
  this.name=name; // this refers the current context
}
// now we can inject function/peoperty using 'prototype'
person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
}

// const rupam=person("Rupam");
// console.log(person.prototype); // { sayHello: [Function (anonymous)] } -> means protype is injected successfully but...
// // when we transfer the value inside rupam using the function person(), we haven't tell them that an additional peoperty has been added..
// rupam.sayHello(); // so this will give error -> can't read property of underfined

/**
 * In this case, without the new keyword, the function call Person('Rupam') doesn't return a new object; 
 * instead, it modifies the global object (window in a browser environment, or global in Node.js) by adding the name property to it. 
 * This can lead to unintended consequences and unexpected behavior.
 */

const rupam=new person("Rupam");  // Now, john is a proper instance of the Person constructor, and the sayHello method can be called on it as expected. 
const aniket=new person("Aniket");
rupam.sayHello();
aniket.sayHello();

/**
 * Here's what happens behind the scenes when the new keyword is used:
 
 * A new object is created: The new keyword initiates the creation of a new JavaScript object.
 
 * A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
    This means that it has access to properties and methods defined on the constructor's prototype.
 
 * The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
    If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
 
 * The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
    the newly created object is returned.
 */






