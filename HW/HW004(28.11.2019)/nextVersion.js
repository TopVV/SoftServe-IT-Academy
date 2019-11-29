function nextVersion(str) {
	if (!(typeof (str) === 'string')) {
		throw new Error('the argument has to be a string')
	}
	let arrStr = str.split('.').map((item) => Number(item));
	arrStr.forEach((item) => {
		if (item < 0 || item > 9 || !isFinite(item)) {
			throw new Error('incorrect input - has to be numbers from 0 to 9 and(or) \".\"')
		}
	})

	arrLength = arrStr.length;
	arrStr = arrStr.reverse();
	arrStr[0] += 1;
	arrStr.forEach((item, index, arr) => {
		if ((index + 1 < arrLength && item === 10) || (index + 1 === undefined && item === 10)) {
			arr[index] = 0;
			arr[index + 1] += 1;
		}
	})
	arrStr.reverse();

	return arrStr.join(".")
}