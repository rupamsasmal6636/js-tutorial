/*
In JavaScript, an object literal is a way to define and create objects using a concise syntax. 
It allows you to create an object and specify its properties and values directly within the object declaration. 
Object literals are a simple and convenient way to create objects on the fly.
*/
const person = {
    firstName: 'Rupam',
    lastName: 'Sasmal',
    age: 23,
    isStudent: false,
    sayHello: function () {
        // console.log(`Hello! ${firstName}`); // it will give error (no current context mentioned)
        console.log(`Hello! ${this.firstName}`); // 'this' is current context
        console.log(this);
    }
};

console.log(person.firstName); // Output: John
person.sayHello(); // Output: Hello!

// But the problem is if we want to create person2 like this way we have to write the whole code!! that a huge problem..
// here comes the concept of constructor function