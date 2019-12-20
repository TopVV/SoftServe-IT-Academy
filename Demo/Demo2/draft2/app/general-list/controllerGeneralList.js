import {modelGeneralList} from './modelGeneralList.js';
import {viewGeneralList} from './viewGeneralList.js';

export class controllerGeneralList {
    constructor(){
        this.model = new modelGeneralList();
        this.view = new viewGeneralList();
        this.getFirstAnimalsPage();
        this.view.addNavBarListner(this.handleNavBarClick.bind(this));
    }
    getFirstAnimalsPage() {
        this.model.getFirstPageData()
        .then(respBody => {
            this.view.renderAnimalsList(respBody);
            this.view.renderNavBar(this.model.getNavObj());
        })
    }
    getCustomAnimalsPage(pageN){
        this.view.renderAnimalsList(this.model.getCustomPage(pageN));
        this.view.renderNavBar(this.model.getNavObj());
    }
    handleNavBarClick(e){
        if(e.target.parentElement.classList.contains('listenable')) {
            this.getCustomAnimalsPage(e.target.innerText);
        }
    }
}