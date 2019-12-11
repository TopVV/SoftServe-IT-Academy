class Validator extends Error {
    constructor() {
        super();
        this.errorMessage = null;
    };
    checkIfNumb(numb) {
        return typeof (numb) === "number" && !Number.isNaN(numb) || Number.isFinite(numb);
    };
    checkIfStr(str) {
        return typeof (str) === "string";
    };
    checkIfUnd(und) {
        return typeof (und) === "undefined";
    };
    checkIfObj(obj) {
        return typeof (obj) === "object" && !Array.isArray(obj);
    };
    checkIfArray(arr) {
        return Array.isArray(arr);
    };
    checkIfInteger(numb) {
        return Number.isInteger(numb);
    }
    checkMinMax(numb, min, max) {
        return Number(numb) > min && Number(numb) < max;
    };
    checkIfMinLessThanMax(min, max) {
        return Number(min) <= Number(max);
    }
    checkParamLength(param, length) {
        return param.length === length;
    };
    checkPropOfObj(prop, obj) {
        return obj.hasOwnProperty(prop);
    };
    checkIfLettersUnique(str) {
        const lettersSet = new Set;
        for (let i = 0; i < str.length; i++) {
            if (lettersSet.has(str[i])) {
                return false;
            } else {
                lettersSet.add(str[i])
            }
        }
        return true;
    };
    checkIfUpperCase(str) {
        return str === str.toUpperCase();
    };
    checkIfVerticesMatchSides(vertices, obj) {
        let loweredVertices = vertices.toLowerCase();
        for (let i = 0; i < loweredVertices.length; i++) {
            if (!this.checkPropOfObj(loweredVertices[i], obj)) {
                return false;
            }
        }
        return true;
    };
    checkIfCanMakeTriangle(a, b, c) {
        return a + b > c && a + c > b && b + c > a;
    };
    addErrObj(obj) {
        this.errorMessage = obj;
    };
    getErrMess() {
        return this.errorMessage;
    };
};

export function task1Validator(h, w, s) {
    const val = new Validator();

    if (!val.checkIfNumb(h) || !val.checkIfNumb(w) ||
        !val.checkIfInteger(h) || !val.checkIfInteger(w)) {
        val.addErrObj({
            status: "failed",
            reason: "Height and width have to be numbers"
        });
    } else if (!val.checkIfStr(s) || !val.checkParamLength(s, 1)) {
        val.addErrObj({
            status: "failed",
            reason: "The symbol has to be a string with one symbol"
        });
    } else if (!val.checkMinMax(h, 0, 101) || !val.checkMinMax(w, 0, 101)) {
        val.addErrObj({
            status: "failed",
            reason: "Height and width have to be more than 0 and less or equal than 100"
        });
    }

    return val.getErrMess();
}

export function task2Validator(obj1, obj2) {
    const val = new Validator();
    if (!val.checkIfObj(obj1) || !val.checkIfObj(obj2)) {
        val.addErrObj({
            status: "failed",
            reason: "Input has to include two envelopes objects with a,b and c,d sides"
        })
    } else {
        const sidesArr = [obj1.a, obj1.b, obj2.c, obj2.d];

        for (let i = 0; i < sidesArr.length; i++) {
            if (val.checkIfUnd(sidesArr[i])) {
                val.addErrObj({
                    status: "failed",
                    reason: "Envelopes objects have to have a,b and c,d sides"
                })
            } else if (!val.checkIfNumb(sidesArr[i])) {
                val.addErrObj({
                    status: "failed",
                    reason: "Envelopes sides have to be a number"
                })
            } else if (!val.checkMinMax(sidesArr[i], 0, 1000000)) {
                val.addErrObj({
                    status: "failed",
                    reason: "Envelopes sides have to be between 1 and 1000000"
                })
            }
        }
    }

    return val.getErrMess();
}

export function task3Validator(trianglesArr) {
    const val = new Validator();

    if (!val.checkIfArray(trianglesArr) ||
        !val.checkMinMax(trianglesArr.length, 0, 100)) {
        val.addErrObj({
            status: "failed",
            reason: 'Input has to be an array with objects (max length of the array is 100 objects)'
        });
    }

    if (!val.getErrMess()) {

        for (let i = 0; i < trianglesArr.length; i++) {
            if (!val.checkIfObj(trianglesArr[i])) {
                val.addErrObj({
                    status: "failed",
                    reason: "The array has to contain objects only"
                });
                break;
            } else if (!val.checkIfStr(trianglesArr[i].vertices) ||
                !val.checkIfLettersUnique(trianglesArr[i].vertices) ||
                !val.checkIfUpperCase(trianglesArr[i].vertices) ||
                !val.checkParamLength(trianglesArr[i].vertices, 3)) {
                val.addErrObj({
                    status: "failed",
                    reason: `The ${i+1} object of the array has to contain "vertices" property  with 3 unique letters in the uppercase`
                });
                break;
            } else if (!val.checkIfVerticesMatchSides(trianglesArr[i].vertices, trianglesArr[i])) {
                val.addErrObj({
                    status: "failed",
                    reason: `The vertices letters in the ${i+1} object of the array have to match with sides property names`
                });
                break;
            }

            const sidesArr = [trianglesArr[i][trianglesArr[i].vertices[0].toLowerCase()],
                trianglesArr[i][trianglesArr[i].vertices[1].toLowerCase()],
                trianglesArr[i][trianglesArr[i].vertices[2].toLowerCase()]
            ];

            if (!val.getErrMess()) {

                for (let j = 0; j < sidesArr.length; j++) {
                    if (val.checkIfUnd(sidesArr[j])) {
                        val.addErrObj({
                            status: "failed",
                            reason: `One or more sides in the ${i+1} object of the array are not defined`
                        });
                        break;
                    } else if (!val.checkIfNumb(sidesArr[j])) {
                        val.addErrObj({
                            status: "failed",
                            reason: `One or more sides in the ${i+1} object of the array is not a number`
                        });
                        break;
                    } else if (!val.checkMinMax(sidesArr[j], 0, 1000000)) {
                        val.addErrObj({
                            status: "failed",
                            reason: `One or more sides in the ${i+1} object of the array are not between 1 and 1000000`
                        });
                        break;
                    }
                }
            }
            if (!val.getErrMess()) {
                if (!val.checkIfCanMakeTriangle(...sidesArr)) {
                    val.addErrObj({
                        status: "failed",
                        reason: `Sides in the ${i+1} object of the array can't form a triangle`
                    });
                    break;
                }
            }
        }
    }
    return val.getErrMess();
}

