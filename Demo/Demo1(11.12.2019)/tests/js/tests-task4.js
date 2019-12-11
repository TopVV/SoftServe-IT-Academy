import {
    findPalindrome
} from "./../../src/task4.js"

export function task4Tests(Test) {
    describe("Task 4: Palindrome", function () {
        it("Common correct input", function () {
            Test.equal(findPalindrome(123456654123), "456654");
            Test.equal(findPalindrome(32145611654587), "45611654");
            Test.equal(findPalindrome(987001233210008), "0012332100");
            Test.equal(findPalindrome(458789987), "789987");
            Test.equal(findPalindrome(77), "77");
        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(findPalindrome("11"), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome({}), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome(false), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome(null), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(findPalindrome(0), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome(5), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome(-15), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
            Test.deepEqual(findPalindrome(5, 1, 78, 85555555), {
                status: "failed",
                reason: "Input has to be a number between 10 and 9007199254740991"
            });
        });
    })
}