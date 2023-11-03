let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.getTime());
// console.log(myDate.getDate());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// const myCreatedDate=new Date(2023,0,6);
// const myCreatedDate=new Date(2023,0,6,15,20);
// const myCreatedDate=new Date("06/15/2022");
const myCreatedDate=new Date("2023-01-20");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(typeof myTimeStamp);

let newDate=new Date();
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday: "long",
})