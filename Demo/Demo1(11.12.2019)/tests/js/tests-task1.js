import {
  drawChessBoard
} from "./../../src/task1.js"

export function task1Tests(Test) {
  describe('Task 1: Chess Board tests', function () {
    it("Common correct input", function () {
      Test.deepEqual(drawChessBoard(5, 5, "*"),
        `*  *  *  *  *  
  *  *  *  *  *
*  *  *  *  *  
  *  *  *  *  *
*  *  *  *  *  
`
      );
      Test.deepEqual(drawChessBoard(10, 10, "@"),
        `@  @  @  @  @  @  @  @  @  @  
  @  @  @  @  @  @  @  @  @  @
@  @  @  @  @  @  @  @  @  @  
  @  @  @  @  @  @  @  @  @  @
@  @  @  @  @  @  @  @  @  @  
  @  @  @  @  @  @  @  @  @  @
@  @  @  @  @  @  @  @  @  @  
  @  @  @  @  @  @  @  @  @  @
@  @  @  @  @  @  @  @  @  @  
  @  @  @  @  @  @  @  @  @  @
`
      );
      Test.deepEqual(drawChessBoard(2, 2, "!"),
        `!  !  
  !  !
`);
    });
    it("Incorrect type of input data", function () {
      Test.deepEqual(drawChessBoard(5.5, 5, "*"), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(5, "5", "*"), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(5, 5, {}), {
        status: "failed",
        reason: "The symbol has to be a string with one symbol"
      });
      Test.deepEqual(drawChessBoard(Infinity, NaN, {}), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(Infinity, 2, "-"), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(NaN, 22, "+"), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(11, false, "+"), {
        status: "failed",
        reason: "Height and width have to be numbers"
      });
      Test.deepEqual(drawChessBoard(5, 5, "{}"), {
        status: "failed",
        reason: "The symbol has to be a string with one symbol"
      });
    });
    it("Incorrect min and max data of inputs", function () {
      Test.deepEqual(drawChessBoard(0, 55, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(55, 0, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(0, -5, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(-124123, 5, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(0, 3213215, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(0, 101, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
      Test.deepEqual(drawChessBoard(-20, 5, "*"), {
        status: "failed",
        reason: "Height and width have to be more than 0 and less or equal than 100"
      });
    });
  });
}