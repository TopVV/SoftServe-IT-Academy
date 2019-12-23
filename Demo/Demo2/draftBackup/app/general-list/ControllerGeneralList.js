import {
    ModelGeneralList
} from './ModelGeneralList.js';
import {
    ViewGeneralList
} from './ViewGeneralList.js';

export class ControllerGeneralList {
    constructor({subscribe, unsubscribe, notify}) {
        this.model = new ModelGeneralList({subscribe, unsubscribe, notify});
        this.view = new ViewGeneralList();
        this.getCustomAnimalsPage()
        // this.getFirstAnimalsPage();
        // this.view.addNavBarListner(this.handleNavBarClick.bind(this));
        this.notify = notify;
        this.subscribe = subscribe;
        this.subscribe('pets-data-rdy', this.getCustomAnimalsPage.bind(this));
    }
   /*  getFirstAnimalsPage() {
        this.model.getFirstPageData()
            .then(respBody => {
                this.view.renderAnimalsList(respBody);
                this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
                this.view.addDetailsListner(this.handleDetailsBtnClick.bind(this));
            })
    } */
    
    getCustomAnimalsPage(pageN) {
        this.view.renderAnimalsList(this.model.getCustomPage(pageN));
        this.view.renderNavBar(this.model.getNavArr(), this.model.getNavStat());
    }
    handleNavBarClick(e) {
        if (e.target.dataset.page_n !== undefined) {
            this.getCustomAnimalsPage(Number(e.target.dataset.page_n));
        }
    }
    handleDetailsBtnClick(e){
        this.notify('show-details', this.view.getClickedElemId(e));
    }
}