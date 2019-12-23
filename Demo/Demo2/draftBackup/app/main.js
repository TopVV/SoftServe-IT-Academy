import {
    ControllerGeneralList
} from './general-list/ControllerGeneralList.js';
import {
    ControllerDetails
} from './details/ControllerDetails.js';
import {
    ControllerPetsData
} from './pets-data/ControllerPetsData.js';
import {
    Publisher
} from './share/Publisher.js';

const publisher = new Publisher();
const controllerPetsData = new ControllerPetsData(publisher.ctrls);
const controllerGeneral = new ControllerGeneralList(publisher.ctrls);
const controllerDetails = new ControllerDetails(publisher.ctrls);