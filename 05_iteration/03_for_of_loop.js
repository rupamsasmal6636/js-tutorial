// for of loop:
// use to iterate array, string and map [can't iterate object]


// iterating array:
const myArr=[1,2,3,4]

for (const it of myArr) {
    console.log(it);
}

// iterating string:
const myStr="Rupam"

for (const ch of myStr) {
    console.log(ch);
}


// iterating map:
const myMap=new Map();
myMap.set('In',"India")
myMap.set("UK","United Kingdom")
myMap.set("USA",'United States of America')

for (const mp of myMap) {
    console.log(mp);
}

// array destruture
for (const [key,value] of myMap) { 
    console.log(key, ': ', value);
}

// iterating object:
const myObj={
    name: "Rupam",
    id: 121
}

// can't work:
/*
for (const obj of myObj) {
    console.log(obj);
}
*/