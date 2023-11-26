const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values : 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}

// how to check empty array:
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// how to check empty object:
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// ++++++++++++++ Nullish Coalescing Operator (??): null undefined ++++++++++++++++++++++++++

/* The nullish coalescing ( ?? ) operator is a logical operator that returns 
its right-hand side operand when its left-hand side operand is null or undefined , 
otherwise returns its left-hand side operand */


console.log(5 ?? 10); // 5
console.log(null ?? 10);  // 10
console.log(undefined ?? 10); // 10 
console.log(null ?? 10 ?? 20); // 10
console.log(null ?? undefined ?? 10 ?? 15); //10