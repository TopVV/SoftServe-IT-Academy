import {TemplateSearch} from './TemplateSearch.js';

export class ViewSearch {
    constructor() {
        this.searcForm = document.querySelector('.search-form');
        this.template = new TemplateSearch();
        this.searchBtn;
        this.searchInput;
    }
    renderSearchFrom(){
        this.searcForm.innerHTML = this.template.getSearchTemplate();
        this.searchBtn = document.querySelector('.search-btn');
        this.searchInput = document.querySelector('.search-input');
    }
    addSearchInputListner(func){
        this.searchInput.addEventListener('keyup', func);
    }
    getInputValue(){
        return this.searchInput.value;
    }
    resetInputValue(){
        this.searchInput.value = '';
    }
}