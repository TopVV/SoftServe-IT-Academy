import {
    ControllerGeneralList
} from './general-list/ControllerGeneralList.js';
import {
    ControllerDetails
} from './details/ControllerDetails.js';
import {
    ControllerAnimalsData
} from './animals-data/ControllerAnimalsData.js';
import {
    ControllerSearch
} from './search/ControllerSearch.js';
import {
    Publisher
} from './share/Publisher.js';

const publisher = new Publisher();
const controllerAnimalsData = new ControllerAnimalsData(publisher.ctrls);
const controllerGeneral = new ControllerGeneralList(publisher.ctrls);
const controllerSearch = new ControllerSearch(publisher.ctrls);
const controllerDetails = new ControllerDetails(publisher.ctrls);