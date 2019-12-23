import {
    TemplaterDetails
} from './TemplaterDetails.js';

export class ViewDetails {
    constructor() {
        this.templater = new TemplaterDetails();
        this.generalList = document.querySelector('.general-list');
        this.detailesSection = document.querySelector('.details-info');
    }
    renderDetailsWindow(objInfo){
        this.generalList.classList.add('hidden');
        this.detailesSection.innerHTML = this.templater.getDetailedCardTemplate(objInfo);
    }
}