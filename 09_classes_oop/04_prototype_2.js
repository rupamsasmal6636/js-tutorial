let myName = "rupam     "
let mySurName = "   sasmal"

// create a property 'trueLength' which will be returning it's actual trueLength
// console.log(myName.trueLength); // like this way
// console.log(myName.trim().length); // not in this way
// Solution:
String.prototype.truelength = function(){ // Note Arrow function will not work here!
    console.log(`${this}`);
    console.log(this.trim().length)
}
myName.truelength();
mySurName.truelength();


let myHeros = ["thor", "spiderman"]

let checkFunction = ()=>{
    console.log('checking');
}

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Testing : Creating a new method/property in Object and test wheather it will work in it's childs(Array, String, function)
Object.prototype.rupam= function(){
    console.log("Hello I'm from Object method");
}

// Now checking:
myHeros.rupam();
heroPower.rupam();
checkFunction.rupam();
// So we can call/access rupam() from any of the child of object 

// Now testing : creating a new property in a specific child and check wheather it is accessable from another child 
Array.prototype.heyRupam = function(){
    console.log("Hey I'm from Array");
}
myHeros.heyRupam();
// heroPower.heyRupam(); // it's returning error.. so we can't access 


