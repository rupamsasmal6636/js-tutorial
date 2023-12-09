// ES 6 introduced class as syntactic suger
class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    encryptPassword() {
        return `abc${this.password}xyz`
    }
    upperCaseUserName() {
        return this.username.toUpperCase();
    }
}
const rupam = new User(123, 'rupam', 'rupam123')
console.log(rupam.encryptPassword());
console.log(rupam.upperCaseUserName());

// let's see how it's working under the hood / behind the scene
function user(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
}
user.prototype.encryptPassword= function () {
    return `abc${this.password}xyz`;
}
user.prototype.upperCaseUserName = function () {
    return this.username.toUpperCase();
}
const user2=new user(1227,'aniket','aniket123');
console.log(user2.encryptPassword());
console.log(user2.upperCaseUserName());