var c = 300 // non-block scope
let a = 300 // global scope
if (true) {
    let a = 10 // block scope
    const b = 20 // block scope
    // console.log("INNER: ", a);
    var c=30 // so the value will change here
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // child block can access the parameters of the parent block
    }
    // console.log(website); // the parent block can't access the parameters of child block

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); 
    }
    // console.log(website); // can't be accessable
}

// console.log(username); // can't be accessable


// ++++++++++++++++++ interesting ++++++++++++++++++
// Hoisting: Hoisting is a JavaScript mechanism where variables and function declarations
// are moved to the top of their scope before code execution.

console.log(addone(5)) // it'll work -> because JavaScript moves the function declaration to the top of its scope before code execution.

function addone(num){
    return num + 1
}

console.log(addone(10))

// console.log(addTwo(5)); // but it will give error ->  hoisting only applies to function and variable declarations, not to assignments.
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));// it'll work