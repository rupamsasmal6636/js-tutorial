// Class based:
/*
class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
}
const u1=new User("rupam","rupam123");
console.log(u1.username);
console.log(u1.password);
*/
// in normal condition it is accessable easily.. 
// but for encapsulation it should not be accessable to the user easily.. so we need to use getter & setter

/*
class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get username(){
        return this.username;
    }
    set username(value){
        this.username=value;
    }
}
const u1=new User("rupam","rupam123");
console.log(u1.username);
*/

/* But this code will give error: 
The error in your code is due to a naming conflict between the property and the getter/setter methods. 
The property username in the class and the getter/setter methods share the same name, and this leads to a conflict. 
When you attempt to access or set the username property, it actually invokes the getter or setter methods, creating an infinite loop.
*/

// Here is the fixed one:
class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    set username(value){
        this._username=value;
    }
    get username(){
        return this._username;
    }
    set password(val){
        this.myPassword=val;
    }
    get password(){
        return this.myPassword.toUpperCase();
    }
}
const u1=new User("rupam","rupam123");
console.log(u1.username);
console.log(u1.password);

/* In this example, I've used _username as the name for the property to avoid the naming conflict. 
The getter and setter methods then operate on this property. This way, you can access or modify the property
without triggering an infinite loop caused by the getter and setter invoking each other with the same name.

Note: here no matter how is the naming in constructor.. everthing will depend on 'set' how it is set, we have to return like this in get

'_' is preferable because  It's a way to signal to other developers that the variable or property is private (but it can be accessable)*/

// some observation by me:
// [This will not give error]:
class myUser{
    constructor(username,myPassword){
        this.username=username
        this.myPassword=myPassword
    }
    set password(val){
        this.myPassword=val;
    }
    get password(){
        return this.myPassword.toUpperCase();
    }
}
const u2=new myUser('rupam','rs123')
console.log(u2.password); // RS123
console.log(u2.myPassword); //rs123

// But it will give error:
/*
class myUser2{
    constructor(username,myPassword){
        this.username=username
        this.myPassword=myPassword
    }
    set myPassword(val){
        this.myPassword=val;
    }
    get myPassword(){
        return this.myPassword.toUpperCase();
    }
}
const u3=new myUser2('rupam','rs123')
console.log(u3.myPassword); // Error!!!!
*/

// The main thing is the getter setter name should be differentiate from the variable, if both are same then error will come