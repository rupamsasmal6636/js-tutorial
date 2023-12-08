/**
 * a constructor function is a special type of function that is used to create and initialize objects. 
 * Constructor functions serve as blueprints for creating instances of objects with specific properties and methods. 
 * When you create an object using a constructor function, you are creating an instance of that constructor.
 */

// Constructor function for creating Person objects
function Person(firstName, lastName, age) {
    // Properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Method
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
    };
    return this; // this is not mandatory
}

// // What happen if we don't use 'new' ?
// const person1 = Person('Rupam', 'Sasmal', 23);
// const person2 = Person('Arindam', 'Kheto', 35);
// console.log(person1); // then person2 will overwrite the person 1 as it's using same global context

// So we have to create separate instance for each function context
// Creating instances of the Person constructor
const person1 = new Person('Rupam', 'Sasmal', 23);
const person2 = new Person('Arindam', 'Kheto', 35);

console.log(person1);
console.log(person1.constructor);
console.log(person2);

// Calling the sayHello method on the instances
person1.sayHello();
person2.sayHello();

/* 
In this example:
Person is a constructor function.
The new keyword is used to create instances of the Person constructor, resulting in the creation of the john and jane objects.
Inside the constructor function, this refers to the instance being created, and properties and methods are assigned to it using the this keyword.
Each instance created with the constructor has its own set of properties and methods.
*/
