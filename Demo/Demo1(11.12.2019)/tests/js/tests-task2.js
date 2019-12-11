import {
    envelopeAnalysis
} from "./../../src/task2.js"

export function task2Tests(Test) {
    describe("Task 2: Envelopes Analysis", function () {
        it("Common correct input", function () {
            Test.deepEqual(envelopeAnalysis({
                a: 11,
                b: 1
            }, {
                c: 10,
                d: 10
            }), 2);
            Test.deepEqual(envelopeAnalysis({
                a: 13,
                b: 1
            }, {
                c: 10,
                d: 10
            }), 2);
            Test.deepEqual(envelopeAnalysis({
                a: 50,
                b: 50
            }, {
                c: 10,
                d: 10
            }), 1);
            Test.deepEqual(envelopeAnalysis({
                a: 10,
                b: 10
            }, {
                c: 1,
                d: 11
            }), 1);
            Test.deepEqual(envelopeAnalysis({
                a: 10,
                b: 10
            }, {
                c: 80,
                d: 70
            }), 2);
            Test.deepEqual(envelopeAnalysis({
                a: 10,
                b: 10
            }, {
                c: 10,
                d: 10
            }), 0);
            Test.deepEqual(envelopeAnalysis({
                a: 90,
                b: 1
            }, {
                c: 50,
                d: 50
            }), 0);
        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(envelopeAnalysis("11", 1, 10, 10), {
                status: "failed",
                reason: "Input has to include two envelopes objects with a,b and c,d sides"
            });
            Test.deepEqual(envelopeAnalysis(5, [1], {}, 10), {
                status: "failed",
                reason: "Input has to include two envelopes objects with a,b and c,d sides"
            });
            Test.deepEqual(envelopeAnalysis({
                a: 5,
                b: 1
            }, {
                c: 4,
                d: false
            }), {
                status: "failed",
                reason: "Envelopes sides have to be a number"
            });
            Test.deepEqual(envelopeAnalysis({}, {}), {
                status: "failed",
                reason: "Envelopes objects have to have a,b and c,d sides"
            });
            Test.deepEqual(envelopeAnalysis({
                c: 1,
                d: 5
            }, {
                a: 1,
                b: 5
            }), {
                status: "failed",
                reason: "Envelopes objects have to have a,b and c,d sides"
            });
            Test.deepEqual(envelopeAnalysis({
                a: NaN,
                b: 15
            }, {
                c: 2,
                d: false
            }), {
                status: "failed",
                reason: "Envelopes sides have to be a number"
            });
            Test.deepEqual(envelopeAnalysis({
                a: Infinity,
                b: 1
            }, {
                c: 78,
                d: 88
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                c: 1,
                b: 5
            }, {
                e: 1,
                t: 5
            }), {
                status: "failed",
                reason: "Envelopes objects have to have a,b and c,d sides"
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(envelopeAnalysis({
                a: -100,
                b: 5
            }, {
                c: 5,
                d: 7
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                a: -Infinity,
                b: 1
            }, {
                c: 22,
                d: 32
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                a: NaN,
                b: 3
            }, {
                c: 5,
                d: 6
            }), {
                status: "failed",
                reason: "Envelopes sides have to be a number"
            });
            Test.deepEqual(envelopeAnalysis({
                a: 515151515,
                b: 99
            }, {
                c: 0,
                d: 0
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                a: 47,
                b: -99
            }, {
                c: 0,
                d: 0
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                a: 15,
                b: 99
            }, {
                c: -10,
                d: 0
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
            Test.deepEqual(envelopeAnalysis({
                a: -11,
                b: 99
            }, {
                c: -10,
                d: 0
            }), {
                status: "failed",
                reason: "Envelopes sides have to be between 1 and 1000000"
            });
        });
    })
}