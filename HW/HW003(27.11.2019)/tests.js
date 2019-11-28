mocha.setup('bdd');
let Test = chai.assert;

describe('Sample tests', function () {

	it('myFill', function () {
		Test.deepEqual(myFill([1, 2, 3], 4), [4, 4, 4]);
		Test.deepEqual(myFill([1, 2, 3], 4, 1), [1, 4, 4]);
		Test.deepEqual(myFill([1, 2, 3], 4, 1, 2), [1, 4, 3]);
		Test.deepEqual(myFill([1, 2, 3], 4, 1, 1), [1, 2, 3]);
		Test.deepEqual(myFill([1, 2, 3], 4, 3, 3), [1, 2, 3]);
		Test.deepEqual(myFill([1, 2, 3], 4, -3, -2), [4, 2, 3]);
		Test.deepEqual(myFill([1, 2, 3], 4, NaN, NaN), [1, 2, 3]);
		Test.deepEqual(myFill([1, 2, 3], 4, 3, 5), [1, 2, 3]);
	});
	it('myPop', function () {
		Test.deepEqual(myPop(['angel', 'clown', 'mandarin', 'sturgeon']), 'sturgeon');
		Test.deepEqual(myPop(['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']), 'tomato');
		Test.deepEqual(myPop(['broccoli', 'cauliflower', 'cabbage', 'kale']), 'kale');
	});
	it('myPush', function () {
		Test.deepEqual(myPush(['angel', 'clown', 'mandarin'], 'sturgeon'), 4);
		Test.deepEqual(myPush(['pigs', 'goats', 'sheep'], 'pigs', 'goats', 'sheep', 'cows'), 7);
		Test.deepEqual(myPush(['broccoli', 'cauliflower', 'cabbage', 'kale'], 'broccoli'), 5);
	});
	it('myReverse', function () {
		Test.deepEqual(myReverse(['angel', 'clown', 'mandarin']), ['mandarin', 'clown', 'angel']);
		Test.deepEqual(myReverse(['one', 'two', 'three']), ['three', 'two', 'one']);
		Test.deepEqual(myReverse([1, 2, 3]), [3, 2, 1]);
	});
	it('myShift', function () {
		Test.deepEqual(myShift(['one', 'two', 'three']), 'one');
		Test.deepEqual(myShift(['pigs', 'goats', 'sheep']), 'pigs');
		Test.deepEqual(myShift(['goats', 'sheep', 'cows']), 'goats');
	});
	it('myUnshift', function () {
		Test.deepEqual(myUnshift([1, 2, 3], 4, 5), 5);
		Test.deepEqual(myUnshift([4, 5, 6], 1, 2, 3), 6);
		Test.deepEqual(myUnshift(['goats', 'sheep', 'cows'], 'goats', 'pigs'), 5);
	});
	it('myJoin', function () {
		Test.deepEqual(myJoin(['pigs', 'goats', 'sheep'], "!!!"), "pigs!!!goats!!!sheep");
		Test.deepEqual(myJoin(['one', 'two', 'three'], "%"), "one%two%three");
		Test.deepEqual(myJoin([1, 2, 3], " "), "1 2 3");
	});
	it('mySlice', function () {
		Test.deepEqual(mySlice(['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'], 1, 3), ['Orange','Lemon']);
		Test.deepEqual(mySlice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2), ["camel", "duck", "elephant"]);
		Test.deepEqual(mySlice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2 , 4), ["camel", "duck"]);
	});
	it('mySplice', function () {
		Test.deepEqual(mySplice(['Jan', 'March', 'April', 'June'], 1, 0, 'Feb'), []);
		Test.deepEqual(mySplice(["Jan", "Feb", "March", "April", "June"], 4, 1, 'May'), ["June"]);
		Test.deepEqual(mySplice(['angel', 'clown', 'drum', 'mandarin', 'sturgeon'], 3, 1), ["mandarin"]);
	});

});

mocha.run();