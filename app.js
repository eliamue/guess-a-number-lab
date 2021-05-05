// import functions and 
import { compareNumbers } from './utils.js';
// grab DOM elements
const userInput = document.getElementById('numberwang-input');
const button = document.getElementById('numberwang-button');
const result = document.getElementById('feedback-numberwang');
const wrongGuess = document.getElementById('attempts');

// initialize state
let input = userInput.value;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    
    if (compareNumbers(input) === 0) {
        result.textContent = 'That is Numberwang!';
    } else if (compareNumbers(input) === 1) {
        wrongGuess.textContent = '${result} is too damn high. No Numberwang!';
    } else if (compareNumbers(input) === -1) {
        wrongGuess.textContent = '${result} is too low- no Numberwang for you!';
    }
});