/* 
In JavaScript, the static keyword is used to define a static method or property for a class. 
Static members are associated with the class itself rather than instances of the class. 
They are called on the class itself, not on instances of the class.
*/
class User {
    static id=100
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static getId(){
        console.log(User.id);
        User.id++;
        this.id++;
    }
}
User.getId(); // We can access it via class
// but if we create instance/object.. it can't be accessed via instance
const u1=new User('rupam');
u1.logMe(); 
// u1.getId(); // this will give error 
User.getId(); // but it will work 

/*
It's important to note that - static methods cannot be called on instances of the class. 
They are meant to operate on the class level, and they cannot access instance-specific data.
*/

