function User(username,password) {
    this._username=username;
    this._password=password;

    Object.defineProperty(this,'username',{
        set: function(value){
            this._username=value
        },
        get: function(){
            return this._username;
        }
    })
    Object.defineProperty(this,'password',{
        set: function(value){
            this._password=value
        },
        get: function(){
            return this._password.toUpperCase();
        }
    })
}
const u1=new User('rupam','rupam123')
console.log(u1.password);