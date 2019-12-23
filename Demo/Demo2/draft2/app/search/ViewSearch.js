import {TemplateSearch} from './TemplateSearch.js';

export class ViewSearch {
    constructor() {
        this.searcForm = document.querySelector('.search-form');
        this.template = new TemplateSearch();
    }
    renderSearchFrom(){
        this.searcForm.innerHTML = this.template.getSearchTemplate();
    }
    addSearchBtnListner(func){
        document.querySelector('.search-btn').addEventListener('click', func);
    }
    getInputValue(){
        return document.querySelector('.search-input').value;
    }
    resetInputValue(){
        document.querySelector('.search-input').value = ''
    }
}