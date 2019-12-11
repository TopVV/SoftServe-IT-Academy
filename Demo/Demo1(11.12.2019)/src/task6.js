import {
    task6Validator
} from "./../additional-scripts/validator.js";

export function numSequence(seqLength, minPow) {
    const isVal = task6Validator(seqLength, minPow);
    if (isVal !== null) {
        return isVal
    }

    let nextNum = Math.ceil(Math.sqrt(minPow));
    let strSequence = `${nextNum}`;
    for (let i = 1; i < seqLength; i++) {
        nextNum += 1;
        strSequence += `,${nextNum}`;
    }

    return strSequence
}