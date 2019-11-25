mocha.setup('bdd');
let Test = chai.assert;

describe("Sample tests", function() {
	
	it("Tests", function() {
		Test.deepEqual(menStillStanding([]), [11,11]);
		Test.deepEqual(menStillStanding(["A4Y", "A4Y"]), [10,11]);
		Test.deepEqual(menStillStanding(["A4Y", "A4R"]), [10,11]);
		Test.deepEqual(menStillStanding(["A4Y", "A5R", "B5R", "A4Y", "B6Y"]), [9,10]);
		Test.deepEqual(menStillStanding(["A4R", "A4R", "A4R",]), [10,11]);
		Test.deepEqual(menStillStanding(["A4R", "A6R", "A8R", "A10R", "A11R"]), [6,11]);
	});
});

mocha.run();


