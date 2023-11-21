function sayMyName(){ // function defination
    console.log("Rupam Sasmal");
}

sayMyName(); // here sayMyName is reference, and sayMyName() is function call or execute

function addTwoNumbers(num1, num2) { // here num1, num2 are parameters
    console.log(num1+num2);
}

addTwoNumbers(4,5); // here 4,5 are arguments

/* some fun checking :
addTwoNumbers(); // NaN
addTwoNumbers(4,"5"); // 45
addTwoNumbers("4",6); // 46
addTwoNumbers(4,"a"); // 4a
addTwoNumbers(4,null); // 4
addTwoNumbers(4); // NaN
*/

let result=addTwoNumbers(10,15);
console.log("result: ", result); // but it will not store result as the function is not returning anything -> undefined

function addThreeNumbers(num1, num2, num3) { 
    return num1+num2+num3;
}
result=addThreeNumbers(2,4,6);
console.log(result); // now it will print result -> 12


function loginUserMessage(username){
    if(!username){
        return "PLease enter a username";
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()) // PLease enter a username
console.log(loginUserMessage("Rupam")) // Rupam just logged in

// another way to handle undefined parameters => 
function loginMessage(username="Sam") { // default parameter
    return `${username} just logged in`;
}
console.log(loginMessage("Rupam")); // Rupam just logged in
console.log(loginMessage()); // Sam just logged in


// REST Operator(...) :

// when we don't know how many parameters will be passed in the function, we use rest operator(...) => also known as spread but use case is different
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // 500 and 2000 will be passed in num1 as array

const user = {
    username: "hitesh",
    price: 199
}

// passing object as parameter
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// we can also call function like this too 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

// passing Array as parameter
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));