mocha.setup('bdd');
let Test = chai.assert;

describe('Sample tests', function () {

	it('meeting', function () {
		Test.deepEqual(meeting([
			['XXX', 3],
			['XXXXX', 6],
			['XXXXXX', 9]
		], 4), [0, 1, 3]);
		Test.deepEqual(meeting([
			['XXX', 1],
			['XXXXXX', 6],
			['X', 2],
			['XXXXXX', 8],
			['X', 3],
			['XXX', 1]
		], 5), [0, 0, 1, 2, 2]);
		Test.deepEqual(meeting([
			['XX', 2],
			['XXXX', 6],
			['XXXXX', 4]
		], 0), 'Game On');
	});
	it('nextVersion', function () {
		Test.deepEqual(nextVersion("1.2.3"), "1.2.4");
		Test.deepEqual(nextVersion("0.9.9"), "1.0.0");
		Test.deepEqual(nextVersion("1"), "2");
		Test.deepEqual(nextVersion("1.2.3.4.5.6.7.8"), "1.2.3.4.5.6.7.9");
		Test.deepEqual(nextVersion("9.9"), "10.0");
	});
	it('TicTacToeChecker', function () {
		Test.deepEqual(TicTacToeChecker([
			[0, 0, 1],
			[0, 1, 2],
			[2, 1, 0]
		]), -1);
		Test.deepEqual(TicTacToeChecker([
			[0, 0, 1],
			[0, 1, 2],
			[1, 1, 0]
		]), 1);
		Test.deepEqual(TicTacToeChecker([
			[0, 0, 2],
			[0, 1, 2],
			[2, 1, 2]
		]), 2);
		Test.deepEqual(TicTacToeChecker([
			[1, 2, 1],
			[1, 2, 2],
			[2, 1, 1]
		]), 0);
	});
	it('damagedOrSunk', function () {
		Test.deepEqual(damagedOrSunk([
			[0, 0, 0, 2, 2, 0],
			[0, 3, 0, 0, 0, 0],
			[0, 3, 0, 1, 0, 0],
			[0, 3, 0, 1, 0, 0]
		], [
			[2, 1],
			[1, 3],
			[4, 2]
		]), {
			sunk: 0,
			damaged: 2,
			notTouched: 1,
			points: 0
		});
	});

});

mocha.run();