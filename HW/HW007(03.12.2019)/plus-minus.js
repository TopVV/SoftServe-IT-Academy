/* [1, 3, 4, 6, 8], -2), true);
  [15, 2, 3], 10), true);
  [1, 5, 3, 2, 5], -2), false); */

console.log("-".repeat(30));


/* function getSolution(arr, sum) {
    arr.forEach(element => {
        if (typeof (element) !== "number") {
            throw new Error("elements in the array have to be numbers")
        }
    });
    if (typeof (sum) !== "number") {
        throw new Error("sum has to be a number")
    }
}*/

// console.log(getSolution([1, 5, 3, 2, 5], 6));

// const arr = [1, 5, 3, 2, 5];

const testArr = [1, 2, 3];
const signs = ["+", "-"];

// let plusMinPlaces = testArr.length - 1;

let positions = testArr.length - 1;
let nCombinations = Math.pow(signs.length, positions);

const combinationsArr = [];

/* for (let i = 0; i < nCombinations; i++) {
    for (let j = 0; j < positions; j++) {
        for (let k = 0; k < signs.length; k++) {
            console.log("pos:", j, "sign:", signs[k]);
            combinationsArr.push(signs[k])
        }
    }
} */

// testArr[0] += "+";

console.log(combinationsArr);


// console.log(combinationsArr);


// variantsArr.forEach(element => {
//     console.log(eval(element))
// })


/* var combinations = []
for {pos in positions}
  for {sign in signs}
     combinations.push(buildCombination(pos, sign)) */

     ;
     

/* function getSolution(arr, sum) {
    let sums = new Set([arr[0]]);
    for (let i = 1; i < arr.length; i++) {
        let nextSums = new Set();
        for (let x of sums)
            nextSums.add(x + arr[i]).add(x - arr[i]);
            console.log(nextSums)
        sums = nextSums;
    }
    return sums.has(sum);
} */



getSolution(testArr, 5)