function myConcat(firstArr, ...args) {

    if (!Array.isArray(firstArr)) {
        throw new Error("The first argument has to be an array")
    }

    const finalArray = [...firstArr];

    if (args.length > 0) {

        args.forEach(element => {
            if (Array.isArray(element)) {
                finalArray.push(...element)
            } else {
            	finalArray.push(element)
            }
        })
    }

    return finalArray
}

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(myConcat(array1, array2));



////////////////////////////////////////////////////////////  fromIndex БОЛЬШЕ ИЛИ РАВЕН ДЛИНЕ МАССИВА

function myLastIndexOf(str, value, startPosition = 0) {
	if (startPosition) {
		str = str.slice(0, startPosition)
	}

	value = new RegExp(`${value}+(?!.*${value})`, "s");

	return str.match(value) ? str.match(value)["index"] : -1  
}

console.log(myLastIndexOf('канал', 'а'));     // Should return 3
console.log(myLastIndexOf('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?', 'dog'));     // Should return 52
console.log(myLastIndexOf('canal', 'a', 2));     // Should return 1
console.log(myLastIndexOf('canal', 'x'));     // Should return -1


//////////////////////////////////////////////////////////// 

function myIncludes(arr, searchElement, fromIndex = 0) {
	if (fromIndex) {
		arr = arr.splice(fromIndex)
	}
	arr = arr.join(" ");
	searchElement = new RegExp(`\\b${searchElement}\\b`)
	return searchElement.test(arr)
}


console.log(myIncludes(['cat', 'dog', 'bat'], 'cat')); // expected output: true
console.log(myIncludes(['cat', 'dog', 'bat'], 'cat')); // expected output: true
console.log(myIncludes([1, 2, 3], 2));     // true
console.log(myIncludes([1, 2, 3], 4));     // false
console.log(myIncludes([1, 2, 3], 3, 3));  // false
console.log(myIncludes([1, 2, 3], 3, -1)); // true
console.log(myIncludes([1, 2, NaN], NaN)); // true

//////////////////////////////////////////////////////////// 