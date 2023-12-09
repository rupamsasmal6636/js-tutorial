function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    // SetUsername(username) // 1*
    // SetUsername.call(username) // 2*
    SetUsername.call(this, username) // 3*
    console.log(this.username);
    this.email = email
    this.password = password
}
const rupam = new createUser("rupam", "rupam@fb.com", "123")
console.log(rupam);

/*
1* -> 
In this case, SetUsername(username) is a simple function call. 
The this inside the SetUsername function will refer to the global object
typically 'window' in a browser environment or undefined in Node.js

Output->

called
undefined
createUser { email: 'rupam@fb.com', password: '123' }

2* ->
This is using the call method on the SetUsername function. 
However, the argument passed to call is just a string (username), not an object. 
The this inside SetUsername will still refer to the global object or be undefined in node environment.

Output->

called
undefined
createUser { email: 'rupam@fb.com', password: '123' }

3* ->
This is the correct usage of call. 
SetUsername.call(this, username) -> This line of code explicitly calls the SetUsername function, 
but it uses the call method to set the value of this inside SetUsername to be the current instance of the createUser constructor.

this.username = username; -> Inside the SetUsername function, this now refers to the current instance of createUser 
because of the SetUsername.call(this, username) line. As a result, the username property is set on the instance being created 
(i.e., this inside SetUsername refers to the rupam object).

Output->

called
rupam
createUser {
  username: 'rupam',
  email: 'rupam@fb.com',
  password: '123'
}
*/