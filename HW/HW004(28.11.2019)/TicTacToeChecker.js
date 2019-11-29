function TicTacToeChecker(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('the argument has to be an array')
	}

	let horizontal1 = arr[0];
	let horizontal2 = arr[1];
	let horizontal3 = arr[2];
	let vertical1 = [arr[0][0], arr[1][0], arr[2][0]];
	let vertical2 = [arr[0][1], arr[1][1], arr[2][1]];
	let vertical3 = [arr[0][2], arr[1][2], arr[2][2]];
	let diagonal1 = [arr[0][0], arr[1][1], arr[2][2]];
	let diagonal2 = [arr[0][2], arr[1][1], arr[2][0]];
	let hasEmptySpots = 0;
	let xWon = 0;
	let oWon = 0;
	let isDraw = 0;

	boardsLines = [horizontal1, horizontal2, horizontal3, vertical1, vertical2, vertical3, diagonal1, diagonal2];

	boardsLines.forEach((currentLine) => {
		if (!xWon && !oWon) {
			if (currentLine.includes(0)) {
				hasEmptySpots = -1;
				return
			} else if (currentLine.every((item) => item === 1)) {
				xWon = 1;
				return
			} else if (currentLine.every((item) => item === 2)) {
				oWon = 2;
				return
			}
		}
	})

	return xWon || oWon || hasEmptySpots || isDraw
}