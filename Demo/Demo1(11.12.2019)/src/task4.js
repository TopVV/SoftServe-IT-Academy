import {
    task4Validator
} from "./../additional-scripts/validator.js";

export function findPalindrome(inputNumber) {
    const isVal = task4Validator(inputNumber);
    if (isVal !== null) {
        return isVal
    }


    if (checkIfPalindrome(inputNumber)) {
        return inputNumber;
    }
    const inputStr = inputNumber.toString();
    const palindromesArray = [];
    for (let i = 0; i < inputStr.length; i++) {
        for (let j = inputStr.length; j > i + 1; j--) {
            let strToCheck = inputStr.slice(i, j);
            if (checkIfPalindrome(strToCheck)) {
                palindromesArray.push(strToCheck)
            }
        }
    }
    return palindromesArray.length ? palindromesArray.sort((a, b) => b - a)[0] : 0
}


function checkIfPalindrome(numValue) {
    const strValue = numValue.toString();
    const strLength = Math.floor(strValue.length / 2);
    for (let i = 0; i < strLength; i++) {
        const leftPartNumber = strValue[i];
        const rightPartNumber = strValue[strValue.length - i - 1];
        if (leftPartNumber !== rightPartNumber) {
            return false
        }
    }
    return true
}
