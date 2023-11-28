// forEach() loop: [higher order function]
// use to iterate array
// Note: forEach() doesn't return anything

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ // call back function so no need of a function name
    console.log(val);
})

// using arrow function
coding.forEach( (item)=>{
    console.log(item);
})

// another way:
function printMe(item){
    console.log(item);
}
coding.forEach(printMe); // here only need to give reference of printMe not have to declare it here using printMe()

// more things about callback function inside forEach
coding.forEach((value,index,array)=>{
    console.log(`Value = ${value}, index = ${index}, total array = ${array}`);
})


// iterating array of objects:
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName, item.languageFileName);
})