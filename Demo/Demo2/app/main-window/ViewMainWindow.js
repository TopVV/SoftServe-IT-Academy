import { TemplateMainWindow } from './TemplateMainWindow.js';

export class ViewMainWindow {
  constructor() {
    this.template = new TemplateMainWindow();
    this.mainWindow = document.querySelector('.main-window'); // main-window
    this.animalsWindow = document.querySelector('.animals-window');
    this.navBar = document.querySelector('.nav-bar');
  }
  renderAnimalsList(animalsArr) {
    this.animalsWindow.innerHTML = animalsArr
      .map(obj => this.template.getCardTemplate(obj))
      .join('');
  }
  renderNavBar(navArr, { current, last }) {
    this.navBar.innerHTML = this.template.getNavTemplate(navArr);
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
  addMainWindowListener(func) {
    this.mainWindow.addEventListener('click', func);
  }
  getScrollYPosition() {
    return window.scrollY;
  }
  scrollToYPosition(position) {
    scrollTo(0, position);
  }
/*   scrollToTop() {
    window.scrollTo(0, 0);
  } */
}
