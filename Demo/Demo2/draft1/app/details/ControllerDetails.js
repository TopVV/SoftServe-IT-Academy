import {
    ModelGeneralList
} from './../general-list/ModelGeneralList.js';
import {
    ViewDetails
} from './ViewDetails.js';


export class ControllerDetails {
    constructor({subscribe, unsubscribe, notify}) {
        this.model = new ModelGeneralList();
        this.view = new ViewDetails();
    }
    // this.view.
    showDetailes(objInfo){
        this.view.renderDetailsWindow(objInfo)
    }
}