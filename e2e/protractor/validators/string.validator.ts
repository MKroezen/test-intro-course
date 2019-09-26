export class StringValidator {
    public validateEquality(expected: string, actual: string): void {
        if (expected !== actual) {
            throw new Error(`Expected the strings '${expected}' and '${actual}' to be equal`);
        }
    }

    public validateString1ContainsString2(string1: string, string2: string): void {
        if (!string1.includes(string2)) {
            throw new Error(`Expected string1 '${string1}' to contain '${string2}'`);
        }
    }
}
