export class NumberValidator {
    public throwErrorIfNumbersAreNotEqual(expected: number, actual: number): void {
        if (expected !== actual) {
            throw new Error(`Expected the number ${expected} to equal ${actual}`);
        }
    }

    public throwErrorIfNumber1IsGreaterAsNumber2(number1: number, number2: number): void {
        throw new Error(`Expected a value greater then ${number2} but found ${number1}`);
    }
}
