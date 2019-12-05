mocha.setup('bdd');
let Test = chai.assert;

describe('Tests', function () {

	it("countdown", function () {
		Test.deepEqual(countdown(-154800000), '-43:00:00');
		Test.deepEqual(countdown(0), '+00:00:00');
		Test.deepEqual(countdown(61000), '+00:01:01');
		Test.deepEqual(countdown(360000000), '+100:00:00');
	});



	it("dateFilter", function () {
		var baseDate = new Date(1970,0);
	/* 	var baseInt = (1970);
		var baseStr = '1970,0'; */

		var formats = {
			'HH:mm': '00:00',
			'dd/MM/yyyy': '01/01/1970',
			'd/M/yy H%m': '1/1/70 0%0',
			'ss@mm == s@m': '00@00 == 0@0'
		};

		for (var f in formats) {
			Test.deepEqual(dateFilter(baseDate, f), formats[f]);
			/* Test.deepEqual(dateFilter(baseStr, f), formats[f]);
			Test.deepEqual(dateFilter(baseInt, f), formats[f]); */
		}
	});


});

mocha.run();