import { TemplateMainWindow } from './TemplateMainWindow.js';

export class ViewMainWindow {
  constructor() {
    this.templater = new TemplateMainWindow();
    this.mainWindow = document.querySelector('.main-wrapper'); // main-window
    this.animalsWindow = document.querySelector('.animals-window');
    this.navBar = document.querySelector('.nav-bar');
  }
  renderAnimalsList(animalsArr) {
    this.animalsWindow.innerHTML = animalsArr
      .map(obj => this.templater.getCardTemplate(obj))
      .join('');
  }
  renderNavBar(navArr, { current, last }) {
    this.navBar.innerHTML = this.templater.getNavTemplate(navArr);
    const navBtnArr = [...document.querySelectorAll('.page-item')];
    const pageLinkArr = [...document.querySelectorAll('.page-link')];
    if (current === 1) {
      navBtnArr[0].classList.add('disabled');
    }
    if (current === last) {
      navBtnArr[navBtnArr.length - 1].classList.add('disabled');
    }
    for (let i = 0; i < pageLinkArr.length; i++) {
      if (Number(pageLinkArr[i].text) === current) {
        navBtnArr[i].classList.add('active');
      }
    }
  }
  addMainlWindowListner(func) {
    this.mainWindow.addEventListener('click', func);
  }
  /*     scrollToTop() {
            window.scrollTo(0, 0);
        } */
}
