function myFill(arr, value, start = 0, end = arr.length) {
	if (start < 0) {
		start = start + arr.length
	}
	if (end < 0) {
		end = end + arr.length
	}
	return arr.map((currentValue, index) => {
		if (index >= start && index < end) {
			return value
		}
		return currentValue
	})
}


////////////////////////////////////////////////////////////


function myPop(arr) {
	let lastValue = arr[arr.length - 1];
	arr.length = arr.length - 1;
	return lastValue
}


////////////////////////////////////////////////////////////


function myPush(arr, ...values) {
	values.forEach(element => {
		arr[arr.length] = element
	})
	return arr.length
}


//////////////////////////////////////////////////////////// 


function myReverse(arr) {
	let arrCopy = Array.from(arr);
	arr = [];
	for (let i = arrCopy.length - 1; i >= 0; i--) {
		arr.push(arrCopy[i])
	}
	return arr
}


//////////////////////////////////////////////////////////// 


function myShift(arr) {
	let removedElement = arr[0];
	arr.map((currentValue, index, currentArr) => {
		if (index > 0) {
			arr[index - 1] = currentValue
		}
	})
	arr.length = arr.length - 1;
	return removedElement
}


//////////////////////////////////////////////////////////// 


function myUnshift(arr, ...values) {
	let nValues = values.length;
	let nArrElements = nValues + arr.length;
	let arrCopy = Array.from(arr);

	for (var i = 0; i < nArrElements; i++) {
		arr[i] = i < nValues ? values[i] : arrCopy[i - nValues]
	}

	return arr.length
}


//////////////////////////////////////////////////////////// 


function myJoin(arr, separator) {
	let str = "";
	arr.forEach((element, index) => {
		str += index < arr.length - 1 ? element + separator : element
	})
	return str
}


//////////////////////////////////////////////////////////// 


function mySlice(arr, begin = 0, end = arr.length) {
	if (begin > end) {
		return []
	}
	let slicedArr = [];
	arr.forEach((element, index) => {
		if (index >= begin && index < end) {
			slicedArr.push(element)
		}
	})
	return slicedArr
}


////////////////////////////////////////////////////////////


function mySplice(arr, start, deleteCount, ...values) {
	let slicedArrElements = arr.slice(start, start + deleteCount);
	let oldArrayFirstPart = arr.slice(0, start);
	let oldArraySecondPart = arr.slice(start + deleteCount, arr.length);
	
	arr.length = 0;
	arr = oldArrayFirstPart.concat(values, oldArraySecondPart);
	
	return slicedArrElements
}