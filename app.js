// import functions and 
import { getGuessedNumber(guess) } from './utils.js';
// grab DOM elements
const guess = document.getElementById('numberwang-input');
const button = document.getElementById('numberwang-button');

// initialize state
let correctNumber = Math.ceil(Math.random() * 20);
// set event listeners to update state and DOM
button.addEventListener('click', () => {
    if (guess <= correctNumber) {
        return '${guess} is too low! No Numberwang for you!';

    } else if (guess >= correctNumber) {
        return 'That guess is too damn high! ${guess} is NOT Numberwang!';

    } else {
        return 'Congratulations, ${guess} is Numberwang!';
    }
});