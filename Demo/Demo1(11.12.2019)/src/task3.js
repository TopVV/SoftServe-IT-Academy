import {
    task3Validator
} from "./../additional-scripts/validator.js";

export function sortTriangles(trianglesArr) {
    const isVal = task3Validator(trianglesArr);
    if (isVal !== null) {
        return isVal
    }

    return trianglesArr
        .sort(sortFunc)
        .map(item => item.vertices)
}

function heronsFormula(a, b, c) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))

}

function getLowerCaseVertice(obj, numb) {
    return obj.vertices[numb].toLowerCase()
}

function sortFunc(first, second) {
    return heronsFormula(second[getLowerCaseVertice(second, 0)], second[getLowerCaseVertice(second, 1)], second[getLowerCaseVertice(second, 2)]) -
        heronsFormula(first[getLowerCaseVertice(first, 0)], first[getLowerCaseVertice(first, 1)], first[getLowerCaseVertice(first, 2)])
}