import {
    task7Validator
} from "./../additional-scripts/validator.js";

export function buildFibSequence(obj) {
    const isVal = task7Validator(obj);
    if (isVal !== null) {
        return isVal
    }

    if (obj.hasOwnProperty("length")) {
        return generateFib(obj.length);
    } else if (obj.hasOwnProperty("min") && obj.hasOwnProperty("max")) {
        return generateFib(obj.max).slice(obj.min)
    }
}

function generateFib(maxLength) {
    let a = 1;
    let b = 0;
    const fibArr = [];
    for (let i = 0; i < maxLength; i++) {
        fibArr.push(b);
        [a, b] = [a + b, a];
    }
    return fibArr
}