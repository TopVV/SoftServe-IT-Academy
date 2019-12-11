import {
    task1Validator
} from "./../additional-scripts/validator.js";

export function drawChessBoard(boardHeight, boardWidth, boardSymbol) {
    const isVal = task1Validator(boardHeight, boardWidth, boardSymbol);
    if (isVal !== null) {
        return isVal
    }

    let chessBoard = "";
    for (let i = 0; i < boardHeight; i++) {
        if (i % 2) {
            chessBoard += `  ${boardSymbol}`.repeat(boardWidth) + "\n";
        } else {
            chessBoard += `${boardSymbol}  `.repeat(boardWidth) + "\n";
        }
    }
    return chessBoard;
}