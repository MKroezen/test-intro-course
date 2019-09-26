export class StringValidator {
    public throwErrorIfStringsAreNotEqual(expected: string, actual: string): void {
        if (expected !== actual) {
            throw new Error(`Expected the strings '${expected}' and '${actual}' to be equal`);
        }
    }

    public throwErrorIFString1DoesNotContainString2(string1: string, string2: string): void {
        if (!string1.includes(string2)) {
            throw new Error(`Expected string:'${string1}' to contain '${string2}'`);
        }
    }

    public areStringsEqual(expected: string, actual: string): boolean {
        return expected === actual
    }
    
    public doesString1ContainString2(string1: string, string2: string): boolean {
       return string1.includes(string2)
    }
}
