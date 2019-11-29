function damagedOrSunk(board, attacks) {
	if (!Array.isArray(board) || !Array.isArray(attacks)) {
		throw new Error("both arguments have to be an array")
	}

	board.reverse();
	attacks.forEach((elem, idx, arr) => {
		arr[idx] = elem.map(x => x - 1)
	})

	const ships = [0, 0, 0, 0];
	const boardHits = [0, 0, 0, 0];
	const gameResult = {
		sunk: 0,
		damaged: 0,
		notTouched: 0,
		points: 0,
	};

	board.forEach((cur) => {
		cur.forEach((elem) => {
			if (elem > 0) {
				ships[elem] += 1
			}
		})
	})
	attacks.forEach((cur) => {
		boardHits[board[cur[1]][cur[0]]] += 1;
	})

	ships.filter((x) => x > 0).forEach((cur, idx) => {
		idx += 1;
		let diff = ships[idx] - boardHits[idx];
		let isDamaged = !(ships[idx] === diff);
		if (diff <= 0) {
			gameResult["points"] += 1;
			gameResult["sunk"] += 1;
		} else if (isDamaged) {
			gameResult["points"] += 0.5;
			gameResult["damaged"] += 1;
		} else {
			gameResult["points"] -= 1;
			gameResult["notTouched"] += 1;
		}
	})

	return gameResult
}