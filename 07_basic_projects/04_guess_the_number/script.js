// Generate random number
let randomNumber = parseInt(Math.random()*100+1)
console.log(randomNumber);

// select all required elements
const userInput=document.querySelector("#guessField")
const submit=document.querySelector("#guessSubmit")
const guessSlot=document.querySelector(".guesses")
const remaining= document.querySelector('.remaining')
const disMessage= document.querySelector('.displayMessage')
const startOver= document.querySelector('.resultParas')
const startOverValue=startOver.innerHTML; // to store previous html value of .resParas 

let numGuess = 0 // to count number of guesses
let playGame = true

// check whether eligible to play game or not
if(playGame){ // if eligible
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const num=parseInt(userInput.value) // storing the user given value
        // console.log(num);
        validateGuess(num) // now call this function to check the validation
    })
}

// validate the given number is between 0 to 100
function validateGuess(guess) {
    if(isNaN(guess)) alert('Please enter a valid number');
    else if(guess<1 || guess>100) alert('please enter a number between 1 to 100');
    else // if validation successful
        checkGuess(guess); // now call this function to check wheather it matched or not
}

// check the guess is equal the number or not
function checkGuess(guess) {
    if(guess===randomNumber){
        displayMessage("Congrats! You guessed the right number.");
        endGame();
    }
    else if(guess<randomNumber)
        displayMessage("The number is too low, try with the bigger number");
    else if(guess>randomNumber)
        displayMessage("The number is too high, try with the smaller number");
    
    displayResult(guess);
}
function displayMessage(message) {
    disMessage.innerHTML=`<h2>${message}</h2>`
}
function displayResult(guess) { // most important function
    // console.log("hi");
    guessSlot.innerHTML += `${guess} ` // store the given number
    numGuess++;
    remaining.innerHTML=`${10-numGuess}` // showing remaining attempts
    userInput.value=''; // clean the form
    checkPlayableOrNot(); // check attempts are remaing or not 
}
function checkPlayableOrNot() {
    if(numGuess>=10) {
        displayMessage("Your all attempts are over!")
        endGame()
    }
}
function endGame() {
    userInput.value='' // clear form
    userInput.setAttribute('disabled','')   // disable the form
    startOver.innerHTML='<button class="button" id="startButton">Start New Game</button>' // over-write starOver html
    playGame=false
    newGame()
}
function newGame() {
    const startButton= document.querySelector('#startButton');
    startButton.addEventListener('click',()=>{
        randomNumber= parseInt(Math.random()*100+1) // generate new random number
        console.log(randomNumber);
        numGuess=0 
        userInput.removeAttribute('disabled') // enable the form
        startOver.innerHTML=startOverValue // re-write previous html
        playGame=true
    })
}
