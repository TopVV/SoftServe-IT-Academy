import {task1Tests} from './tests-task1.js';
import {task2Tests} from './tests-task2.js';
import {task3Tests} from './tests-task3.js';
import {task4Tests} from './tests-task4.js';
import {task5Tests} from './tests-task5.js';
import {task6Tests} from './tests-task6.js';
import {task7Tests} from './tests-task7.js';

mocha.setup('bdd');
let Test = chai.assert;

task1Tests(Test);
task2Tests(Test);
task3Tests(Test);
task4Tests(Test);
task5Tests(Test);
task6Tests(Test);
task7Tests(Test);

mocha.run();