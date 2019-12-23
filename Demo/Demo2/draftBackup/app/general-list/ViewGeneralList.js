import {
    TemplaterAnimalCard
} from './TemplaterAnimalCard.js';

export class ViewGeneralList {
    constructor() {
        this.templater = new TemplaterAnimalCard();
        this.animalsWindow = document.querySelector('.animals-window');
        this.navBar = document.querySelector('.nav-bar');
    }
    renderAnimalsList(animalsArr) {
        this.animalsWindow.innerHTML = animalsArr.map(obj => this.templater.getCardTemplate(obj)).join('');
    }
    renderNavBar(navArr, {current,last}) {
        this.navBar.innerHTML = this.templater.getNavTemplate(navArr);
        const navBtnArr = [...document.querySelectorAll('.page-item')];
        const pageLinkArr = [...document.querySelectorAll('.page-link')];
        if (current === 1) {
            navBtnArr[0].classList.add('disabled');
        } else if (current === last) {
            navBtnArr[navBtnArr.length - 1].classList.add('disabled');
        }
        for (let i = 0; i < pageLinkArr.length; i++) {
            if(Number(pageLinkArr[i].text) === current) {
                navBtnArr[i].classList.add('active')
            }
        }
    }
    addNavBarListner(func) {
        this.navBar.addEventListener('click', func);
    }
    addDetailsListner(func){
        const detailsBtnArr = [...document.querySelectorAll('.details-btn')];
        detailsBtnArr[0].addEventListener('click', (e) => console.log(e))
        detailsBtnArr.forEach(btn => {
            btn.addEventListener('click', func)
        });
    }
    getClickedElemId(e){
        console.log(e);
        return e.target.dataset.card_id;
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}