import {
    ModelGeneralList
} from './ModelGeneralList.js';
import {
    ViewGeneralList
} from './ViewGeneralList.js';

export class ControllerGeneralList {
    constructor({subscribe, unsubscribe, notify}) {
        this.model = new ModelGeneralList();
        this.view = new ViewGeneralList();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('animals-data-updated', this.getFirstAnimalsPage.bind(this));
        this.subscribe('new-search-result', this.getSearchedPage.bind(this));
    }
    getFirstAnimalsPage(animalBase){
        this.model.setNewAnimalBase(animalBase);
        this.getCustomAnimalsPage();
    }
    
    getCustomAnimalsPage(pageN) {
        this.view.renderAnimalsList(this.model.getCustomData(pageN));
        this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
        this.view.addNavBarListner(this.handleNavBarClick.bind(this));
        this.view.addDetailsListner(this.handleDetailsBtnClick.bind(this));
    }
    getSearchedPage(resultsArr) {
        this.view.renderAnimalsList(resultsArr);
        this.view.addDetailsListner(this.handleDetailsBtnClick.bind(this));
    }
    handleNavBarClick(e) {
        if (e.target.dataset.page_n !== undefined) {
            this.getCustomAnimalsPage(Number(e.target.dataset.page_n));
        }
    }
    handleDetailsBtnClick(e){
        this.notify('show-details', this.model.getAnimalById(Number(e.target.dataset.card_id)));
    }
}