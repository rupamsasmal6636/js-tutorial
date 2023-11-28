// property of forEach(): it iterate elements but not return anything


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const values = myNums.forEach( (nums) => {
    if(nums>4) return nums;
} )

console.log(values); // so it will print -> undefined

// so how to fix this issue?

let newArr=[]
myNums.forEach((nums)=> {
    if(nums>4) newArr.push(nums);
})
console.log(newArr); // now it will work


// here comes the concept of filter()... it will return if condition is true

let filterArray= myNums.filter((nums)=> nums>4);
console.log(filterArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const filterBooks = books.filter((book)=>{
    return book.genre==='Non-Fiction' && book.edition>2000;
})
console.log(filterBooks);