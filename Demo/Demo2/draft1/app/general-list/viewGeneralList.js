import {animalCardTemplater} from './animalCardTemplater.js';

export class viewGeneralList {
    constructor(){
        this.templater = new animalCardTemplater();
        this.animalsWindow = document.querySelector('.animals-window');
    }
    renderAnimalsList(animalsArr){
        let htmlStr = '';

        animalsArr.forEach(obj => {
            htmlStr += this.templater.getCardTemplate(obj);
        })

        this.animalsWindow.innerHTML = htmlStr;
    }
}