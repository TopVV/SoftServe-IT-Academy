export function addEvListToClass(nameOfClass) {
    const classArr = document.getElementsByClassName(nameOfClass);
    for (let i = 0; i < classArr.length; i++) {
        classArr[i].addEventListener('click', formOnClickAction);
    }
}

function hideElements(elemClass) {
    const elementsArr = document.getElementsByClassName(elemClass);
    for (let i = 0; i < elementsArr.length; i++) {
        elementsArr[i].classList.remove("active");
    }
}

function formOnClickAction(event) {
    if (event.target.parentElement.lastElementChild.classList.contains("active")) {
        event.target.parentElement.lastElementChild.classList.toggle("active");
    } else {
        hideElements("task-form");
        event.target.parentElement.lastElementChild.classList.add("active");
        clearForms(".task-form");
    }
}

function clearForms(clsName) {
    [...document.querySelectorAll(clsName)].forEach(elem => elem.firstElementChild.reset())
}

function renderOutputWindow(val) {
    document.querySelector(".output-window").innerHTML = val;
}

function renderInputWindow(str) {
    document.querySelector(".input-window").innerHTML = str.toString();
};

export function task1FormInit(taskFunc) {
    const taskForm = document.getElementById('task1Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const taskH = taskForm.boardHeight.value;
        const taskW = taskForm.boardWidth.value;
        const taskS = taskForm.boardSymbol.value;
        renderInputWindow(`Height: ${taskH} | Width: ${taskW} | Symbol: ${taskS}`);
        const taskOutput = taskFunc(Number(taskH), Number(taskW), taskS);
        if (typeof (taskOutput) === "object") {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        } else {
            renderOutputWindow(taskOutput)
        }
        taskForm.reset();
    }
}

export function task2FormInit(taskFunc) {
    const taskForm = document.getElementById('task2Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const taskA = taskForm.a.value;
        const taskB = taskForm.b.value;
        const taskC = taskForm.c.value;
        const taskD = taskForm.d.value;

        renderInputWindow(`a: ${taskA} | b: ${taskB} | c: ${taskC} | d: ${taskD}`);
        const taskOutput = taskFunc({
            a: Number(taskA),
            b: Number(taskB)
        }, {
            c: Number(taskC),
            d: Number(taskD)
        });
        if (typeof (taskOutput) === "object") {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        } else {
            renderOutputWindow(taskOutput)
        }
        taskForm.reset();
    }
}

export function task3FormInit(taskFunc) {
    const taskForm = document.getElementById('task3Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const vert1 = taskForm.v1.value.length === 3 ? taskForm.v1.value : "   ";
        const vert2 = taskForm.v2.value.length === 3 ? taskForm.v2.value : "   ";
        const vert3 = taskForm.v3.value.length === 3 ? taskForm.v3.value : "   ";
        const sid1 = taskForm.s1.value;
        const sid2 = taskForm.s2.value;
        const sid3 = taskForm.s3.value;

        const vert1s1 = vert1[0].toLowerCase();
        const vert1s2 = vert1[1].toLowerCase();
        const vert1s3 = vert1[2].toLowerCase();
        const vert2s1 = vert2[0].toLowerCase();
        const vert2s2 = vert2[1].toLowerCase();
        const vert2s3 = vert2[2].toLowerCase();
        const vert3s1 = vert3[0].toLowerCase();
        const vert3s2 = vert3[1].toLowerCase();
        const vert3s3 = vert3[2].toLowerCase();

        const sid1Arr = sid1.split(",");
        const sid2Arr = sid2.split(",");
        const sid3Arr = sid3.split(",");

        renderInputWindow(`1st Vertices: ${vert1}, 1st Sides: ${sid1} | 2nd Vertices: ${vert2}, 2nd Sides: ${sid2} |  3rd Vertices: ${vert3}, 3rd Sides: ${sid3}`);

        const userObj1 = {};
        const userObj2 = {};
        const userObj3 = {};

        userObj1.vertices = vert1;
        userObj1[vert1[0].toLowerCase()] = Number(sid1Arr[0]);
        userObj1[vert1[1].toLowerCase()] = Number(sid1Arr[1]);
        userObj1[vert1[2].toLowerCase()] = Number(sid1Arr[2]);
        userObj2.vertices = vert2;
        userObj2[vert2[0].toLowerCase()] = Number(sid2Arr[0]);
        userObj2[vert2[1].toLowerCase()] = Number(sid2Arr[1]);
        userObj2[vert2[2].toLowerCase()] = Number(sid2Arr[2]);
        userObj3.vertices = vert3;
        userObj3[vert3[0].toLowerCase()] = Number(sid3Arr[0]);
        userObj3[vert3[1].toLowerCase()] = Number(sid3Arr[1]);
        userObj3[vert3[2].toLowerCase()] = Number(sid3Arr[2]);

        const taskOutput = taskFunc([userObj1, userObj2, userObj3]);

        if (Array.isArray(taskOutput)) {
            renderOutputWindow(taskOutput.toString())
        } else {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        }
        taskForm.reset();
    }
}

export function task4FormInit(taskFunc) {
    const taskForm = document.getElementById('task4Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const inpNumb = taskForm.inpNumb.value;

        renderInputWindow(`Number: ${inpNumb}`);
        const taskOutput = taskFunc(Number(inpNumb));
        if (typeof (taskOutput) === "object") {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        } else {
            renderOutputWindow(taskOutput)
        }
        taskForm.reset();
    }
}

export function task5FormInit(taskFunc) {
    const taskForm = document.getElementById('task5Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const inpMin = taskForm.min.value;
        const inpMmax = taskForm.max.value;

        renderInputWindow(`Min: ${inpMin} | Max: ${inpMmax}`);
        const taskOutput = taskFunc({
            min: inpMin,
            max: inpMmax
        });
        if (taskOutput.hasOwnProperty("winner")) {
            renderOutputWindow(`Winner: ${taskOutput.winner}\n\nSimple: ${taskOutput.simple}\n\nHard: ${taskOutput.hard}`)
        } else {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        }
        taskForm.reset();
    }
}

export function task6FormInit(taskFunc) {
    const taskForm = document.getElementById('task6Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const taskL = taskForm.leng.value;
        const taskMinSqr = taskForm.minSqr.value;
        renderInputWindow(`Length: ${taskL} | Min square: ${taskMinSqr}`);
        const taskOutput = taskFunc(Number(taskL), Number(taskMinSqr));
        if (typeof (taskOutput) === "object") {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        } else {
            renderOutputWindow(taskOutput)
        }
        taskForm.reset();
    }
}

export function task7FormInit(taskFunc) {
    const taskForm = document.getElementById('task7Form');
    taskForm.onsubmit = e => {
        e.preventDefault();
        const taskMin = taskForm.inpMin.value;
        const taskMax = taskForm.inpMax.value;
        const taskL = taskForm.inpL.value;
        renderInputWindow(`Min: ${taskMin} | Max: ${taskMax} | Length: ${taskL}`);

        const inpObj = {};
        if (taskMin.length > 0) {
            inpObj.min = Number(taskMin);
        };
        if (taskMax.length > 0) {
            inpObj.max = Number(taskMax);
        };
        if (taskL.length > 0) {
            inpObj.length = Number(taskL);
        };
        const taskOutput = taskFunc(inpObj);

        if (Array.isArray(taskOutput)) {
            renderOutputWindow(taskOutput.toString())
        } else {
            renderOutputWindow(`Status: ${taskOutput.status}\n\nReason: ${taskOutput.reason}`)
        }
        taskForm.reset();
    }
}