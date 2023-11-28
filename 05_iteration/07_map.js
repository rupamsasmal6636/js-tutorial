// map is almost same as forEach, except it returns something, forEach doesn't
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNums.map( (num)=>{
    return num+10;
})

console.log(newNums);

const newNums2= myNums
                    .map((num)=> num*10)
                    .map((num)=> num+5)
                    .filter((num)=> num<=35)

console.log(newNums2);