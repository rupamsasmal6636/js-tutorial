/*const User = {
    username: 'rupam',
    _password: 'rupam123',

    set username(value){
        this._username=value;
    },
    get username(){
        return this._username;
    }, 

}

const u1=Object.create(User)
console.log(u1.username);
*/

/*This will give error:
The error in your code is due to a similar naming conflict between the username property and its getter/setter methods inside the User object.
When you create an object using Object.create(User), the properties of the User object become part of the prototype chain for u1. 
This means that the getter and setter methods are added to the prototype of u1. However, since the username property and 
its getter/setter methods share the same name, it creates a conflict, resulting in an error.
To resolve this, you can use a different name for the property or the getter/setter methods. */

const User = {
    _username: 'rupam',
    _password: 'rupam123',

    set username(value){
        this._username=value;
    },
    get username(){
        return this._username;
    }, 

}

const u1=Object.create(User)
console.log(u1.username);