import {animalCardTemplater} from './animalCardTemplater.js';

export class viewGeneralList {
    constructor(){
        this.templater = new animalCardTemplater();
        this.animalsWindow = document.querySelector('.animals-window');
        this.navBar = document.querySelector('.nav-bar');
    }
    renderAnimalsList(animalsArr){
        this.animalsWindow.innerHTML = animalsArr.map(obj => this.templater.getCardTemplate(obj)).join('');
    }
    renderNavBar(navObj){
        this.navBar.innerHTML = this.templater.getNavTemplate(navObj);
    }
    addNavBarListner(func){
        this.navBar.addEventListener('click', func)
    }
}