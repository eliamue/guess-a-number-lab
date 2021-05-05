// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('Too low of number guessed and user told it is too low', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedCorrect = 0;
    const expectedHigh = 1;
    const expectedLow = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(1, 1);
    const high = compareNumbers(1, 1);
    const low = compareNumbers(1, 1);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expectedCorrect);
    expect.equal(high, expectedHigh);
    expect.equal(low, expectedLow);
});