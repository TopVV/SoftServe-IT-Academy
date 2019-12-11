import {
    numSequence
} from "./../../src/task6.js"

export function task6Tests(Test) {
    describe("Task 6: Numeric sequence", function () {
        it("Common correct input", function () {
            Test.deepEqual(numSequence(10, 90), "10,11,12,13,14,15,16,17,18,19");
            Test.deepEqual(numSequence(5, 15), "4,5,6,7,8");
            Test.deepEqual(numSequence(14, 97), "10,11,12,13,14,15,16,17,18,19,20,21,22,23");
        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(numSequence(123, []), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(123, "748"), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(false, 748), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(NaN, 748), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(Infinity, 748), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(numSequence(5925, -5665), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(0, 0), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(5925, 15), {
                status: "failed",
                reason: 'Length has to be an integer number between 1 and 100'
            });
            Test.deepEqual(numSequence(25, 11555), {
                status: "failed",
                reason: 'Min square has to be a number between 1 and 10000'
            });
        });
    })
}