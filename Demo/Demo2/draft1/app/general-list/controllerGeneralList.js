import {modelGeneralList} from './modelGeneralList.js';
import {viewGeneralList} from './viewGeneralList.js';

export class controllerGeneralList {
    constructor(){
        this.model = new modelGeneralList();
        this.view = new viewGeneralList();
    }
    getAnimalsList() {
        this.model.getAnimalsListArr()
        .then(animalsArr => this.view.renderAnimalsList(animalsArr))
    }
    check(){
        console.log(this.model.animalBaseSrc, '2')
        
    }
}