import {modelGeneralList} from './modelGeneralList.js';
import {viewGeneralList} from './viewGeneralList.js';

export class controllerGeneralList {
    constructor(){
        this.model = new modelGeneralList();
        this.view = new viewGeneralList();
    }
    getAnimalsList() {
        this.model.getAnimalsListArr()
        .then(animalsObj => this.view.renderAnimalsList(animalsObj))
    }
}