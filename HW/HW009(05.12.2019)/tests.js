mocha.setup('bdd');
let Test = chai.assert;

describe("Example Tests", function(){
	it("mixbonacci tests", function () {
var tests = [
    [[[], 10], []],
    [[['fib'], 0], []],
    [[['fib'], 10], [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]],
    [[['pad'], 10], [1, 0, 0, 1, 0, 1, 1, 1, 2, 2]],
    [[['jac'], 10], [0, 1, 1, 3, 5, 11, 21, 43, 85, 171]],
    [[['pel'], 10], [0, 1, 2, 5, 12, 29, 70, 169, 408, 985]],
    [[['tri'], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]],
    [[['tet'], 10], [0, 0, 0, 1, 1, 2, 4, 8, 15, 29]],
    [[['fib', 'tet'], 10], [0, 0, 1, 0, 1, 0, 2, 1, 3, 1]],
    [[['jac', 'jac', 'pel'], 10], [0, 1, 0, 1, 3, 1, 5, 11, 2, 21]],
]
    for (var i = 0, l = tests.length; i < l; i++) {
    var tst = tests[i];
    var inp = tst[0];
    var exp = tst[1];
    
    var pattern = inp[0];
    var length = inp[1];
    Test.deepEqual(mixbonacci(pattern, length), exp);
  }  
});
});

mocha.run();