// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('Too low of number guessed and user told it is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'toolow';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getGuess;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Correct number guessed and user is told it is correct', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'toolow';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getGuess;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Too low of number guessed and user told it is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'toolow';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getGuess;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
