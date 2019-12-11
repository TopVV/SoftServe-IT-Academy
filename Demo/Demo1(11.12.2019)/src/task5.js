import {
    task5Validator
} from "./../additional-scripts/validator.js";

export function countLuckyTickets(minMaxObj) {
    const isVal = task5Validator(minMaxObj);
    if (isVal !== null) {
        return isVal
    }

    const {
        min,
        max
    } = minMaxObj;

    let simpleCount = 0;
    let hardCount = 0;
    let winner;
    let nMax = Number(max);
    for (let i = Number(min); i <= nMax; i++) {
        i = i.toString();
        i = `${"0".repeat(6-i.length)}${i}`;
        if (simpleMethodCheck(i)) {
            simpleCount += 1;
        }
        if (hardMethodCheck(i)) {
            hardCount += 1;
        }
    }
    if (simpleCount > hardCount) {
        winner = "Simple";
    } else if (simpleCount < hardCount) {
        winner = "Hard";
    } else {
        winner = "Equal amount"
    }
    return {
        winner,
        simple: simpleCount,
        hard: hardCount,
    }
}

function simpleMethodCheck(str) {
    return Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5])
}

function hardMethodCheck(str) {
    return Number(str[0]) + Number(str[2]) + Number(str[4]) === Number(str[1]) + Number(str[3]) + Number(str[5])
}