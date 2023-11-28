// for in loop:
// it is use to iterate object.. array and string can also be

// iterating Object:
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: "python"
}
for (const key in myObject) {
    // console.log(key); // print all keys but not values
    // console.log(myObject[key]); // now it will print all the values
    console.log(key, ':', myObject[key]); // print key value pair
}

// iterating Array:
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); // it will print indexes
    // console.log(programming[key]); // now it will print values
    console.log(`${key}: ${programming[key]}`);
}


// iterating map:
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // will print nothing as map is not iterable
}