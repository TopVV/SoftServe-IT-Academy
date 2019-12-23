import {
    TemplaterDetails
} from './TemplaterDetails.js';

export class ViewDetails {
    constructor() {
        this.templater = new TemplaterDetails();
        this.detailesSection = document.querySelector('.details-info');
    }
    renderDetailsWindow(objInfo){
        document.querySelector('.general-list').classList.add('hidden');
        this.detailesSection.innerHTML = this.templater.getDetailedCardTemplate(objInfo);
    }
    addCloseBtnListner(func) {
        document.querySelector('.close-btn').addEventListener('click', func);
    }
    
}