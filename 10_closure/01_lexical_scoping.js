/* Lexical scoping:
also known as static scoping, is a scope resolution strategy in which the scope of a variable is determined 
by its location within the source code. In other words, the scope of a variable is defined by its surrounding block or function 
at the time the code is written, and it doesn't change at runtime. */

function outer() {
    const outerVar = 'I am from outer';

    function inner() {
        console.log(outerVar); // Lexical scope: inner function has access to outerVar
    }

    inner();
}

outer();
// console.log(outerVar); // it has no access -> error 

/* In this example, the inner function has access to the variable outerVar because of lexical scoping. 
The scope of inner is determined by its position within the source code, and it includes the variables 
from its outer scope (outer function).*/