function meeting(roomsArray, chairsNeeded) {
	let chairsMax = 8;


	if (!Array.isArray(roomsArray)) {
		throw new Error('the first argument has to be an array')
	} else if (chairsNeeded > chairsMax || chairsNeeded < 0) {
		throw new Error('chairs amount have to be between 1 and 8')
	}

	if (chairsNeeded === 0) {
		return 'Game On'
	}

	let chairsNow = chairsMax - chairsNeeded;
	let spareChairsByRooms = [];

	roomsArray.forEach((element) => {
		if (chairsNow < 8 && element[0].length < element[1]) {
			let spareChairs = element[1] - element[0].length;
			chairsNow += spareChairs;
			spareChairsByRooms.push(spareChairs);
		} else if (chairsNow < 8) {
			spareChairsByRooms.push(0)
		}
	})

	return chairsNow === 8 ? spareChairsByRooms : 'Not enough!'
}