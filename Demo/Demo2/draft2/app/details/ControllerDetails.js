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
        this.subscribe = subscribe;
        this.notify = notify;
        subscribe('show-details', this.showDetailes.bind(this))
    }
    showDetailes(objInfo){
        this.view.renderDetailsWindow(objInfo);
        this.view.addCloseBtnListner(this.handleCloseBtn);
    }
    handleCloseBtn(e) {
        document.querySelector('.details-window').remove();
        document.querySelector('.general-list').classList.remove('hidden');
    }
}