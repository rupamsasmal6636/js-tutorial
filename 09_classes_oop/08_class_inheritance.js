class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course has been added by ${this.username}`);
    }
}
const t1=new Teacher('tapas','tapas@gmail.com','tapas123');
t1.addCourse(); // New course has been added by tapas
t1.logMe(); // USERNAME is tapas

const u1= new User('rupam');
u1.logMe();
// u1.addCourse(); // no access

console.log(t1 instanceof Teacher); // true
console.log(t1 instanceof User); // true
console.log(u1 instanceof User); // true
console.log(u1 instanceof Teacher); // false