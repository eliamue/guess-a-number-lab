export function compareNumbers(guess) {
    let correctNumber = Math.ceil(Math.random() * 20);
    if (guess < correctNumber) {
        return -1;

    } else if (guess > correctNumber) {
        return 1;

    } else {
        return 0;
    }
}