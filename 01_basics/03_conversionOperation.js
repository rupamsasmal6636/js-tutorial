let num = 36
console.log(typeof num);
console.log(typeof(num)); // both are same
console.log("--------------------------");

// now 
let num2 = "36"
console.log(typeof num2); // string
let valueNumber = Number(num2); // number conversion
console.log(typeof valueNumber); // number
console.log(valueNumber);
console.log("--------------------------");

// but if
let num3= "36abc";
let valueNumber2 = Number(num3);
console.log(typeof num3); // string
console.log(typeof valueNumber2); // number
console.log(valueNumber2); // NaN
console.log("--------------------------");

// but again if we use null
let num4= null;
let valueNumber3 = Number(num4);
console.log(typeof num4); // object
console.log(typeof valueNumber3); // number
console.log(valueNumber3); // 0
console.log("--------------------------");

// if we use undefined
let num5= undefined;
let valueNumber4 = Number(num5);
console.log(typeof num5); // undefined
console.log(typeof valueNumber4); // number
console.log(valueNumber4); // NaN
console.log("--------------------------");

// if we use boolean
let num6= true;
let valueNumber5 = Number(num6);
console.log(typeof num6); // undefined
console.log(typeof valueNumber5); // number
console.log(valueNumber5); // NaN
console.log("--------------------------");

// boolean conversion:
let check=1;
let isCheck= Boolean(check);
console.log(isCheck);

let check2="";
let isCheck2= Boolean(check2);
console.log(isCheck2);

let check3="Rupam";
let isCheck3= Boolean(check3);
console.log(isCheck3);
console.log("--------------------------");

// String conversion
let someNumber = 36
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
console.log("--------------------------");


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3); // hello hitesh

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log( (3 + 4) * 5 % 3); // 7+5%3 = 35%3 = 2

console.log(+true); // 1
console.log(+""); // 0

let n1, n2, n3;

n1 = n2 = n3 = 2 + 2
console.log(n3); // 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter); //101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion