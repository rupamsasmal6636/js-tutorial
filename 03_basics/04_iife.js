// Immediately Invoked Function Expressions (IIFEs) are functions that are executed when they are initialized
// it is used to -> Avoid polluting the global namespace.
// -> Avoid conflict of variable names between libraries and programs.

// Named IIFE:
( function dBconnect(){
    console.log("DB has been connected");
} ) ();


// using arrow function:
( (name) => {
    console.log(`Hey ${name}! DB2 has been connected`);
} ) ("Rupam")