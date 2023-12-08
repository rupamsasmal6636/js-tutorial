# JavaScript & Classes
JavaScript is a prototype-based language, and it follows a prototype-based inheritance model rather than a class-based one. However, starting with ECMAScript 6 (ES6), which was released in 2015, JavaScript introduced a syntax for creating classes. Despite the syntax, it's important to note that JavaScript classes are essentially syntactic sugar over the existing prototype-based inheritance.
* Here is an example of defining a class in JavaScript using the ES6 class syntax:

```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Creating an instance of the class
const animal = new Animal('Some Animal');
animal.speak(); // Output: Some Animal makes a sound
```
Under the hood, the class syntax is just a more convenient way to work with constructor functions and prototypes. The following example demonstrates how you can achieve the same using traditional constructor functions:
```
// Constructor function
function Animal(name) {
  this.name = name;
}

// Prototype method
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound`);
};

// Creating an instance of the "class"
const animal = new Animal('Some Animal');
animal.speak(); // Output: Some Animal makes a sound
```
While JavaScript supports the class syntax, it's important to understand that it's just a different way of expressing the same prototype-based inheritance that JavaScript has always had. It does not introduce classical inheritance, as seen in languages like Java or C++.

## OOP
Object-Oriented Programming (OOP) is a programming paradigm that organizes code into objects, which are instances of classes. The central concept of OOP is to model real-world entities and their interactions by representing them as objects that encapsulate data (attributes or properties) and behavior (methods or functions).

## Key principles and concepts of Object-Oriented Programming include:

### Classes and Objects:

*Class:* A blueprint or template for creating objects. It defines a set of attributes and methods that its instances (objects) will have.

*Object:* An instance of a class. Objects have specific values for the attributes defined by the class and can perform actions through their methods.

In short- collection of properties and methods.

### 1. Encapsulation:

Encapsulation involves bundling the data (attributes) and methods that operate on the data into a single unit, i.e., an object. It helps in hiding the internal details of an object and exposing only what is necessary.

### 2. Inheritance:

Inheritance allows a class (subclass or derived class) to inherit the properties and methods of another class (superclass or base class). It promotes code reusability and establishes a hierarchical relationship between classes.

### 3. Polymorphism:

Polymorphism means "many forms." It allows objects of different classes to be treated as objects of a common base class. This can be achieved through method overloading and method overriding, allowing objects to take on multiple forms.

### 4. Abstraction:

Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors relevant to the problem at hand. It focuses on what an object does rather than how it does it.

## Important terms of OOP in JS
* Object Literals
* Constructor function
* Prototypes
* Classes
* Instances (new, this)
* instanceof