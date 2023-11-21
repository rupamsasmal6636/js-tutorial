// const tinderUser = new Object() // singleton object -> created using constructor
const tinderUser = {} // non singleton

tinderUser.id = "1432"
tinderUser.name = "Rupam"
tinderUser.isLoggedIn = false

console.log(tinderUser); 

// creating object inside object:
const regularUser = {
    email: "rupam@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rupam", // nested object
            lastName: "Sasmal"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

// merging object:
const obj1={1: "a", 2: "b"}
const obj2={3: "c", 4: "d"}
const obj3={5: "e", 6: "f"}

// const obj4={obj1,obj2} // nested issue-> object inside object

// const obj4= Object.assign(obj1,obj2) // using assign(), but it will merge obj2 inside obj1(obj1 will be changed)
// console.log(obj1);
// console.log(obj2);
const obj4= Object.assign({},obj1,obj2,obj3) // better to use {} as a empty target object so no change in obj1 and obj2
console.log(obj1); console.log(obj2);
console.log(obj3); console.log(obj4);

const obj5={...obj1, ...obj2, ...obj3} // using spread operator -> easiest way
console.log(obj5);


// array of obj1
const users=[
    {
        id: 1, name: "RS"
    },
    {
        id: 2, name: "SS"
    },
    {
        id:3, name: "NN"
    }
]
console.log(users[0].name);  // RS

// getting only keys
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// getting only values
console.log(Object.values(tinderUser)); // [ '1432', 'Rupam', false ]
// getting only entries
console.log(Object.entries(tinderUser)); // [ [ 'id', '1432' ], [ 'name', 'Rupam' ], [ 'isLoggedIn', false ] ] -> less use

// check property
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check wheather the property/key is present on tinderUser object -> true


// ------------------------------------------------------------ //

// Object destructing: {}

const course = {
    courseName: "Learn JS",
    courseInstructor : "Rupam Sasmal",
    coursePrice : 999
}

// now each time we access the keys we need to write course.courseName or course["courseInstructor"] in this way...
// but using object destructing we don't need to write 'course' each time
// destructing ->
const {courseInstructor} = course;
console.log(courseInstructor); // now it will work as a separate

// we can also give shorter name:
const {coursePrice:price} =course;
console.log(price);

/* in react it is very useful : for example->

// using props. =>
const navbar = (props.company) => {

}
// using destructing =>
const navbar = ({company}) => {

}
navbar( company = "RS Software")
*/