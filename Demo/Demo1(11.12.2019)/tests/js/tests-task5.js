import {
    countLuckyTickets
} from "./../../src/task5.js"

export function task5Tests(Test) {
    describe("Task 5: Lucky Tickets", function () {
        it("Common correct input", function () {
            Test.deepEqual(countLuckyTickets({
                min: "000001",
                max: "999999"
            }), {
                winner: "Equal amount",
                simple: 55251,
                hard: 55251
            });
            Test.deepEqual(countLuckyTickets({
                min: "000000",
                max: "100000"
            }), {
                winner: "Equal amount",
                simple: 4840,
                hard: 4840
            });
            Test.deepEqual(countLuckyTickets({
                min: "850000",
                max: "999999"
            }), {
                winner: "Hard",
                simple: 6905,
                hard: 8055
            });
        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(countLuckyTickets({
                a: 123
            }), {
                status: "failed",
                reason: 'Input has to be an object with "min" and "max" property'
            });
            Test.deepEqual(countLuckyTickets({
                min: "1"
            }), {
                status: "failed",
                reason: 'Input has to be an object with "min" and "max" property'
            });
            Test.deepEqual(countLuckyTickets({
                min: false,
                max: NaN
            }, "999999"), {
                status: "failed",
                reason: 'Min and max have to be a 6 character string'
            });
            Test.deepEqual(countLuckyTickets([{}], false), {
                status: "failed",
                reason: 'Input has to be an object with "min" and "max" property'
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(countLuckyTickets({
                min: "999999",
                max: "11999999"
            }), {
                status: "failed",
                reason: 'Min and max have contain a number between 000000 and 999999'
            });
            Test.deepEqual(countLuckyTickets({
                min: "-50000",
                max: "999999"
            }), {
                status: "failed",
                reason: 'Min and max have contain a number between 000000 and 999999'
            });
            Test.deepEqual(countLuckyTickets({
                min: "-Infinity",
                max: "800"
            }), {
                status: "failed",
                reason: 'Min and max have to be a 6 character string'
            });
        });
    })
}