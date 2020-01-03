import { TemplateDetails } from './TemplateDetails.js';

export class ViewDetails {
  constructor() {
    this.template = new TemplateDetails();
    this.mainWindowWrap = document.querySelector('.main-window');
    this.detailsSection = document.querySelector('.details-info');
  }
  renderDetailsWindow(objInfo) {
    this.mainWindowWrap.classList.add('hidden');
    this.detailsSection.innerHTML = this.template.getDetailedCardTemplate(
      objInfo
    );
  }
  addDetailsWindowListener(func) {
    document.querySelector('.details-window').addEventListener('click', func);
  }
  renderAddToCartBtn(id) {
    document.querySelector(
      '.card-details-footer'
    ).innerHTML = document
      .querySelector('.card-details-footer')
      .innerHTML.replace(
        /<button.+to-cart.+button>/,
        this.getAddToCartBtnTemplate(id)
      );
  }
  renderRemoveFromCartBtn(id) {
    document.querySelector(
      '.card-details-footer'
    ).innerHTML = document
      .querySelector('.card-details-footer')
      .innerHTML.replace(
        /<button.+to-cart.+button>/,
        this.getRemoveCartBtnTemplate(id)
      );
  }
  getAddToCartBtnTemplate(id) {
    return this.template.getAddToCartBtnTemplate(id);
  }
  getRemoveCartBtnTemplate(id) {
    return this.template.getRemoveFromCartBtnTemplate(id);
  }
}
