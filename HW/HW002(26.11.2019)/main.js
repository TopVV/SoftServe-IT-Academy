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


//////////////////////////////////////////////////////////// 


function myLastIndexOf(str, value, startPosition = 0) {
    if (startPosition) {
        str = str.slice(0, startPosition)
    }

    value = new RegExp(`${value}+(?!.*${value})`, "s");

    return str.match(value) ? str.match(value)["index"] : -1
}


////////////////////////////////////////////////////////////


function myIncludes(arr, searchElement, fromIndex = 0) {
    if (fromIndex) {
        arr = arr.splice(fromIndex)
    }
    arr = arr.join(" ");
    searchElement = new RegExp(`\\b${searchElement}\\b`)
    return searchElement.test(arr)
}


//////////////////////////////////////////////////////////// 


function myRepeat(str, count) {

    // if (count<0) {
    // 	throw new Error("has")
    // }

    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(str)
    }
    return arr.join("")
}


////////////////////////////////////////////////////////////


function mySubstr(str, start = 0, length = 0) {
    start = start < 0 ? str.length + start : start;
    let arr = str.split("");
    if (!length) {
        length = arr.length;
    }
    let substrArr = [];
    for (let i = start; i < start + length; i++) {
        substrArr.push(arr[i])
    }
    return substrArr.join("")
}


////////////////////////////////////////////////////////////


function mySubstring(str, indexStart = 0, indexEnd = str.length) {
    indexStart = indexStart < 0 ? 0 : indexStart;
    if (indexStart > indexEnd) {
        let temp = indexStart;
        indexStart = indexEnd;
        indexEnd = temp
    }
    let arr = str.split("");
    let substringArr = [];
    for (let i = indexStart; i < indexEnd; i++) {
        substringArr.push(arr[i])
    }
    return substringArr.join("")
}