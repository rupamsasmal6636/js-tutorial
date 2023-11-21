const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const myHeors = ["shaktiman", "naagraj"]

// marvel_heros.push(dc_heros) // this will ad as an array into array
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

const allHeros = marvel_heros.concat(dc_heros) // process 1-> using concat()
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros, ...myHeors] //  process 2-> spread array 
console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman', 'shaktiman', 'naagraj']

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 
const real_another_array = another_array.flat(Infinity) // to flatten format (1d)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]



console.log(Array.isArray("Hitesh")) // check whether it is array or not -> false
console.log(Array.from("Hitesh")) // create array from string -> [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // this will not create an array, so return dummy array -> []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // creating array -> [ 100, 200, 300 ]