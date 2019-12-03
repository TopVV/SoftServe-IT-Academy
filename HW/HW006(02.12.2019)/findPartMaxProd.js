function findPartMaxProd(n) {
    /* var arr1, arr2, maxProduct;
    // your code here
    return [arr1, arr2, maxProduct] // or [arr1, maxProduct] */
    let maxArr = [];
    let partition = [n];



    return partition
}

let arrays = [];
let numbers = [];

let n = 8;

function checkPartition(arr) {

    if (arr[0] === 1) {
        return
    }

    arrays.push(arr.slice());
    numbers.push(arr.reduce((acc, cur) => acc * cur));

    console.log(arr);

    if (arr[arr.length - 1] > 1) {
        let newArr = [...arr];
        newArr[newArr.length - 1]  -= 1;
        newArr.push(1);
        checkPartition(newArr)
    }

    return 
}

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

checkPartition([8])

console.log(arrays + "  ~  " + numbers);

/*     if (arr[arr.length - 1] > 1) {
        arr[arr.length - 1] -= 1;
        arr.push(1);
        return checkPartition(arr)
    }

    arr[0] -= 1;
    arr[1] = 8 - arr[0]; */