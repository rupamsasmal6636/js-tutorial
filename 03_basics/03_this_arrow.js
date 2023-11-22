// 'this' inside object:
const user = {
    username: "Rupam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}!  welcome to website`);
        console.log(this); // here this is current context -> user object -> output -> { username: 'Rupam', price: 999, welcomeMessage: [Function: welcomeMessage]}
    }
    
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// 'this' in outer:
console.log(this); // in node engine there is no current context, so it is empty -> {}
// but if we run this in the browser console, then -> window is the current context/object


// 'this' inside function: 
function check() {
    let user= "rupam"
    // console.log(this);
    console.log(this.user); // undefined -> can't use this in this way
}
check(); 

// another way to define function:
const check2 = function (){
    let user = "Rupam";
    // console.log(this);  // it will return something
    console.log(this.user); // undefined
}
check2();


// Arrow function: [ES6]
const check3 = ()=> {
    let user = "Rupam";
    console.log(this); // {}
    console.log(this.user); // undefined
}
check3();

// ++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++

const addTwo = (num1, num2) => { // if we use {} then we must have to write 'return'  -> explicit return
    return num1+num2;
}

// more short:

const addThree = (num1,num2,num3) => num1+num2+num3 // implicit return

// how to return in arrow function:

const getUser = (name="sam") => ({username:name, empId:123})

console.log(getUser("rupam"));
console.log(getUser());