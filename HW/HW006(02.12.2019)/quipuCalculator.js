function calculateQuipuStr(quipuStr) {
    let quipuNumber = quipuToNumber(quipuStr);
    let resultNumber = eval(quipuNumber);
    return numberToQuipu(resultNumber);
}


function quipuToNumber(quipuStr) {
    let strWithNumbers = quipuStr;

    let regexpZeros = new RegExp(`(?<=~|0)${"~"}`, "g");
    strWithNumbers = strWithNumbers.replace(regexpZeros, "0");

    for (let i = 1; i < 10; i++) {
        let regexpNumbers = new RegExp(`(?<!@)${"@".repeat(i)}(?!@)`, "g");
        strWithNumbers = strWithNumbers.replace(regexpNumbers, `${i}`);
    }

    strWithNumbers = strWithNumbers.replace(/~/g, "");

    return strWithNumbers
}

function numberToQuipu(number) {
    let strNumber = number.toString();

    strNumber = strNumber.replace(/0/g, "~");

    for (let i = 1; i < 10; i++) {
        let regexpLastNumber = new RegExp(`${i}(?=0|$)`, "g");
        strNumber = strNumber.replace(regexpLastNumber, `${"@".repeat(i)}`);
        let regexpNumber = new RegExp(`(?<!~)${i}`, "g");
        strNumber = strNumber.replace(regexpNumber, `${"@".repeat(i)}~`);
        let regexpNumberAfterZero = new RegExp(`(?<=~)${i}`, "g");
        strNumber = strNumber.replace(regexpNumberAfterZero, `${"@".repeat(i)}~`);
    }

    return strNumber
}