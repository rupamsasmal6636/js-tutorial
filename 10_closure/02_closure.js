/* A closure in JavaScript is created when a function is defined inside another function, and 
the inner function has access to the outer function's variables (even after the outer function has finished executing). 
Closures effectively "close over" the variables from their containing scope.*/

function outer() {
    const outerVar = 'I am from outer';
    console.log('outer outside');
    function inner() {
        console.log(outerVar); // Closure: inner function has access to outerVar even after outer has finished
    }

    return inner;
}

const closureFunction = outer(); // Output: outer outside
closureFunction(); // Output: I am from outer

/* In this example, the inner function is returned from the outer function, creating a closure. 
When closureFunction is invoked, it still has access to the outerVar variable, 
even though the outer function has completed its execution.*/



// Real-Life Example:
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
counter1(); // Output: 1
counter1(); // Output: 2

const counter2 = createCounter();
counter2(); // Output: 1 (independent of counter1)

/* In this scenario, createCounter returns a function that forms a closure over the count variable. 
Each time createCounter is called, it creates a new scope for count. 
The returned function, when invoked, maintains its own independent count. 
The concept of lexical scoping and closure allows you to create encapsulated and independent state within functions. */