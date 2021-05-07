// import functions and 
import { compareNumbers } from './utils.js';
// grab DOM elements
const userInput = document.getElementById('numberwang-input');
const button = document.getElementById('numberwang-button');
const result = document.getElementById('attempts');
const wrongGuess = document.getElementById('attempts');
const resetButton = document.getElementById('reset-button');
const winImg = document.getElementById('winner');
const loseImg = document.getElementById('wangernumb');
// initialize state

let numGuess = 0;
let correctNumber = Math.ceil(Math.random() * 20);
let countGuess = 5;


// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const guess = Number(userInput.value);
    numGuess = numGuess + 1;
    countGuess = countGuess - 1;

    if (countGuess === 0) {
        wrongGuess.textContent = 'Oh no, You failed! That is Wangernumb, goodbye forever.';
        numGuess = 0;
        correctNumber = Math.ceil(Math.random() * 20);
        winImg.style.display = 'none';
        loseImg.style.display = 'block';
        resetButton.style.display = 'block';

    } else if (compareNumbers(guess, correctNumber) === 0) {
        result.textContent = 'You got Numberwang in ' + numGuess + ' tries!';
        winImg.style.display = 'block';
        resetButton.style.display = 'block';
        button.disabled = true;

    } else if (compareNumbers(guess, correctNumber) === 1) {
        wrongGuess.textContent = guess + ' is too damn high. No Numberwang! You have tried ' + numGuess + ' times and you have ' + countGuess + ' tries left';
        wrongGuess.style.display = 'block';
    } else if (compareNumbers(guess, correctNumber) === -1) {
        wrongGuess.textContent = guess + ' is too low- no Numberwang for you! You have made ' + numGuess + ' attempts and you have ' + countGuess + ' tries left';
        wrongGuess.style.display = 'block';
    }
    console.log(compareNumbers(guess, correctNumber));
});

resetButton.addEventListener('click', () => {
    numGuess = 0;
    wrongGuess.style.display = 'none';
    correctNumber = Math.ceil(Math.random() * 20);
    winImg.style.display = 'none';
    loseImg.style.display = 'none';
    button.disabled = false;
});