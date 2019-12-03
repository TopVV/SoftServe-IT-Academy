function foundationMessage(letter) {
    const sentencesArr = strToSentences(letter);

    const hiddenMessageArr = [];

    decodeStrArr(sentencesArr, hiddenMessageArr);

    hiddenMessageStr = hiddenMessageArr.join(" ");
    hiddenMessageStr = hiddenMessageStr.toLowerCase();
    hiddenMessageStr = hiddenMessageStr.toLowerCase()
        .split('. ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join('. ');

    return hiddenMessageStr
}

function strToSentences(str) {
    return str.match(/[^.]+?(?=[.!?])/g)
}

function sentenceToWords(str) {
    return str.match(/[\w']+/g);
}

function decodeStrArr(strArr, message) {
    if (strArr === null) {
        return
    }
    const wordPosition = sentenceToWords(strArr[0]);
    for (let i = 0; i < wordPosition.length; i++) {
        message.push(sentenceToWords(strArr[i + 1])[wordPosition[i].length - 1]);
    }
    message[message.length - 1] += ".";
    strArr.splice(0, wordPosition.length + 1);
    if (strArr.length > 0) {
        return decodeStrArr(strArr, message)
    }
}