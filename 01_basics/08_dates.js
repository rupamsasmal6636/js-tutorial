let myDate= new Date();
console.log(myDate); // 2023-11-20T15:36:22.704Z
console.log(myDate.toString()); // Mon Nov 20 2023 21:06:22 GMT+0530 (India Standard Time)
console.log(myDate.getTime()); // 1700494582704
console.log(myDate.getDate()); // 20
console.log(myDate.toISOString()); // 2023-11-20T15:36:22.704Z
console.log(myDate.toLocaleString()); // 11/20/2023, 9:06:22 PM

console.log("--------------------------------------");

// different ways to define dates: 
// const myCreatedDate=new Date(2023,0,6); // will treat 0 like 1 here i.e. january
// const myCreatedDate=new Date(2023,0,6,15,20); // here too
// const myCreatedDate=new Date("06/15/2022"); // but here 06 is 6 i.e. June
const myCreatedDate=new Date("2023-01-20"); // here too
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp); // 1700495059814
console.log(typeof myTimeStamp); // number

let newDate=new Date();
console.log(newDate.getMonth());  // 10 -> November
console.log(newDate.getFullYear()); // 2023
console.log(newDate.getDate()); // 20


newDate.toLocaleString('default',{
    weekday: "long",
})