import { TemplateMainWindow } from './TemplateMainWindow.js';

export class ViewMainWindow {
  constructor() {
    this.template = new TemplateMainWindow();
    this.mainWindow = document.querySelector('.main-window'); // main-window
    this.animalsWindow = document.querySelector('.animals-window');
    this.navBar = document.querySelector('.nav-bar');
    this.arrowUp = document.querySelector('.arrow-up');
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
  renderQuickSpecies() {
    document.querySelector(
      '.quick-species'
    ).innerHTML = this.template.getQuickSpeciesTemplate();
  }
  renderActiveSpecies(activeSpecies) {
    [...document.querySelectorAll('.species-btn')].forEach(btn => {
      if (btn.dataset.quick_species === activeSpecies) {
        btn.classList.add('active-species', 'disabled-species');
      }
    });
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
  addScrollListener(func) {
    // document.addEventListener('scroll', func);
    document.addEventListener('scroll', func);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  renderArrowUp() {
    this.arrowUp.innerHTML = this.template.getUpBtnTemplate();
  }
  getToUpBtnDisplayed() {
    this.arrowUp.classList.remove('to-up-disabled');
  }
  getToUpBtnHidden() {
    this.arrowUp.classList.add('to-up-disabled');
  }
}
