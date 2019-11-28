mocha.setup('bdd');
let Test = chai.assert;

describe("Sample tests", function () {

	it("myConcat", function () {
		Test.deepEqual(myConcat(['a', 'b', 'c'], ['d', 'e', 'f']), ["a", "b", "c", "d", "e", "f"]);
		Test.deepEqual(myConcat([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
		Test.deepEqual(myConcat(['a', 'b', 'c'], 1, [2, 3]), ['a', 'b', 'c', 1, 2, 3]);
	});
	it("myLastIndexOf", function () {
		Test.deepEqual(myLastIndexOf('канал', 'а'), 3);
		Test.deepEqual(myLastIndexOf('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', 'dog'), 52);
		Test.deepEqual(myLastIndexOf('canal', 'a', 2), 1);
		Test.deepEqual(myLastIndexOf('canal', 'a', 2), 1);
		Test.deepEqual(myLastIndexOf('canal', 'x'), -1);
	});
	it("myIncludes", function () {
		Test.deepEqual(myIncludes(['cat', 'dog', 'bat'], 'cat'), true);
		Test.deepEqual(myIncludes([1, 2, 3], 2), true);
		Test.deepEqual(myIncludes([1, 2, 3], 4), false);
		Test.deepEqual(myIncludes([1, 2, 3], 3, 3), false);
		Test.deepEqual(myIncludes([1, 2, 3], 3, -1), true);
		Test.deepEqual(myIncludes([1, 2, NaN], NaN), true);
	});
	it("myRepeat", function () {
		Test.deepEqual(myRepeat("abc", 2), "abcabc");
		Test.deepEqual(myRepeat("abc", 3.5), "abcabcabcabc");
		Test.deepEqual(myRepeat("Hello world!", 2), "Hello world!Hello world!");
	});
	it("mySubstr", function () {
		Test.deepEqual(mySubstr("Hello world!", 1, 4), "ello");
		Test.deepEqual(mySubstr("Hello world!", 11, 1), "!");
		Test.deepEqual(mySubstr("Mozilla", -1, 1), "a");
	});
	it("mySubstring", function () {
		Test.deepEqual(mySubstring("Hello world!", 2), "llo world!");
		Test.deepEqual(mySubstring("Hello world!", 4, 1), "ell");
		Test.deepEqual(mySubstring("Hello world!", -3), "Hello world!");
		Test.deepEqual(mySubstring("Hello world!", 0, 1), "H");
		Test.deepEqual(mySubstring("Mozilla", 0, 1), "M");
		Test.deepEqual(mySubstring("Mozilla", 0, 6), "Mozill");
		Test.deepEqual(mySubstring("It is a great day.", 5), " a great day.");
	});

});

mocha.run();