import {
    buildFibSequence
} from "./../../src/task7.js"

export function task7Tests(Test) {
    describe("Task 7: Fibonacci numbers for the range", function () {
        it("Common correct input", function () {
            Test.deepEqual(buildFibSequence({
                min: 10,
                max: 50
            }), [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049]);
            Test.deepEqual(buildFibSequence({
                min: 0,
                max: 5
            }), [0, 1, 1, 2, 3]);
            Test.deepEqual(buildFibSequence({
                length: 15
            }), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(buildFibSequence({
                min: 10,
                max: 15,
                length: 12
            }), {
                status: "failed",
                reason: 'Min/max or length properties(not both at the same time)'
            });
            Test.deepEqual(buildFibSequence({
                min: 10,
                length: 12
            }), {
                status: "failed",
                reason: 'The object has to contain min and max (both at the same time) or length'
            });
            Test.deepEqual(buildFibSequence({
                min: 10,
                length: 12
            }), {
                status: "failed",
                reason: 'The object has to contain min and max (both at the same time) or length'
            });
            Test.deepEqual(buildFibSequence([]), {
                status: "failed",
                reason: 'Input has to be an object'
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(buildFibSequence({
                min: NaN,
                max: 50
            }), {
                status: "failed",
                reason: 'Min and max have to be a number between 1 and 100'
            });
            Test.deepEqual(buildFibSequence({
                min: false,
                max: 50
            }), {
                status: "failed",
                reason: 'Min and max have to be a number between 1 and 100'
            });
            Test.deepEqual(buildFibSequence({
                min: 45,
                max: Infinity
            }), {
                status: "failed",
                reason: 'Min and max have to be a number between 1 and 100'
            });
            Test.deepEqual(buildFibSequence({
                length: "45",
            }), {
                status: "failed",
                reason: 'Length has to be a number between 1 and 100'
            });
        });
    })
}