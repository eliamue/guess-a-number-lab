// import functions and 
import { compareNumbers } from './utils.js';
// grab DOM elements
const userInput = document.getElementById('numberwang-input');
const button = document.getElementById('numberwang-button');
const result = document.getElementById('attempts');
const wrongGuess = document.getElementById('attempts');

// initialize state

let numGuess = 0;
let correctNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const guess = Number(userInput.value);
    numGuess = numGuess + 1;

    if (compareNumbers(guess, correctNumber) === 0) {
        result.textContent = 'That is Numberwang! You got it in ' + numGuess + ' tries!';
    } else if (compareNumbers(guess, correctNumber) === 1) {
        wrongGuess.textContent = guess + ' is too damn high. No Numberwang! You have tried ' + numGuess + ' times.';
    } else if (compareNumbers(guess, correctNumber) === -1) {
        wrongGuess.textContent = guess + ' is too low- no Numberwang for you! You have made ' + numGuess + ' attempts';
    }
    console.log(compareNumbers(guess, correctNumber));
});