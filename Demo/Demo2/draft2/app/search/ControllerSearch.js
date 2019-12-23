import {ViewSearch} from './ViewSearch.js';

export class ControllerSearch {
    constructor({subscribe, unsubscribe, notify}) {
        this.view = new ViewSearch(this.handleSearchBtn.bind(this));
        this.getSearchForm();
        this.notify = notify;
    }
    getSearchForm(){
        this.view.renderSearchFrom();
        this.view.addSearchBtnListner(this.handleSearchBtn.bind(this));
    }
    handleSearchBtn(){
        this.notify('new-search', this.view.getInputValue().toLowerCase());
        this.view.resetInputValue();
    }
}