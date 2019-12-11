import {drawChessBoard} from './src/task1.js';
import {envelopeAnalysis} from './src/task2.js';
import {sortTriangles} from './src/task3.js';
import {findPalindrome} from './src/task4.js';
import {countLuckyTickets} from './src/task5.js';
import {numSequence} from './src/task6.js';
import {buildFibSequence} from './src/task7.js';

import {addEvListToClass} from './additional-scripts/page-customisation.js';
import {task1FormInit} from './additional-scripts/page-customisation.js';
import {task2FormInit} from './additional-scripts/page-customisation.js';
import {task3FormInit} from './additional-scripts/page-customisation.js';
import {task4FormInit} from './additional-scripts/page-customisation.js';
import {task5FormInit} from './additional-scripts/page-customisation.js';
import {task6FormInit} from './additional-scripts/page-customisation.js';
import {task7FormInit} from './additional-scripts/page-customisation.js';




addEvListToClass('task-text');
task1FormInit(drawChessBoard);
task2FormInit(envelopeAnalysis);
task3FormInit(sortTriangles);
task4FormInit(findPalindrome);
task5FormInit(countLuckyTickets);
task6FormInit(numSequence);
task7FormInit(buildFibSequence);