export function task4Validator(inputNumb) {
    const val = new Validator;
    if (!val.checkIfNumb(inputNumb) ||
        !val.checkMinMax(inputNumb, 10, 9007199254740991)) {
        val.addErrObj({
            status: "failed",
            reason: "Input has to be a number between 10 and 9007199254740991"
        })
    }
    return val.getErrMess();
}

export function task5Validator(inputObj) {
    const val = new Validator;
    if (!val.checkIfObj(inputObj) ||
        !val.checkPropOfObj("min", inputObj) ||
        !val.checkPropOfObj("max", inputObj)) {
        val.addErrObj({
            status: "failed",
            reason: 'Input has to be an object with "min" and "max" property'
        });
    } else if (!val.checkIfStr(inputObj.min) ||
        !val.checkIfStr(inputObj.max) ||
        !val.checkParamLength(inputObj.min, 6) ||
        !val.checkParamLength(inputObj.min, 6)) {
        val.addErrObj({
            status: "failed",
            reason: 'Min and max have to be a 6 character string'
        });
    } else if (!val.checkMinMax(inputObj.min, -1, 1000000) ||
        !val.checkMinMax(inputObj.max, -1, 1000000)) {
        val.addErrObj({
            status: "failed",
            reason: 'Min and max have contain a number between 000000 and 999999'
        });
    } else if (!val.checkIfMinLessThanMax(inputObj.min, inputObj.max)) {
        val.addErrObj({
            status: "failed",
            reason: 'Min has to be less than max'
        });
    }
    return val.getErrMess();
}

export function task6Validator(seqLength, minPow) {
    const val = new Validator;
    if (!val.checkIfNumb(seqLength) ||
        !val.checkIfInteger(seqLength) ||
        !val.checkMinMax(seqLength, 0, 100)) {
        val.addErrObj({
            status: "failed",
            reason: 'Length has to be an integer number between 1 and 100'
        });
    } else if (!val.checkIfNumb(minPow) ||
        !val.checkMinMax(minPow, 0, 10000)) {
        val.addErrObj({
            status: "failed",
            reason: 'Min square has to be a number between 1 and 10000'
        });
    }
    return val.getErrMess()
}

export function task7Validator(inputObj) {
    const val = new Validator;
    if (!val.checkIfObj(inputObj)) {
        val.addErrObj({
            status: "failed",
            reason: 'Input has to be an object'
        });
    }

    if (!val.getErrMess() &&
        val.checkPropOfObj("min", inputObj) && val.checkPropOfObj("max", inputObj) && !val.checkPropOfObj("length", inputObj)) {
        if (!val.getErrMess() && val.checkPropOfObj("min", inputObj) && val.checkPropOfObj("max", inputObj)) {
            if (!val.checkIfNumb(inputObj.min) || !val.checkIfNumb(inputObj.max) ||
                !val.checkMinMax(inputObj.min, -1, 100) || !val.checkMinMax(inputObj.max, -1, 101)) {
                val.addErrObj({
                    status: "failed",
                    reason: 'Min and max have to be a number between 1 and 100'
                });
            } else if (!val.checkIfMinLessThanMax(inputObj.min, inputObj.max)) {
                val.addErrObj({
                    status: "failed",
                    reason: 'Max has to be bigger than min'
                });
            }
        }
    } else if (!val.getErrMess() &&
        !val.checkPropOfObj("min", inputObj) && !val.checkPropOfObj("max", inputObj) && val.checkPropOfObj("length", inputObj)) {
        if (!val.getErrMess() && val.checkPropOfObj('length', inputObj)) {
            if (!val.checkIfNumb(inputObj.length) ||
                !val.checkMinMax(inputObj.length, 0, 100)) {
                val.addErrObj({
                    status: "failed",
                    reason: 'Length has to be a number between 1 and 100'
                });
            }
        }
    } else if (val.checkPropOfObj("min", inputObj) && !val.checkPropOfObj("max", inputObj) ||
        !val.checkPropOfObj("min", inputObj) && val.checkPropOfObj("max", inputObj)
    ) {
        val.addErrObj({
            status: "failed",
            reason: 'The object has to contain min and max (both at the same time) or length'
        });
    } else if (val.checkPropOfObj("min", inputObj) && val.checkPropOfObj("max", inputObj) && val.checkPropOfObj("length", inputObj)) {
        val.addErrObj({
            status: "failed",
            reason: 'Min/max or length properties(not both at the same time)'
        });
    }

    return val.getErrMess()
}