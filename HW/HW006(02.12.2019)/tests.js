mocha.setup('bdd');
let Test = chai.assert;

describe('Tests', function () {

	it("calculateQuipuStr", function () {
		Test.deepEqual(calculateQuipuStr("@~@@*@@"), "@@~@@@@")
		Test.deepEqual(calculateQuipuStr("@~@@+@@~~"), "@@@~@@")
		Test.deepEqual(calculateQuipuStr("@~~~~@+@~@@"), "@~~~@~@@@")
		Test.deepEqual(calculateQuipuStr("@~~-@@"), "@@@@@@@@")
		Test.deepEqual(calculateQuipuStr("@~~*@@/@@@@-@@"), "@@@")
		Test.deepEqual(calculateQuipuStr("(@~@@+@~@@@)*@~~~~"), "@@~@@@@@~~~~")
	});

	it("foundationMessage", function () {
		let str = 'Yesterday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Actually, forget I said that. It was probably for the best - staying on this forever wasn\'t going lead anywhere good. I mean, I should not hold on to it forever. For what it\'s worth, I\'m glad it forced me to get out of this dreamy illusion. A lesson for further down the road. A sort of instructions manual for life is what these past weeks have been, and it was all thanks to her.'
		Test.deepEqual(foundationMessage(str), 'The mission has been done. On hold for further instructions.')
	});

});

mocha.run();