export class NumberValidator {
    public validateNumbersAreEqual(expected: number, actual: number): void {
        if (expected !== actual) {
            throw new Error(`Expected the number ${expected} to equal ${actual}`);
        }
    }

    public validateNumber1IsGreaterAsNumber2(number1: number, number2: number): void {
        throw new Error(`Expected a number greater then ${number1} but found ${number2}`);
    }
}
