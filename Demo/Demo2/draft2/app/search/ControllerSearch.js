import {ViewSearch} from './ViewSearch.js';

export class ControllerSearch {
    constructor({subscribe, unsubscribe, notify}) {
        this.view = new ViewSearch(this.handleSearchBtn.bind(this));
        this.getSearchForm();
        this.notify = notify;
    }
    getSearchForm(){
        this.view.renderSearchFrom();
        this.view.addSearchInputListner(this.handleSearchBtn.bind(this));
    }
    handleSearchBtn(){
        this.notify('new-search-request', this.view.getInputValue().toLowerCase());
    }
}
