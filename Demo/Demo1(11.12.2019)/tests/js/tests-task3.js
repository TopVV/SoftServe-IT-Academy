import {
    sortTriangles
} from "./../../src/task3.js"

export function task3Tests(Test) {
    describe("Task 3: Triangles sorting", function () {
        it("Common correct input", function () {

            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: 8,
                b: 8,
                c: 8
            }, {
                vertices: "QWE",
                q: 1,
                w: 1,
                e: 1
            }, {
                vertices: "RTY",
                r: 100,
                t: 100,
                y: 100
            }, {
                vertices: "BNM",
                b: 55,
                n: 55,
                m: 55
            }]), ['RTY', 'BNM', 'ABC', 'QWE']);
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: 3,
                b: 4,
                c: 5
            }, {
                vertices: "DFG",
                d: 5,
                f: 12,
                g: 13
            }, {
                vertices: "JKL",
                j: 8,
                k: 15,
                l: 17
            }, {
                vertices: "FGH",
                f: 9,
                g: 40,
                h: 41
            }, {
                vertices: "OPI",
                o: 7,
                p: 24,
                i: 25
            }]), ['FGH', 'OPI', 'JKL', 'DFG', 'ABC']);
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: 3,
                b: 4,
                c: 5
            }, {
                vertices: "JKL",
                j: 8,
                k: 15,
                l: 17
            }, {
                vertices: "FGH",
                f: 9,
                g: 40,
                h: 41
            }]), ['FGH', 'JKL', 'ABC']);

        });
        it("Incorrect type of input data", function () {
            Test.deepEqual(sortTriangles({}), {
                status: "failed",
                reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
            });
            Test.deepEqual(sortTriangles(false), {
                status: "failed",
                reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
            });
            Test.deepEqual(sortTriangles(123), {
                status: "failed",
                reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
            });
            Test.deepEqual(sortTriangles(NaN), {
                status: "failed",
                reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
            });
            Test.deepEqual(sortTriangles("false"), {
                status: "failed",
                reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
            });
            Test.deepEqual(sortTriangles([123, 4, ""]), {
                status: "failed",
                reason: "The array has to contain objects only"
            });
            Test.deepEqual(sortTriangles([123, 4, ""]), {
                status: "failed",
                reason: "The array has to contain objects only"
            });
            Test.deepEqual(sortTriangles([{
                vertices: 123
            }]), {
                status: "failed",
                reason: 'The 1 object of the array has to contain "vertices" property  with 3 unique letters in the uppercase'
            });
            Test.deepEqual(sortTriangles([{
                vertices: ""
            }]), {
                status: "failed",
                reason: 'The 1 object of the array has to contain "vertices" property  with 3 unique letters in the uppercase'
            });
            Test.deepEqual(sortTriangles([{
                vertices: "asd"
            }]), {
                status: "failed",
                reason: 'The 1 object of the array has to contain "vertices" property  with 3 unique letters in the uppercase'
            });
            Test.deepEqual(sortTriangles([{
                vertices: NaN
            }]), {
                status: "failed",
                reason: 'The 1 object of the array has to contain "vertices" property  with 3 unique letters in the uppercase'
            });
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: NaN,
                b: 4,
                c: 5
            }]), {
                status: "failed",
                reason: `One or more sides in the 1 object of the array is not a number`
            });
        });
        it("Incorrect min and max data of inputs", function () {
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: -3,
                b: 4,
                c: 5
            }]), {
                status: "failed",
                reason: `One or more sides in the 1 object of the array are not between 1 and 1000000`
            });
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: -3,
                b: 4,
            }]), {
                status: "failed",
                reason: `The vertices letters in the 1 object of the array have to match with sides property names`
            });
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: 99999999999,
                b: 4,
                c: 5
            }]), {
                status: "failed",
                reason: `One or more sides in the 1 object of the array are not between 1 and 1000000`
            });
            Test.deepEqual(sortTriangles([{
                vertices: "ABC",
                a: 123,
                b: 4,
                c: 5
            }]), {
                status: "failed",
                reason: `Sides in the 1 object of the array can't form a triangle`
            });
        });
    })
}