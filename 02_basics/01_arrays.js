// ways to declare array:
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods:

// myArr.push(6) // insert at last
// myArr.push(7)
// myArr.pop() // delete the last element

// myArr.unshift(9) // intsert at beginning
// myArr.shift() // delete the first element

// console.log(myArr.includes(9)); // check present or not
// console.log(myArr.indexOf(3)); // return index value

const newArr = myArr.join() // convert array into string

// console.log(myArr);
// console.log( newArr); 
// console.log(typeof newArr);

// slice, splice:

console.log("At beginning: ", myArr);

const myn1 = myArr.slice(1, 3) // return 1 to 3-1 index elements but no change in original array

console.log("After slice(): ", myArr);
console.log(myn1); 


const myn2 = myArr.splice(1, 3) // return 1 to 3 index elements and also erase those elements from the original array
console.log("After splice(): ", myArr);
console.log(myn2);