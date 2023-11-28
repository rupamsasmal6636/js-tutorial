// reduce() is specially used to sum up value and it returns a single value

const myNums = [1, 2, 3]

const sumVal= myNums.reduce((prev,curr)=>{
    return prev+curr;
},3); // here 3 is initial prev value

console.log(sumVal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalShoppingCost= shoppingCart.reduce((accu,currItem)=> accu+currItem.price,0);
console.log(totalShoppingCost);